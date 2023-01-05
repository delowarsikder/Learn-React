import ClockList from "./components/ClockList";
import Form from "./components/Form";
function App() {
  const quantities = [1];
  return (
    <>
      <ClockList quantities={quantities} />
      <Form />
    </>
  );
}

export default App;
