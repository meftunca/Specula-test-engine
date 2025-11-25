import { useState } from "react";
import { Login, Search } from "./components";
import "./App.css";

type View = "login" | "search";

function App() {
  const [currentView, setCurrentView] = useState<View>("login");

  return (
    <div className="app">
      <header className="app-header">
        <h1>TestWeaver Example App</h1>
        <p>
          This app demonstrates the TestWeaver DSL attributes for automatic test
          generation.
        </p>
      </header>

      <nav className="app-nav">
        <button
          className={currentView === "login" ? "active" : ""}
          onClick={() => setCurrentView("login")}
        >
          Login Demo
        </button>
        <button
          className={currentView === "search" ? "active" : ""}
          onClick={() => setCurrentView("search")}
        >
          Search Demo
        </button>
      </nav>

      <main className="app-main">
        {currentView === "login" && (
          <Login
            onSuccess={(email) => console.log("Login successful:", email)}
            onError={(error) => console.log("Login error:", error)}
          />
        )}
        {currentView === "search" && (
          <Search onSearch={(query) => console.log("Searching for:", query)} />
        )}
      </main>

      <footer className="app-footer">
        <p>
          View the component source code to see how <code>data-test-*</code>{" "}
          attributes are used.
        </p>
      </footer>
    </div>
  );
}

export default App;
