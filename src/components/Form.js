import React from "react";

class Form extends React.Component {
  state = {
    title: "ReactJs",
    text: "Sample text",
    framework: "Ruby on Rails",
    isAwesome: true,
  };

  handleChange = (event) => {
    if (event.target.type === "text") {
      this.setState({ title: event.target.value });
    } else if (event.target.type === "textarea") {
      this.setState({ text: event.target.value });
    } else if (event.target.type === "select-one") {
      this.setState({ framework: event.target.value });
    } else if (event.target.type === "checkbox") {
      this.setState({ isAwesome: event.target.checked });
    } else {
      console.log(event.target.type);
    }
  };

  handleSubmit = (e) => {
    const { title, text, framework, isAwesome } = this.state;
    // alert("A name was submitted: " + this.state.value);
    e.preventDefault();
    console.log(title, text, framework, isAwesome);
  };

  render() {
    const { title, text, framework, isAwesome } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter text"
            value={title}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <textarea
            name="text"
            id=""
            cols="30"
            rows="10"
            value={text}
            onChange={this.handleChange}
          />
          <br />

          <select value={framework}  onChange={this.handleChange}>
            <option value="Django">Django</option>
            <option value="Laravel">Laravel</option>
            <option value="ASPnet">ASP.Net</option>
          </select>

          <input
            type="checkbox"
            checked={isAwesome}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
