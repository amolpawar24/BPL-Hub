# BPL HUB — SCSS Coding Standards

**Purpose:** Maintain clean, consistent, responsive, accessible, scalable, and future-proof SCSS throughout the BPL HUB project.

## 1. General Coding Principles

- Write production-quality, readable, maintainable, and reusable SCSS.
- Follow the existing project architecture and coding conventions.
- Preserve existing functionality and visual identity when updating styles.
- Fix root causes instead of adding temporary overrides.
- Avoid unnecessary rewrites, duplicate declarations, conflicting styles, and redundant code.
- Do not introduce new dependencies, global styles, or architectural changes without a clear reason.
- Deliver complete, ready-to-integrate files when a full-file update is requested.
- Never claim code is bug-free without appropriate validation.

## 2. Mandatory Breakpoint System

Use the existing shared breakpoint system located at:

`src/styles/abstracts/_breakpoints.scss`

Use these seven breakpoints in every responsive component SCSS file.

| Mixin | Maximum width | Primary use |
|---|---:|---|
| `xxl` | 1400px | Smaller desktop layouts |
| `xl` | 1200px | Laptop layouts |
| `lg` | 992px | Compact laptop and tablet layouts |
| `md` | 768px | Tablet and mobile transition |
| `sm` | 576px | Mobile layouts |
| `xs` | 420px | Small mobile layouts |
| `xxs` | 360px | Extra-small mobile layouts |

Import the shared mixins using Sass module syntax:

```scss
@use "../../abstracts/breakpoints" as *;
```

Adjust the relative path according to the SCSS file's location.

**Rules:**

- Use existing shared mixins; do not create separate breakpoint systems for individual components.
- Include all seven mixins in every responsive component stylesheet.
- Add responsive declarations only when needed. Do not add meaningless overrides just to satisfy the rule.
- Keep breakpoint overrides after the base component styles.
- Order breakpoint blocks from widest to narrowest: `xxl` → `xl` → `lg` → `md` → `sm` → `xs` → `xxs`.
- Because these mixins use `max-width`, breakpoints overlap. Narrower breakpoint rules must appear later when overriding wider rules.
- Test intermediate screen widths as well as exact breakpoint boundaries.

## 3. Mandatory Breakpoint Comments

Use consistent comments for every breakpoint.

```scss
// ============================================
// RESPONSIVE BREAKPOINTS
// ============================================

// XXL — 1400px and below
@include xxl {
  // Add necessary responsive overrides
}

// XL — 1200px and below
@include xl {
  // Add necessary responsive overrides
}

// LG — 992px and below
@include lg {
  // Add necessary responsive overrides
}

// MD — 768px and below
@include md {
  // Add necessary responsive overrides
}

// SM — 576px and below
@include sm {
  // Add necessary responsive overrides
}

// XS — 420px and below
@include xs {
  // Add necessary responsive overrides
}

// XXS — 360px and below
@include xxs {
  // Add necessary responsive overrides
}
```

Replace placeholder comments with actual responsive declarations when required. Avoid empty breakpoint blocks in production code.

## 4. Class Naming Conventions — Strict No-Underscore Rule

- Always use **kebab-case** for CSS and SCSS class names.
- **Never use underscores (`_`) or double hyphens (`--`) in class names.**
- Separate words using single hyphens (`-`).
- Follow descriptive, component-scoped naming conventions, such as `bpl-sidebar-item`.
- Keep TSX/JSX `className` values synchronized with their corresponding SCSS selectors.
- Avoid generic selectors that could unintentionally affect unrelated components.
- Avoid unnecessarily deep nesting and overly specific selectors.
- Apply this rule to all new and modified component classes, including modifier and state classes.

**Correct:**

```scss
.bpl-sidebar-item {
  display: flex;

  &-icon {
    flex-shrink: 0;
  }
}

.bpl-sidebar-item-active {
  background-color: #1f2937;
}
```

**Incorrect:**

```scss
.bpl_sidebar_item {
  display: flex;
}

.bpl-sidebar__item {
  display: flex;
}

.bpl-sidebar--active {
  display: flex;
}
```

The nested `&-icon` selector compiles to `.bpl-sidebar-item-icon`, which follows the naming convention.

**Important:** This restriction applies to CSS/SCSS class names, not filenames, Sass variables, TypeScript identifiers, or API field names.

## 5. Required SCSS File Structure

Organize every component stylesheet in this order:

1. Shared imports using `@use`.
2. Component-specific variables, if necessary.
3. Base component styles.
4. Interaction and component states.
5. Accessibility and reduced-motion styles.
6. Responsive breakpoint overrides, ordered `xxl` → `xl` → `lg` → `md` → `sm` → `xs` → `xxs`.

Keep the stylesheet logically organized with clear section comments.

## 6. Design Tokens and Reusability

