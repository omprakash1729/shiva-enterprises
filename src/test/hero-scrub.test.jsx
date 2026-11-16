import { act, render } from "@testing-library/react";
import { HeroScrub } from "../components/site/HeroScrub.jsx";

describe("HeroScrub", () => {
  it("coalesces scroll changes while seeking and applies the latest position", async () => {
    const originalRaf = window.requestAnimationFrame;
    const originalCancelRaf = window.cancelAnimationFrame;
    const originalScrollY = Object.getOwnPropertyDescriptor(window, "scrollY");
    const OriginalIntersectionObserver = globalThis.IntersectionObserver;
    const frames = [];
    let top = -1200;
    let scrollPosition = 1200;
    let seeking = false;
    let currentTime = 0;
    const seekTimes = [];
    const flushFrames = () => {
      frames.splice(0).forEach((callback) => callback(performance.now()));
    };

    window.requestAnimationFrame = (callback) => {
      frames.push(callback);
      return frames.length;
    };
    window.cancelAnimationFrame = () => {};
    globalThis.requestAnimationFrame = window.requestAnimationFrame;
    globalThis.cancelAnimationFrame = window.cancelAnimationFrame;
    Object.defineProperty(window, "scrollY", {
      configurable: true,
      get: () => scrollPosition,
    });
    globalThis.IntersectionObserver = class {
      constructor(callback) {
        this.callback = callback;
      }

      observe() {
        this.callback([{ isIntersecting: true }]);
      }

      disconnect() {}
    };

    const { container, unmount } = render(<HeroScrub />);
    const hero = container.querySelector("#top");
    const video = container.querySelector("video");
    hero.getBoundingClientRect = () => ({ top, height: 5400 });
    Object.defineProperties(video, {
      readyState: { configurable: true, value: 2 },
      duration: { configurable: true, value: 10 },
      seeking: { configurable: true, get: () => seeking },
      currentTime: {
        configurable: true,
        get: () => currentTime,
        set: (time) => {
          currentTime = time;
          seeking = true;
          seekTimes.push(time);
        },
      },
    });

    try {
      act(() => {
        window.dispatchEvent(new Event("resize"));
        flushFrames();
      });
      expect(frames).toHaveLength(0);
      expect(seekTimes).toHaveLength(1);

      top = -1800;
      scrollPosition = 1800;
      act(() => {
        window.dispatchEvent(new Event("scroll"));
        window.dispatchEvent(new Event("scroll"));
        flushFrames();
      });
      top = -3000;
      scrollPosition = 3000;
      act(() => {
        window.dispatchEvent(new Event("scroll"));
        flushFrames();
      });
      expect(seekTimes).toHaveLength(1);

      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 60));
        seeking = false;
        video.dispatchEvent(new Event("seeked"));
        flushFrames();
      });

      const expectedLatestTime = (3000 / (5400 - window.innerHeight)) * 10;
      expect(seekTimes).toHaveLength(2);
      expect(seekTimes[1]).toBeCloseTo(expectedLatestTime, 2);
    } finally {
      unmount();
      window.requestAnimationFrame = originalRaf;
      window.cancelAnimationFrame = originalCancelRaf;
      globalThis.requestAnimationFrame = originalRaf;
      globalThis.cancelAnimationFrame = originalCancelRaf;
      globalThis.IntersectionObserver = OriginalIntersectionObserver;
      if (originalScrollY) {
        Object.defineProperty(window, "scrollY", originalScrollY);
      } else {
        delete window.scrollY;
      }
    }
  });

  it("continues scrubbing when IntersectionObserver is unavailable", () => {
    const originalRaf = window.requestAnimationFrame;
    const originalCancelRaf = window.cancelAnimationFrame;
    const originalScrollY = Object.getOwnPropertyDescriptor(window, "scrollY");
    const OriginalIntersectionObserver = globalThis.IntersectionObserver;
    const frames = [];
    const seekTimes = [];
    let currentTime = 0;
    globalThis.IntersectionObserver = undefined;
    window.requestAnimationFrame = (callback) => {
      frames.push(callback);
      return frames.length;
    };
    window.cancelAnimationFrame = () => {};
    globalThis.requestAnimationFrame = window.requestAnimationFrame;
    globalThis.cancelAnimationFrame = window.cancelAnimationFrame;
    Object.defineProperty(window, "scrollY", {
      configurable: true,
      value: 1200,
    });

    const { container, unmount } = render(<HeroScrub />);
    const hero = container.querySelector("#top");
    const video = container.querySelector("video");
    hero.getBoundingClientRect = () => ({ top: -1200, height: 5400 });
    Object.defineProperties(video, {
      readyState: { configurable: true, value: 2 },
      duration: { configurable: true, value: 10 },
      seeking: { configurable: true, get: () => false },
      currentTime: {
        configurable: true,
        get: () => currentTime,
        set: (time) => {
          currentTime = time;
          seekTimes.push(time);
        },
      },
    });

    try {
      act(() => {
        window.dispatchEvent(new Event("resize"));
        frames.splice(0).forEach((callback) => callback(performance.now()));
      });
      expect(seekTimes).toHaveLength(1);
    } finally {
      unmount();
      window.requestAnimationFrame = originalRaf;
      window.cancelAnimationFrame = originalCancelRaf;
      globalThis.requestAnimationFrame = originalRaf;
      globalThis.cancelAnimationFrame = originalCancelRaf;
      globalThis.IntersectionObserver = OriginalIntersectionObserver;
      if (originalScrollY) {
        Object.defineProperty(window, "scrollY", originalScrollY);
      } else {
        delete window.scrollY;
      }
    }
  });
});
