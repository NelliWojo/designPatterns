import useCustom from "./hooks/useCustom";

function App() {
  const value = useCustom();

  return <div>Hi there</div>;
}

export default App;
