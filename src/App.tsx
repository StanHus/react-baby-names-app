import NamesList from "./components/namesList";

function App(): JSX.Element {
  return (
    <div>
      <header>
        <h1>Header</h1>
      </header>
      <NamesList />
      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
}

export default App;