- Reuse existing colors, typography, spacing, border-radius, shadows, and transition tokens.
- Use existing shared mixins and functions wherever appropriate.
- Avoid repeatedly hardcoding the same design values across components.
- Avoid arbitrary magic numbers when a shared token or meaningful layout rule is more appropriate.
- Use fixed dimensions only when justified.
- Prefer fluid sizing and flexible layouts with appropriate `min-width`, `max-width`, and `min-height` constraints.
- Use `box-sizing: border-box` consistently through the project's existing global reset.
- Do not modify shared design tokens without considering their impact on the entire application.

## 7. Responsive Design Requirements

Check every responsive component across desktop, laptop, tablet, and mobile layouts.

- Prevent unintended horizontal scrolling and overflow.
- Prevent overlapping text, buttons, cards, navigation items, and other controls.
- Keep content readable and properly spaced at smaller widths.
- Adapt grids, flex layouts, typography, spacing, and dimensions as needed.
- Use suitable wrapping, stacking, and fluid sizing.
- Do not hide essential content or controls without providing an appropriate alternative.
- If desktop navigation is hidden on mobile, ensure a suitable mobile navigation solution exists.
- Consider long labels, empty states, loading states, error states, and variable content lengths.
- Verify expanded and collapsed component states when applicable.
- Check that fixed and sticky elements do not cover important content.
- Avoid assuming that every component needs different styles at every breakpoint; make only necessary adjustments.

## 8. Accessibility Requirements

- Maintain visible keyboard focus indicators.
- Preserve usable keyboard navigation.
- Ensure sufficient text and interface contrast.
- Avoid relying on color alone to communicate important information.
- Respect `prefers-reduced-motion`.
- Maintain readable font sizes and adequate touch targets.
- Preserve the semantic structure and functionality of the corresponding component.
- Never hide focus indicators without providing a suitable replacement.
- Avoid animations that cause excessive motion or interfere with usability.

Example:

```scss
.bpl-button:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  .bpl-button {
    animation: none;
    scroll-behavior: auto;
    transition: none;
  }
}
```

## 9. Performance and Compatibility

- Avoid unnecessary animations, expensive visual effects, and excessive transitions.
- Avoid redundant selectors, repeated declarations, and needless nesting.
- Use modern Sass module syntax with `@use`; do not introduce new Sass `@import` statements.
- Use CSS features compatible with the project's target browsers.
- Avoid unnecessary `!important` declarations.
- Do not add browser-specific hacks without a demonstrated need.
- Keep styles isolated to their intended components.
- Use global styles only for genuinely global concerns, such as design tokens, resets, and typography foundations.
- Avoid using complex selectors when a simple class selector is sufficient.
- Keep animations and transitions limited to properties that can be changed efficiently where practical.

## 10. Future-Proofing and Regression Prevention

- Inspect existing component styles and dependencies before modifying them.
- Preserve established naming conventions, shared tokens, and component contracts.
- Avoid brittle selectors that depend on incidental DOM structure.
- Avoid duplicate media queries that compete with one another.
- Avoid adding overrides to compensate for incorrect base styles.
- Make changes as small and focused as practical.
- Consider the impact of shared styles on other components.
- Ensure new components can reuse existing design tokens and responsive conventions.
- Keep accessibility and responsive behavior intact during refactoring.
- Do not remove existing styles or functionality without understanding their purpose.
- Update related TSX/JSX and SCSS together when class names or behavior change.
- Avoid adding unnecessary dependencies or replacing working patterns without a clear benefit.
- Check the cascade and specificity before introducing a new override.
- Do not assume a stylesheet is future-proof simply because it compiles successfully.

## 11. Validation Checklist

Before finalizing any SCSS file, verify:

- [ ] Shared breakpoint mixins are imported from the correct path.
- [ ] All seven breakpoint mixins are included in responsive component stylesheets.
- [ ] Base styles appear before responsive overrides.
- [ ] Breakpoints are ordered from `xxl` through `xxs`.
- [ ] Every CSS/SCSS class name uses kebab-case.
- [ ] No class name contains `_`, `__`, or `--`.
- [ ] SCSS selectors match the corresponding TSX/JSX class names.
- [ ] Existing design tokens and shared mixins are reused appropriately.
- [ ] No unnecessary duplicate declarations or conflicting overrides remain.
- [ ] No unintended global style leakage occurs.
- [ ] No horizontal overflow, clipping, or overlapping content appears.
- [ ] Essential navigation and controls remain usable on mobile.
- [ ] Keyboard focus and reduced-motion behavior are supported.
- [ ] Sass compilation and project build or lint checks pass where available.
- [ ] Visual behavior is checked across relevant screen sizes and component states.

## 12. Final Quality Standard

All SCSS written or modified for BPL HUB must prioritize:

**Correctness · Responsiveness · Accessibility · Consistency · Maintainability · Performance · Reusability · Compatibility**

Treat these rules as the default standard for all future BPL HUB SCSS work. Follow existing project conventions, make evidence-based changes, validate the result, and avoid claiming complete freedom from bugs or future compatibility issues.