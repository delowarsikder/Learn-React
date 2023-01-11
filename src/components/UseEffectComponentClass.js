import React from "react";
class UseEffectCompontClass extends React.Component {
  state = {
    count: 0,
    date: new Date(),
  };

  componentDidMount() {
    const { count } = this.state;
    document.title = `Clicked ${count} times`;
    setInterval(this.tick, 1000);
  }

  componentDidUpdate() {
    const { count } = this.state;
    document.title = `Clicked ${count} times`;
  }

  changeTitle = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  tick = () => {
    this.setState({
      date: new Date(),
    });
  };

  render() {
    const { count, date } = this.state;
    return (
      <>
        <p>Time : {date.toLocaleDateString()} </p>
        <p>
          <button type="button" onClick={this.changeTitle}>click Me</button>
        </p>
      </>
    );
  }


}


export default UseEffectCompontClass;



