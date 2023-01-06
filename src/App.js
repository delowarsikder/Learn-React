import ClockList from "./components/ClockList";
import Form from "./components/Form";
import Calculator from './components/Calculator'
function App() {
  const quantities = [1];
  return (
    <>
      <ClockList quantities={quantities} />
      <Calculator />
      <br/>
      <Form />
    </>
  );
}

export default App;
