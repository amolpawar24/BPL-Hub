# BPL Hub — Admin Dashboard

**The Central Administration Platform for Bhalawani Premier League**

BPL Hub is the administrative dashboard for the BPL Official cricket tournament platform. It provides a centralized interface for managing tournament operations, players, teams, matches, live scores, payments, announcements, sponsors, and points-table information.

Built with Next.js, React, TypeScript, Redux Toolkit, and SCSS, BPL Hub follows a modular architecture designed for maintainability, responsive layouts, and future expansion.

> **BPL Hub — One Hub. Complete Tournament Management.**

---

## Overview

BPL Hub is designed to simplify administrative operations for the Bhalawani Premier League by bringing essential tournament management features into a single dashboard.

The application uses the Next.js App Router for routing, reusable React components for the interface, Redux Toolkit for state management, and SCSS for modular styling.

Its feature-oriented structure separates dashboard components, management modules, API integration, shared UI components, layouts, and styling resources.

### Project Information

| Property | Details |
|---|---|
| Project Name | BPL Hub |
| Application Type | Admin Dashboard |
| Organization | Bhalawani Premier League |
| Framework | Next.js |
| UI Library | React |
| Language | TypeScript |
| State Management | Redux Toolkit |
| Styling | SCSS / CSS |
| Package Name | `bpl-hub` |
| Development Port | `3001` |
| Version | `0.1.0` |

### Related Project

**BPL Official — Public-facing application**

https://bpl-official2026.netlify.app/

BPL Hub is a separate administrative application intended to work alongside the BPL Official platform and its backend services.

---

## Features

### Dashboard Overview

- Centralized administrative dashboard.
- Dashboard statistic cards.
- Recent matches and players sections.
- Revenue chart visualization.
- Overview components for displaying tournament information.

### Player Management

- Player listing and management interface.
- Add-player page.
- Player details page.
- Edit-player page.
- Reusable player forms and detail components.
- Redux-based player API integration.

### Team Management

- Team management interface.
- Team creation page.
- Individual team details page.
- Dedicated team feature and Redux module directories.

### Match Management

- Match listing and management pages.
- Match creation interface.
- Individual match details pages.
- Match form and table components.
- Live-score update interface.

### Payment Management

- Payment management page.
- Individual payment details pages.
- Payment creation page.
- Dedicated styling for payment management.

### Tournament Information

- Points-table management.
- Announcements management.
- Sponsor management.
- Gallery feature directory.

### Authentication and Layout

- Dedicated login page.
- Separate authentication and dashboard layouts.
- Sidebar navigation.
- Header component.
- Mobile navigation drawer.
- Mobile top bar.
- Breadcrumb navigation.
- Protected-route component directory.

### Reusable UI Components

- Reusable table component.
- Table header and body components.
- Table loading skeleton.
- Pagination component.
- Dashboard statistic cards.
- Shared layouts and styling utilities.

*The features listed reflect the pages and components present in the supplied project structure. Actual CRUD operations, authorization, API connectivity, and live updates depend on their implementation.*

---

## Technology Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | Application framework and routing |
| React 19 | Component-based user interface |
| TypeScript 5 | Type-safe development |
| Redux Toolkit | State management |
| React Redux | React integration for Redux |
| Axios | HTTP requests |
| Formik | Form state management |
| Yup | Form validation |
| Recharts | Charts and data visualization |
| Sass / SCSS | Styling and reusable design utilities |
| Day.js | Date and time formatting |
| js-cookie | Cookie handling |
| jwt-decode | JWT payload decoding |
| Socket.IO Client | Real-time communication integration |
| ESLint | Code quality and linting |

---

## Project Architecture

BPL Hub uses the Next.js App Router with route groups and feature-based organization.

The application separates page routing, reusable components, feature-specific UI, state management, providers, styles, and TypeScript types.

### Architecture Highlights

