import React from "react";
// https://www.youtube.com/watch?v=hbLTt10nhOA&list=PLHiZ4m8vCp9M6HVQv7a36cp8LKzyHIePr&index=10&ab_channel=LearnwithSumit-LWS-Bangladesh
class Form extends React.Component {
  state = {
    title: "ReactJs",
  };

  handleChange= (event) => {
    console.log(event.target.value);
    this.setState({ title: event.target.value });
  };

  render() {
    const { title } = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter text"
            value={title}
            onChange={this.handleChange}
          />
          <br/> 
          <br/> 
          <textarea name="" id="" cols="30" rows="10" value='nice'></textarea>
        </form>
      </div>
    );
  }
}

export default Form;
