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
    return (
      <div>
        <h1 className="heading">
          <span className="text">
            Current Time = {date.toLocaleTimeString(locale)}
          </span>
          {locale === "bn-BD" ? (
            <Button change={this.handleClick} locale="en-US" />
          ) : (
            <Button change={this.handleClick} locale="bn-BD" />
          )}
        </h1>
      </div>
    );
  }
}

export default Clock;
