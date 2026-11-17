import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight, MessageCircle, MousePointer2 } from "lucide-react";
const VIDEO_FPS = 24;
const MIN_SEEK_DELTA = 1 / VIDEO_FPS;
const MIN_SEEK_INTERVAL_MS = 1000 / VIDEO_FPS;
const SCENES = [
  {
    title: "Your balcony deserves a better view.",
    text: "Enjoy your outdoor space without unwanted visitors.",
    range: [0, 0.2],
    pos: "left-6 top-[36%] max-w-md lg:left-16 lg:top-[38%] lg:max-w-xl",
  },
  {
    title: "Protection you barely notice.",
    text: "Advanced transparent bird protection nets designed to blend naturally with your architecture.",
    range: [0.2, 0.4],
    pos: "right-6 top-[30%] max-w-md text-left lg:right-16 lg:top-[36%] lg:max-w-xl",
  },
  {
    title: "Designed to disappear.",
    text: "Preserve your balcony's openness, natural light, and architectural beauty.",
    range: [0.4, 0.6],
    pos: "left-6 bottom-[14%] max-w-md lg:left-16 lg:bottom-[18%] lg:max-w-xl",
  },
  {
    title: "Keep unwanted birds out.",
    text: "A discreet protective barrier that helps prevent pigeons and other birds from entering your balcony.",
    range: [0.6, 0.82],
    pos: "right-6 bottom-[14%] max-w-md lg:right-16 lg:bottom-[18%] lg:max-w-xl",
  },
  {
    title: "An open view. A protected space.",
    text: "Discover a smarter way to protect your balcony.",
    range: [0.82, 1.01],
    pos: "max-w-2xl text-center lg:left-1/2 lg:right-auto lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:max-w-3xl",
    final: true,
  },
];
function sceneIndexFor(progress) {
  for (let i = SCENES.length - 1; i >= 0; i--) {
    const scene = SCENES[i];
    if (scene && progress >= scene.range[0]) return i;
  }
  return 0;
}
export function HeroScrub() {
  const isMobile = useIsMobile();
  const wrapRef = useRef(null);
  const videoRef = useRef(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const [failed, setFailed] = useState(false);
  const [heroInView, setHeroInView] = useState(false);
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event) => setReduced(event.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  const videoSrc = isMobile ? "/media/hero-mobile-scrub.mp4" : "/media/hero-desktop-scrub.mp4";
  const posterSrc = isMobile ? "/media/hero-poster-mobile.jpg" : "/media/hero-poster-desktop.jpg";
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || reduced) return;
    const video = videoRef.current;
    let raf = null;
    let seekTimer = 0;
    let inView = false;
    let seekInFlight = false;
    let disposed = false;
    let lastSeekAt = Number.NEGATIVE_INFINITY;
    let latestTargetTime = 0;
    let sectionTop = 0;
    let scrollDistance = 0;
    const measureSection = () => {
      const rect = wrap.getBoundingClientRect();
      sectionTop = rect.top + window.scrollY;
      scrollDistance = Math.max(rect.height - window.innerHeight, 0);
    };
    const scheduleSync = () => {
      if (raf === null && !document.hidden && !disposed) raf = requestAnimationFrame(sync);
    };
    const sync = () => {
      raf = null;
      if (disposed || document.hidden) return;
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const progress =
        scrollDistance > 0
          ? Math.min(Math.max((scrollPosition - sectionTop) / scrollDistance, 0), 1)
          : 0;
      const idx = sceneIndexFor(progress);
      if (idx !== activeRef.current) {
        activeRef.current = idx;
        setActive(idx);
      }
      if (
        !inView ||
        scrollPosition >= sectionTop + scrollDistance + viewportHeight ||
        scrollPosition + viewportHeight <= sectionTop ||
        !video ||
        failed ||
        video.readyState < 2 ||
        !Number.isFinite(video.duration) ||
        video.duration <= 0
      ) {
        return;
      }
      latestTargetTime = Math.min(progress * video.duration, video.duration - 0.05);
      if (seekInFlight || video.seeking) {
        return;
      }
      if (Math.abs(latestTargetTime - video.currentTime) < MIN_SEEK_DELTA) {
        if (seekTimer) {
          window.clearTimeout(seekTimer);
          seekTimer = 0;
        }
        return;
      }
      const timeSinceLastSeek = performance.now() - lastSeekAt;
      if (timeSinceLastSeek < MIN_SEEK_INTERVAL_MS) {
        if (!seekTimer) {
          seekTimer = window.setTimeout(() => {
            seekTimer = 0;
            scheduleSync();
          }, MIN_SEEK_INTERVAL_MS - timeSinceLastSeek);
        }
        return;
      }
      if (seekTimer) {
        window.clearTimeout(seekTimer);
        seekTimer = 0;
      }
      lastSeekAt = performance.now();
      seekInFlight = true;
      try {
        video.currentTime = latestTargetTime;
      } catch (error) {
        seekInFlight = false;
        console.error("Failed to seek the hero video", error);
        setFailed(true);
      }
    };
    const onScroll = () => {
      if (inView) scheduleSync();
    };
    const onSeeking = () => {
      seekInFlight = true;
    };
    const onSeeked = () => {
      seekInFlight = false;
      if (inView) scheduleSync();
    };
    const onResize = () => {
      measureSection();
      if (inView) scheduleSync();
    };
    const onVisibilityChange = () => {
      if (!document.hidden) scheduleSync();
    };
    measureSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibilityChange);
    video?.addEventListener("seeking", onSeeking);
    video?.addEventListener("seeked", onSeeked);
    video?.addEventListener("loadedmetadata", scheduleSync);
    video?.addEventListener("loadeddata", scheduleSync);
    let io = null;
    if (typeof IntersectionObserver === "undefined") {
      inView = true;
      scheduleSync();
    } else {
      io = new IntersectionObserver((entries) => {
        inView = entries[0]?.isIntersecting ?? false;
        setHeroInView(inView);
        if (inView) {
          scheduleSync();
        } else if (seekTimer) {
          window.clearTimeout(seekTimer);
          seekTimer = 0;
        }
      });
      io.observe(wrap);
    }
    return () => {
      disposed = true;
      if (raf !== null) cancelAnimationFrame(raf);
      window.clearTimeout(seekTimer);
      io?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      video?.removeEventListener("seeking", onSeeking);
      video?.removeEventListener("seeked", onSeeked);
      video?.removeEventListener("loadedmetadata", scheduleSync);
      video?.removeEventListener("loadeddata", scheduleSync);
    };
  }, [failed, reduced, videoSrc]);
  // Reduced motion: calm static hero instead of the pinned scrub.
  if (reduced) {
    return (
      <section
        id="top"
        className="relative flex h-screen min-h-[560px] items-end overflow-hidden bg-night"
      >
        <img
          src={posterSrc}
          alt="Invisible balcony bird protection netting"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/25 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 lg:px-10">
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your balcony deserves a better view.
          </h1>
          <p className="mt-4 max-w-md text-base text-white/75">
            Enjoy your outdoor space without unwanted visitors.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#solutions"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore Our Solutions
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="top" ref={wrapRef} className="relative" style={{ height: "540vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-night">
        {/* Poster stays beneath the video: first paint + graceful fallback */}
        <img
          src={posterSrc}
          alt=""
          aria-hidden
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            failed ? "opacity-100" : "opacity-0",
          )}
        />
        {!failed && (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            onError={(event) => {
              console.error("Failed to load or decode the hero video", event.currentTarget.error);
              setFailed(true);
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        {/* Legibility scrim — never fully hides the architecture */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15" />

        {/* Scene overlays */}
        {SCENES.map((scene, i) => (
          <div
            key={scene.title}
            aria-hidden={active !== i}
            className={cn(
              scene.final
                ? "absolute inset-x-5 top-1/2 -translate-y-1/2 transition-[opacity,transform] duration-500 ease-out"
                : "absolute max-md:inset-x-5 max-md:bottom-24 transition-[opacity,transform] duration-500 ease-out",
              scene.pos,
              active === i
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-6 opacity-0",
            )}
          >
            <div
              className={cn(
                "relative w-fit max-w-full rounded-xl px-4 py-4",
                scene.final && "mx-auto",
                active === i && "bg-black/35 shadow-lg",
              )}
            >
              <h1
                className={cn(
                  "font-display font-bold leading-[1.06] tracking-tight text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]",
                  scene.final
                    ? "text-3xl sm:text-5xl lg:text-6xl"
                    : "text-2xl sm:text-4xl lg:text-5xl",
                )}
              >
                {scene.title}
              </h1>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white sm:text-base">
                {scene.text}
              </p>
              {scene.final && (
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <a
                    href="#solutions"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Explore Our Solutions <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-black/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black/25"
                  >
                    <MessageCircle className="h-4 w-4" /> Get a Free Quote
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Progress rail + scroll cue */}
        <div className="pointer-events-none absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
          <div
            className={cn(
              "flex items-center gap-2 rounded-full bg-black/25 px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white shadow-sm transition-opacity duration-500",
              active === 0 ? "opacity-100" : "opacity-0",
            )}
          >
            <MousePointer2 className="h-3 w-3" /> Scroll to explore
          </div>
          <div className="h-10 w-px overflow-hidden bg-white/20">
            <div
              className="h-4 w-px animate-[scrollcue_1.8s_ease-in-out_infinite] bg-white/90"
              style={{
                transformOrigin: "top",
                animationPlayState: heroInView ? "running" : "paused",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
