import React from "react";

class HoverCounter extends React.Component {
  state = {
    count: 0,
  };
 
  hoverCount = () => {
    this.setState((prevCount) => ({ count: prevCount.count + 1 }));
  };

  render() {
    const { count } = this.state;
    return (
      <>
        <h2 onMouseOver={this.hoverCount}> Hover {count} times</h2>
      </>
    );
  }
}

export default HoverCounter;
