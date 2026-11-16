# Project guidelines

- Keep the existing website content, visual design, and responsive behavior intact.
- Keep React UI in JavaScript and JSX; keep server-only logic in `server/`.
- Validate quote submissions on the server and never expose service credentials in frontend code.
- Prefer existing components and dependencies; avoid adding abstractions without a clear need.
- Run `npm run lint`, `npm test`, and `npm run build` after code changes.
