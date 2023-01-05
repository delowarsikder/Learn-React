import React from "react";
import Button from "./Button";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), locale: "bn-BD" };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  handleClick = (locale) => {
    this.setState({
      locale: locale,
    });
  };

  render() {
    const { date, locale } = this.state;
    // let button;
    // if (locale === "bn-BD") {
    //   button = (
    //     <Button change={this.handleClick} locale="en-US">
    //       Click Here
    //     </Button>
    //   );
    // } else {
    //   button = (
    //     <Button change={this.handleClick} locale="bn-BD">
    //       English
    //     </Button>
    //   );
    // }

    return (
      <div>
        <h1 className="heading">
          <span className="text">
            Current Time = {date.toLocaleTimeString(locale)}
          </span>
        </h1>
        {locale === "bn-BD" ? (
          <Button change={this.handleClick} locale="en-US" show={false}/>
        ) : (
          <Button change={this.handleClick} locale="bn-BD" show={true}/>
        )}
      </div>
    );
  }
}

export default Clock;