- **App Router:** Organizes application pages and nested routes.
- **Route Groups:** Separates authentication pages from dashboard pages.
- **Feature Modules:** Groups components by business functionality.
- **Redux Toolkit:** Organizes global state and API-related logic.
- **Reusable Components:** Reduces duplication across the interface.
- **SCSS Architecture:** Separates layout, component, module, and utility styles.
- **TypeScript:** Provides type definitions for application data.

---

## Project Structure

The following tree reflects the supplied source structure. Generated build files, configuration files, and other root-level files are shown separately where applicable.

```text
bpl-hub/
│
├── src/
│   │
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   │
│   │   ├── (dashboard)/
│   │   │   ├── announcements/
│   │   │   │   └── page.tsx
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx
│   │   │   ├── matchesManagement/
│   │   │   │   ├── [matchId]/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── create/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── liveScore/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── paymentsManagement/
│   │   │   │   ├── [paymentId]/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── create/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── playersManagement/
│   │   │   │   ├── [playerId]/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── add/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── edit/
│   │   │   │   │   └── [playerId]/
│   │   │   │   │       └── page.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── poinsTableManagement/
│   │   │   │   └── page.tsx
│   │   │   ├── profile/
│   │   │   │   └── page.tsx
│   │   │   ├── settings/
│   │   │   │   └── page.tsx
│   │   │   ├── sponsors/
│   │   │   │   └── page.tsx
│   │   │   ├── teamManagement/
│   │   │   │   ├── [teamId]/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── create/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   │
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── page.module.scss
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── dashboard/
│   │   │   ├── DashboardCards.tsx
│   │   │   ├── Overview.tsx
│   │   │   ├── RecentMatches.tsx
│   │   │   ├── RecentPlayers.tsx
│   │   │   └── RevenueChart.tsx
│   │   ├── layout/
│   │   │   ├── MobileDrawer/
│   │   │   │   └── MobileDrawer.tsx
│   │   │   ├── breadCrumps/
│   │   │   │   └── Breadcrumbs.tsx
│   │   │   ├── header/
│   │   │   │   └── Header.tsx
│   │   │   ├── protectedRoute/
│   │   │   └── sidebar/
│   │   │       └── Sidebar.tsx
│   │   ├── mobileTopbar/
│   │   │   └── MobileTopBar.tsx
│   │   └── ui/
│   │       ├── Table/
│   │       │   ├── components/
│   │       │   │   ├── TableBody.tsx
│   │       │   │   ├── TableHeader.tsx
│   │       │   │   └── TableSkelton.tsx
│   │       │   ├── index.Table.tsx
│   │       │   └── table.types.ts
│   │       └── pagination/
│   │           └── pagination.tsx
│   │
│   ├── features/
│   │   ├── dashboard/
│   │   │   ├── components/
│   │   │   │   ├── RecentPlayers.tsx
│   │   │   │   └── StatsCard.tsx
│   │   │   ├── sections/
│   │   │   │   └── DashboardOverview.tsx
│   │   │   └── index.dashboardCharts.tsx
│   │   ├── gallery/
│   │   ├── matches/
│   │   │   ├── components/
│   │   │   │   ├── MatchForm.tsx
│   │   │   │   ├── MatchTable.tsx
│   │   │   │   └── ScoreUpdater.tsx
│   │   │   └── sections/
│   │   │       └── MatchesPageContent.tsx
│   │   ├── players/
│   │   │   ├── components/
│   │   │   │   ├── PlayerDetails.tsx
│   │   │   │   ├── PlayerForm.tsx
│   │   │   │   └── PlayersPageContent.tsx
│   │   │   └── sections/
│   │   │       └── PlayersPageContent.tsx
│   │   ├── pointsTable/
│   │   │   ├── components/
│   │   │   │   └── PointsTable.tsx
│   │   │   └── sections/
│   │   │       └── PointsTableContent.tsx
│   │   ├── registration-code/
│   │   └── sponsors/
│   │
│   ├── providers/
│   │   └── ReduxProvider.tsx
│   │
│   ├── redux/
│   │   ├── api/
│   │   │   └── baseApi.ts
│   │   ├── modules/
│   │   │   ├── playerManagement/
│   │   │   │   ├── playerApi.ts
│   │   │   │   └── usePlayerManagement.ts
│   │   │   └── teams/
│   │   ├── hooks.ts
│   │   └── store.ts
│   │
│   ├── styles/
│   │   ├── base/
│   │   │   ├── _global.scss
│   │   │   └── _reset.scss
│   │   ├── components/
│   │   │   ├── buttons/
│   │   │   │   └── _buttons.scss
│   │   │   ├── card.scss/
│   │   │   │   └── _card.scss
│   │   │   ├── mobileDrawer/
│   │   │   │   └── _mobile-drawer.scss
│   │   │   ├── mobileTopbar/
│   │   │   │   └── _mobile-topbar.scss
│   │   │   ├── sidebar/
│   │   │   │   └── _sidebar.scss
│   │   │   └── ui/
│   │   │       ├── Pagination/
│   │   │       │   └── _pagination.scss
│   │   │       └── Table/
│   │   │           └── _table.scss
│   │   ├── layout/
│   │   │   ├── _authLayout.scss
│   │   │   └── _dashboardLayout.scss
│   │   ├── modules/
│   │   │   ├── auth/
│   │   │   │   └── _login.scss
│   │   │   ├── dashboard/
│   │   │   │   └── _dashboard.scss
│   │   │   ├── paymentMangement/
│   │   │   │   └── _paymentManagement.scss
│   │   │   ├── playerManagement/
│   │   │   │   └── _playerManagement.scss
│   │   │   └── teamsManagement/
│   │   ├── settings/
│   │   │   ├── _breakpoints.scss
│   │   │   ├── _typography.scss
│   │   │   └── _variables.scss
│   │   ├── status/
│   │   │   ├── _status-badges-colors.scss
│   │   │   ├── _status-border-colors.scss
│   │   │   ├── _status-colors.scss
│   │   │   ├── _status-index.scss
│   │   │   └── _status-text-colors.scss
│   │   ├── tools/
│   │   │   ├── _functions.scss
│   │   │   └── _mixins.scss
│   │   ├── utils/
│   │   │   └── _helpers.scss
│   │   └── main.scss
│   │
│   └── types/
│       └── player.types.ts
│
├── public/                 # Static assets, if configured
├── package.json
├── package-lock.json
├── tsconfig.json
├── eslint.config.mjs       # If present
├── next.config.ts          # If present
├── .gitignore
└── README.md
```

