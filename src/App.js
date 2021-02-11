import "./styles/App.scss";

import Main from "./components/Main";

function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="header__nav">
            <h2>Погода</h2>
          </nav>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <Main />
        </div>
      </main>
      <footer className="footer"></footer>
    </>
  );
}

export default App;
