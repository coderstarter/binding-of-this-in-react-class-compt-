import React from "react";
// import { render } from "react-dom";

class Incrementer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "clicked me"
    };
  }
  // increment() {
  //   // this.state.count = this.state.count + 1;
  //   // don't do like this as we are directly changing the state
  //   // it will not re-render it
  //   // use setState instead for it
  //   this.setState({
  //     msg: "clicked Successfully "
  //   });
  // }
  // or you can use below the arrown function then no need to take care of this keyword
  increment = () => {
    this.setState({
      msg: "msg is from increment arrow "
    });
  };
  render() {
    return (
      <>
        <p>{this.state.msg} times clicked </p>
        <button onClick={this.increment.bind(this)}>click me</button>
        <button onClick={() => this.increment()}>click me</button>
      </>
    );
  }
}

export default Incrementer;
