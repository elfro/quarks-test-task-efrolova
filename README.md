# The solution for the Quarks' test task

The deployed version of the app can be found here: https://quarks-test-task-efrolova.vercel.app/.

[![Demo of the solution](https://img.youtube.com/vi/ffhTs-vLtYQ/0.jpg)](https://www.youtube.com/watch?v=ffhTs-vLtYQ)

## Tech Stack

- [React](https://react.dev)
- [Redux (Redux Toolkit)](https://redux-toolkit.js.org)
- [TypeScript](https://www.typescriptlang.org).

Additional tools:

- [Vite](https://vitejs.dev)
- [Eslint](https://eslint.org), [Prettier](https://prettier.io)
- [Vitest](https://vitest.dev), [React Testing Library](https://github.com/testing-library/react-testing-library).
- [Vercel](https://vercel.com).

## System requirements

- npm 9.6.x and above
- Node.js 20.x and above.

## Getting Started

1. Clone the project

```bash
git@github.com:elfro/quarks-test-task-efrolova.git && cd quarks-test-task-efrolova
```

2. Install all dependencies

```bash
npm ci
```

3. Start Dev server

```bash
npm run dev
```

4. Open http://localhost:5173 with your browser to see the result.

5. To run production build:

```bash
npm run build && npm run preview
```

Open http://localhost:5173 with your browser to see the result.

## Project Structure

- **src/** is our main working directory. It contains the following items:
  - **main.tsx**: the entry point of our React application.
  - **index.css**, **reset.css**: global stylesheets.
  - **app/**: it contains:
    - **App.tsx**, which is the main React component, it also contains Router logic.
    - **store.ts**, **hooks.ts**: Redux Toolkit store configuration and typed hooks.
  - **pages/** dir contains top-level components that define the rough structure for each route. Each component can consistist of:
    - **Component.tsx** file where the structures and logic are stored;
    - **Component.module.css**: styles for that component;
    - **Component.test.ts** file which contains unit / integration tests.
  - **components/** dir contains 2 types of components:
    - page or feature specific component where the structure, as well as logic, can be found. It also might have the 3 similar files as Page Component.
    - **ui/** small reusable UI components.
  - **features/** dir contains the actions and reducers per specific feature.
  - **hooks/** dir contains custom hooks that can be used throughout the application.
  - **utils/**: contains the setup of a reusable Test Render Function.
  - **helpers/** dir contains helper functions and unit tests for them.
  - **types/** dir contains the global types that can be used throughout the application.
  - **data/** dir contains the mock list of messages that is used to preload the initial state of the messages.
- **index.html**: the initial HTML file that serves our SPA.
- **public/** dir stores static assets.

## CSS

The application is designed with a mobile-first approach. So the following breakpoints can be found in the code:

### Media breakpoints

```ts
const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`, // @media (min-width: 34.375rem)
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`, // @media (min-width: 68.75rem)
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`, // @media (min-width: 93.75rem)
};
```

## Tests

To run tests, execute the following command in the terminal:

```bash
npm run test
```

## ESLint && Prettier

- Use the following command to check lint:

```bash
npm run lint
```

- To check code format style, run the following cmd:

```bash
npm run format

npm run format:fix
```

### Add inbound message via Redux DevTools

## Known issues

- To auto scroll to a new added message in the messages list, `overflow-anchor` is used. There are some pitfalls that were discovered during testing:
  - Since this is a new CSS property, it's still not supported on iOS Safari. As a result, need to use another solution for this browser.
  - Sometimes it doesn't calculate properly the anchor element position / size on the page at the moment when the content becomes longer than the browser / container height.

## Notes

- Input field validation is super basic.
- User state isn't persisted when reloading the page.
- Hover, focus, disabled states, tablet / laptop / desktop versions, as well as favicon, are styled using my own imagination, as the designs cover the mobile version only.
- Added reset all messages and exit chat actions.
