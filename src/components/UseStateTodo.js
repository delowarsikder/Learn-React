import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState('');
  const [warning, setWarning] = useState(null);

  const handeEvent = (e) => {
    const inputValue = e.target.value;
    const warning = inputValue.includes('.js') ? 'You need to Js skill.' : null;
    setTodo(inputValue);
    setWarning(warning);
  }

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>{todo}</p>
      <p>
        <textarea name="todo" value={todo} onChange={handeEvent} />
      </p>
      <h3>{warning || "great work!!!"}</h3>

      <button onClick={handleClick}>
        Clicked {count} times
      </button>

    </div>
  );
}

export default Todo;