*Note: The tree is based on the supplied `src` listing. Root-level files and the exact names of generated configuration files may differ. Empty feature directories are shown as placeholders.*

---

## Getting Started

### Prerequisites

Install the following tools before running the application:

- Node.js version compatible with Next.js 16.
- npm.
- Git.
- Visual Studio Code or another compatible editor.
- Access to the BPL backend API for features that require server communication.

### 1. Clone the Repository

```bash
git clone https://github.com/amolpawar24/BPL-Hub.git
```

### 2. Navigate to the Project

```bash
cd BPL-Hub
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the project root if your API integration requires environment variables.

Example:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
```

The variable above is an example. Replace the URL with the actual backend address and confirm that `src/redux/api/baseApi.ts` or the relevant API client reads the same variable.

Only variables prefixed with `NEXT_PUBLIC_` should be used for values intended to be exposed to the browser. Never put backend secrets, database credentials, payment secrets, or private signing keys in public frontend environment variables.

### 5. Start the Development Server

```bash
npm run dev
```

The development server starts on port `3001`.

Open:

http://localhost:3001

### 6. Create a Production Build

```bash
npm run build
```

### 7. Run the Production Server

```bash
npm start
```

The production start script uses Next.js's default port unless another port is configured through the environment.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server on port `3001` |
| `npm run build` | Creates an optimized production build |
| `npm start` | Starts the production server |
| `npm run lint` | Runs ESLint |

