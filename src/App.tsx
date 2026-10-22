import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  return (
    <div className = "app">
      <aside className = "sidebar">
        <h2>Home Maintenance</h2>
        <button onClick = {() => setCurrentPage("Home")}>Home
        </button>
        <button onClick = {() => setCurrentPage("Tasks")}>Tasks
        </button>
        <button onClick = {() => setCurrentPage("Goals")}>Goals
        </button>
        <button onClick = {() => setCurrentPage("Calendar")}>Calendar
        </button>
        <button onClick = {() => setCurrentPage("History")}>History</button>
        <button onClick = {() => setCurrentPage("Settings")}>Settings
        </button>
      </aside>
      <main className = "content">
        <h1>{currentPage}</h1>
        <p>Welcome to the {currentPage} page!</p>
      </main>
    </div>
  );
}

export default App;