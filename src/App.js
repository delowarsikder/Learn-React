import Clock from './clock/Clock'
import ClickCounter from './components/HOC/ClickCounter'
import HoverCounter from './components/HOC/HoverCounter';
import TextHover from './components/HOC/TextHover';

function App() {
  return (
    <>
      <Clock />
      <ClickCounter />
      <TextHover />
      {/* <HoverCounter /> */}
    </>
  );
}

export default App;
