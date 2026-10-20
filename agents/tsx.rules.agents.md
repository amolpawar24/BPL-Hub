# BPL HUB — TSX Coding Rules

1. **TypeScript:** Use proper types and interfaces. Avoid `any` whenever possible.
2. **Naming:** Use PascalCase for components, camelCase for variables and functions, and kebab-case for CSS class names.
3. **No Underscores:** Never use `_` in CSS/SCSS class names. Always use hyphens (`-`).
4. **Components:** Use reusable, functional React components and follow existing project conventions.
5. **Next.js:** Follow App Router conventions and use `"use client"` only when required.
6. **Hooks:** Follow React Hooks rules and avoid unnecessary state or effects.
7. **API Integration:** Use existing API services, accurate types, and proper loading/error handling.
8. **State Management:** Follow the existing Redux Toolkit and RTK Query architecture.
9. **SCSS:** Keep TSX class names synchronized with SCSS selectors and reuse shared design tokens.
10. **Responsive Design:** Follow all seven shared breakpoints: `xxl`, `xl`, `lg`, `md`, `sm`, `xs`, and `xxs` in responsive component SCSS files.
11. **Accessibility:** Use semantic HTML, accessible labels, keyboard navigation, and visible focus states.
12. **Security:** Never expose secrets or rely on frontend-only permission checks.
13. **Code Quality:** Avoid duplicate logic, unused imports, unnecessary dependencies, and unexplained workarounds.
14. **Preserve Functionality:** Keep existing features and business logic intact unless changes are requested.
15. **Validation:** Check types, imports, class names, linting, and build errors when possible.

**Final rule:** Always deliver clean, consistent, maintainable, responsive, and production-ready code. Never claim code is completely bug-free without proper validation.