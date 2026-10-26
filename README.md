# Hello Vue

A basic Vue 3 app powered by Vite, with Home, About, and Contact pages.

## Run locally

```sh
yarn install
yarn dev
```

Open the local URL printed by Vite.

## Production build

```sh
yarn build
yarn preview
```

Pages live in `src/views/`, routes in `src/router.js`, and shared styles in `src/style.css`.
Hash routing supports static hosting without server routing configuration.

## Why use Vue?

Vue helps you build interactive interfaces from reusable components. For this small
project, its HTML-like templates and optional ecosystem libraries let us start with
just a few pages and add more features as needed. Plain HTML would also be enough
for three static pages; Vue is useful here as a starting point for a growing app.

### What Vue provides

- **Reactive updates:** when reactive data changes, Vue updates the affected UI.
  You describe what the screen should display instead of manually updating DOM elements.
- **Reusable components:** split pages into smaller pieces and pass data through
  props and events, so shared UI does not need to be copied between pages.
- **Single-file components:** `.vue` files can keep a component's template,
  JavaScript, and optional scoped CSS together.
- **Template features:** use `v-if` for conditions, `v-for` for lists, `@click`
  for events, and `v-model` to keep form inputs and state in sync.
- **Composition API:** use tools such as `ref` and `computed` for reactive state
  and derived values, and composables to share stateful logic between components.
- **Optional official libraries:** add Vue Router for navigation and Pinia for
  shared application state when needed; these are separate packages from Vue core.

### Vue compared with React, Angular, and plain JavaScript

All three frameworks/libraries support component-based interfaces. The practical
choice depends on the team's preferences and the application's requirements.

| Choice | How you build the UI | What it provides | When it may be a good fit |
| --- | --- | --- | --- |
| **Vue** | HTML-like templates in `.vue` components, with JavaScript or TypeScript | Reactive state, components, template directives, and optional official routing/state libraries | You want familiar HTML syntax and an app that can grow gradually. |
| **React** | Usually JavaScript/TypeScript functions returning JSX, with Hooks for state | A UI library; routing and other application features come from additional libraries or a framework | Your team prefers JSX and choosing its application stack, or already uses React. |
| **Angular** | Components with templates, typically written in TypeScript | An integrated framework with routing, forms, dependency injection, and signals for reactivity | Your team wants a broad, consistent framework and its conventions across an application. |
| **Plain HTML/CSS/JavaScript** | HTML plus browser APIs for interactions and DOM updates | Native browser capabilities without a UI framework dependency | You have a mostly static site or a few simple interactions that do not need a component framework. |

Compared with basic React, Vue offers template directives and single-file component
conventions out of the box. React can build the same interfaces, but commonly uses
JSX and Hooks instead. Neither approach is automatically faster or better for every app.

Compared with Angular, Vue lets us adopt a smaller set of concepts for this starter
and add libraries as requirements grow. Angular provides more integrated application
features up front, which can help teams that want those conventions. Both can support
large applications; project size alone does not determine the right choice.

### What this starter actually uses

- **Vue 3:** components and rendering.
- **Vue Router:** Home, About, and Contact navigation without full-page reloads.
  Hash URLs such as `/#/about` work on static hosting without server route rewrites.
- **Vite:** the development server, hot updates during development, and production builds.
- **Yarn:** dependency installation and project commands.

Vite and Yarn are tooling choices, not features supplied by Vue itself. This starter
does not yet include a backend, authentication, or shared state management.

For the underlying concepts, see the official [Vue introduction](https://vuejs.org/guide/introduction.html),
[React quick start](https://react.dev/learn), [React app setup guidance](https://react.dev/learn/creating-a-react-app),
and [Angular overview](https://angular.dev/overview).