The scripts are defined in `package.json`.

---

## Application Routes

The following routes are suggested by the supplied App Router structure. The route groups `(auth)` and `(dashboard)` organize the code but do not appear in the public URL.

| Page | Route |
|---|---|
| Home | `/` |
| Login | `/login` |
| Dashboard | `/dashboard` |
| Announcements | `/announcements` |
| Matches | `/matchesManagement` |
| Create Match | `/matchesManagement/create` |
| Match Details | `/matchesManagement/[matchId]` |
| Live Score | `/matchesManagement/liveScore` |
| Payments | `/paymentsManagement` |
| Create Payment | `/paymentsManagement/create` |
| Payment Details | `/paymentsManagement/[paymentId]` |
| Players | `/playersManagement` |
| Add Player | `/playersManagement/add` |
| Player Details | `/playersManagement/[playerId]` |
| Edit Player | `/playersManagement/edit/[playerId]` |
| Points Table | `/poinsTableManagement` |
| Profile | `/profile` |
| Settings | `/settings` |
| Sponsors | `/sponsors` |
| Teams | `/teamManagement` |
| Create Team | `/teamManagement/create` |
| Team Details | `/teamManagement/[teamId]` |

These paths follow the supplied directory names. In particular, `poinsTableManagement` appears to contain a spelling mistake. If that is accidental, consider renaming it to `pointsTableManagement` and updating the links that reference it.

Dynamic routes such as `[playerId]` and `[matchId]` represent individual records.

---

## State Management

BPL Hub uses Redux Toolkit and React Redux for application state management.

### Redux Structure

```text
src/redux/
├── api/
│   └── baseApi.ts
├── modules/
│   ├── playerManagement/
│   │   ├── playerApi.ts
│   │   └── usePlayerManagement.ts
│   └── teams/
├── hooks.ts
└── store.ts
```

### Responsibilities

- `store.ts` — Configures the Redux store.
- `hooks.ts` — Provides typed Redux hooks.
- `baseApi.ts` — Contains the shared API configuration.
- `playerApi.ts` — Organizes player-related API operations.
- `usePlayerManagement.ts` — Provides reusable player-management logic.
- `ReduxProvider.tsx` — Makes the Redux store available to the React component tree.

The actual endpoints and caching behavior depend on the Redux API implementation.

---

## Forms and Validation

The project includes Formik and Yup.

- **Formik:** Manages form state, input changes, and submission.
- **Yup:** Defines validation schemas and validation rules.

These libraries can be used for player, team, match, and payment forms. Actual validation behavior depends on each form's implementation.

---

## Dashboard Analytics

The dashboard includes components for displaying administrative information and visual summaries.

| Component | Purpose |
|---|---|
| `DashboardCards.tsx` | Dashboard summary cards |
| `StatsCard.tsx` | Reusable statistic card |
| `RecentMatches.tsx` | Recent match section |
| `RecentPlayers.tsx` | Recent player section |
| `RevenueChart.tsx` | Revenue chart visualization |
| `index.dashboardCharts.tsx` | Dashboard chart exports or composition |

Recharts is included as the charting library. The displayed metrics depend on the data connected to these components.

---

## Responsive Design and Styling

The project uses SCSS and a dedicated styles directory.

### Styling Organization

- `styles/base/` — Global styles and CSS resets.
- `styles/components/` — Reusable component styling.
- `styles/layout/` — Authentication and dashboard layouts.
- `styles/modules/` — Feature-specific styles.
- `styles/settings/` — Breakpoints, typography, and variables.
- `styles/status/` — Status colors, borders, badges, and text colors.
- `styles/tools/` — SCSS functions and mixins.
- `styles/utils/` — Styling helper utilities.
- `styles/main.scss` — Main SCSS entry point.

