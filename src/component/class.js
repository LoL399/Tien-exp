import React from "react";

/**
 * class
 */
export class ContentClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  /**
   * tang gia tri
   */
  increase = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  componentDidMount() {
    this.setState({
      value: 1000,
    });
  }

  componentWillReceiveProps(props){
    this.setState({
      value: props.value + 9000,
    });
  }

  render() {
    return (
      <div>
      class
      <button onClick={() => this.increase()}>Add</button>
      <div>{this.state.value}</div>
    </div>
    );
  }
}
