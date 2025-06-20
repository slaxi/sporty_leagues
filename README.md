# Project overview 🏟️⚽🏀🏈

This project is a simple SPA app which display a list of sports leagues

## Key functionalities

- A friendly user interface that allows you to search and filter for different leagues, based on league name or sport
- Ability to view a season badge image of league

## What's in the stack 📏📐
- Framework [React](https://react.dev/learn)
- Code formatting with [Prettier](https://prettier.io)
- Linting with [ESLint](https://eslint.org)
- Bundler [Vite](https://vitejs.dev/)
- Styling and Templating [MaterialUI](https://mui.com/material-ui/getting-started/)
- Icons [MaterialUiIcon](https://mui.com/material-ui/material-icons/)
- Data fetching [ReactQuery](https://tanstack.com/query/latest/docs/framework/react/overview)


## `Running the API Locally`

**1. Clone the repo**

```bash
#HTTPS
git clone https://github.com/slaxi/sporty_leagues.git

#SSH
git clone git@github.com:slaxi/sporty_leagues.git
```

**2. Install dependencies**
Assuming you are in the root directory of your repo.

```bash
npm install
```

**3. Start it**
Assuming you are in the root directory.

```bash
npm run dev
```

# Tests
Tests are run as a part of husky setup, but you can run them in isolation via:
```bash
npm run test
```

# Project General Structure Overview 📂

| Resource                                      | Description                                                                    |
| --------------------------------------------- | ------------------------------------------------------------------------------ |
| **.gitignore**                                | Specifies intentionally untracked files that Git should ignore.                |                               |
| **tsconfig.json, env.d.ts**                   | TypeScript related settings.                                                   |
| **.prettier and .prettierignore**             | Prettier related settings                                                      |
| **.estlintrc.js and .estlintignore**          | Estlint related settings                                                       |
| **package.json**                              | Project settings, dependencies, dev dependencies, command scripts, etc.        |
| **vite.config.ts**                            | Vite config                                                                    |
| **app**                                       | Folder were all the source code lives ( components.pages, routes, hooks, etc). |
| **.husky**                                    | Husky hooks                                                                    |
| **README**                                    | Project information from stack used, code guidelines, architecture, etc        |

## Help and Contributions

During the development of this project, assistance from the GitHub Copilot assistant was used for:

- **Material UI components and styling:**  
  Implementation and customization of Material UI components (`TextField`, `Select`, `MenuItem`, `Box`, `Typography`, `Button`, etc.), as well as styling advice (using the `sx` prop, customizing labels, background images, and responsive design).

- **Proper usage and writing of React Query hooks:**  
  Guidance on generic and specific hooks (`useQuery`, custom hooks), data memoization, caching, and optimal use of `queryKey` and the `enabled` option.

- **TypeScript typing:**  
  Correct TypeScript typing for custom hooks, React Query results, component props, and event handlers (especially for Material UI components such as `Select` and `TextField`).

## Key Recommendations

- **Material UI:**  
  Use `FormControl`, `InputLabel`, `Select`, and `MenuItem` for dropdown filters, and `Typography` for textual elements.  
  Style components using the `sx` prop for a consistent look.

- **React Query:**  
  Use `queryKey` and `enabled` properly to control data fetching.  
  Memoize data where needed and use generic hooks for reusable logic.

- **TypeScript:**  
  Type all props and hook results for safety

  ## Potential Areas for Improvement

- **Pagination or Lazy Loading:**  
  In a real-world application with a large list of items, it is recommended to implement pagination or lazy loading (infinite scroll) to improve performance and user experience. This prevents loading the entire dataset at once and reduces initial load time.

- **Comprehensive Unit Testing:**  
  Expanding the suite of unit tests would help ensure the reliability and maintainability of the application, covering more edge cases and component interactions.

- **Creating a Generic useDataQuery Hook:**  
  Developing a generic `useDataQuery` hook with proper TypeScript typing for different queries would improve code reusability and type safety across various data