The application also includes responsive layout components for navigation on smaller screens.

---

## API Integration

BPL Hub includes Axios, Redux Toolkit, and Socket.IO Client for application integration.

### API Communication

The shared API configuration is located at:

```text
src/redux/api/baseApi.ts
```

The player-related API logic is located at:

```text
src/redux/modules/playerManagement/playerApi.ts
```

Configure the correct backend base URL before using API-dependent features.

### Real-Time Communication

The `socket.io-client` dependency is available for real-time communication, such as live-score updates, if a compatible Socket.IO server and event handlers are configured.

The installed dependency alone does not confirm that a live connection is active.

---

## Authentication and Security

The source tree contains a login page and a protected-route component directory. The project also includes `js-cookie` and `jwt-decode`.

For an administrative dashboard, security should include:

- Server-side authentication and session validation.
- Role-based authorization for sensitive operations.
- Secure cookie configuration where cookies are used.
- Server-side verification of authentication tokens.
- Protection of administrative API endpoints.
- Input validation for all data submitted to the backend.
- No sensitive secrets in browser-accessible variables.
- Proper handling of expired or invalid sessions.

**Important:** Decoding a JWT in the browser does not verify its authenticity. Authorization must be enforced by the backend, not just by hiding frontend pages.

---

## Code Quality

ESLint is included for linting and code quality.

Run:

```bash
npm run lint
```

Before submitting changes, check that the application builds successfully:

```bash
npm run build
```

Use consistent naming, reusable components, clear types, and focused changes when extending the application.

---

## Deployment

BPL Hub is built with Next.js and can be deployed to a compatible hosting platform.

### Deployment Checklist

1. Install project dependencies.
2. Configure the production backend API URL.
3. Confirm that all required environment variables are set.
4. Run `npm run lint`.
5. Run `npm run build`.
6. Deploy the application using a compatible Next.js runtime.
7. Verify login and authorization flows.
8. Test player, team, match, and payment pages.
9. Confirm that the production backend permits requests from the dashboard's origin.
10. Check browser and server logs for deployment errors.

The frontend and backend should use their respective deployment URLs and must be configured to communicate securely.

---

## Future Improvements

Potential improvements for BPL Hub include:

- Role-based admin permissions.
- More detailed tournament analytics.
- Advanced player and team search.
- Server-side table pagination and filtering.
- Real-time match notifications.
- Audit logs for administrative actions.
- Better API error and loading states.
- Automated tests for critical workflows.
- API documentation and typed response contracts.
- Improved accessibility and responsive behavior.
- CI/CD integration for automated quality checks and deployment.

These are possible future enhancements, not claims about features already implemented.

---

## Related Repositories

BPL Hub is part of the broader BPL Official application ecosystem.

| Project | Purpose |
|---|---|
| BPL Official | Public-facing cricket application |
| BPL Backend | Server-side API and business logic |
| BPL Hub | Administrative dashboard |

The dashboard is intended to provide administrative tools, while the backend handles data processing and server-side operations.

---

## Contributing

Contributions are welcome from authorized project collaborators.

1. Create a feature branch.
2. Make focused changes.
3. Run linting and build checks.
4. Test affected pages and workflows.
5. Write a clear commit message.
6. Submit a pull request for review.

Please do not commit credentials, private environment files, or unrelated generated output.

---

## License

No license has been specified for this repository.

Unless a license is added, others should not assume that they have permission to reuse, distribute, or modify this code.

---

## Author

**Amol Pawar**

Full Stack Developer | React.js | Next.js | TypeScript

- GitHub: https://github.com/amolpawar24
- BPL Official: https://bpl-official2026.netlify.app/
- BPL Hub Repository: https://github.com/amolpawar24/BPL-Hub

---

<p align="center">
  <strong>BPL HUB</strong>
  <br />
  Centralized Administration for Bhalawani Premier League
  <br />
  <em>Manage the game behind the game.</em>
</p>
