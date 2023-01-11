import { useState, useEffect } from "react";

function UseEffectComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log('updating document title');
    document.title = `Clicked ${count} times`;
  }, [count]);


  useEffect(() => {
    console.log('starting timer');
    const interval = setInterval(timer, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const timer = () => {
    setDate(new Date());
  };

  return (
    <div>
      <p> Time :{date.toLocaleString()} </p>
      <p> <input type="text" value={text} onChange={(e) => setText(e.target.value)} /></p>
      <button type="button" onClick={increment}>Increment</button>
    </div>
  );
}

export default UseEffectComponent;

