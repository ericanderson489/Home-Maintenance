This is a team project for our software development class. The goal is to create a Home maintenance app where users can add/edit tasks, set due dates, and set goals for their homes.

Current Status: As of 10/22/2026 at 1:32PM the app has buttons for Home, Tasks, Goals, History, Calendar, and Settings. The setup is basic. 

## Requirements

- [Node.js](https://nodejs.org/) (install an active LTS version; npm is included)
- Git
- A code editor such as VS Code

Check that Node.js and npm are installed via terminal:
```sh
node --version
npm --version
```
On Windows PowerShell, if `npm` fails because script execution is disabled, use:

```powershell
npm.cmd --version
```
`npm.cmd` invokes the Windows command file instead of the PowerShell script. You do not need to change your system's execution policy just to run this project.

### 1. Download the project
Open a terminal in the folder where you keep your projects by using Ctrl + ~ or opening from toolbar at top of screen, then run:

```sh
git clone https://github.com/ericanderson489/Home-Maintenance.git
cd Home-Maintenance
```

If you already cloned the repository, open that folder instead. Before pulling changes, commit or stash your local work.

### 2. Install dependencies

Run this **inside the project folder**, where `package.json` is located:

```sh
npm install
```
On Windows PowerShell, if `npm` fails because script execution is disabled, use:

```powershell
npm.cmd install
```

`npm.cmd` invokes the Windows command file instead of the PowerShell script. You do not need to change your system's execution policy just to run this project.

### 3. Start the development server

In Command Prompt, macOS Terminal, Linux, or a terminal where npm works:

```sh
npm run dev
```

In Windows PowerShell, if you encounter an execution-policy error:

```powershell
npm.cmd run dev
```

Vite will print a local address, commonly `http://localhost:5173/`. Open the **address shown in your terminal** in a browser. Keep the terminal running while developing. Press `Ctrl+C` to stop the server.

**Note:** `npm run dev` runs the `dev` script in `package.json`, which starts Vite. It does not deploy the app to the internet.

### Other useful commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Run the local development server |
| `npm run build` | Type-check and create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check for common code issues |

In PowerShell, substitute `npm.cmd` for `npm` if needed.

## Where to find things

| File | What it does |
| --- | --- |
| `index.html` | HTML entry point containing the `root` element |
| `src/main.tsx` | Mounts the React application into that element |
| `src/App.tsx` | Main application component, navigation state, and page placeholder |
| `src/App.css` | Styles for the sidebar and content area |
| `src/index.css` | Global styles and theme variables |
| `package.json` | Dependencies and npm scripts |
| `vite.config.ts` | Vite development/build configuration |

## React concepts in this project

- **Component:** A reusable function that returns JSX. `App` is currently the main component.
- **JSX:** HTML-like syntax written inside TypeScript/React files.
- **State:** `useState` stores the selected page. Updating state tells React to render again.
- **Event handler:** `onClick={() => setCurrentPage('Tasks')}` changes state when a button is clicked.
- **`className`:** The JSX equivalent of an HTML `class` attribute. It must match the CSS selector exactly.
- **Vite:** Development server and build tool. It refreshes the browser as you edit files.
