import React from "react";

class Todo extends React.Component {
  state = {
    todo: '',
    warning: null,
  }

  handleInput = (e) => {
    const inputValue = e.target.value;
    const warning = inputValue.includes('.js') ? "You need js skill" : null;

    this.setState({
      todo: inputValue,
      warning: warning,
    });
  }

  render() {
    const { todo, warning } = this.state;
    
    return (
      <div>
        <p>{todo}</p>
        <p>
          <textarea name="todo" value={todo} onChange={this.handleInput} />
        </p>
        <hr />
        <h2>{warning || "Welcome man"} </h2>
      </div>
    );
  };

}

export default Todo;

