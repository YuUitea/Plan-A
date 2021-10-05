import './Counter.css'
import {Component} from "react";
import PropTypes from 'prop-types'

class Counter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  render() {
    return (
        <div className="counter">
          <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
          <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
          <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
          <span className="count">{this.state.counter}</span>
          <div>
            <button className="reset-button" onClick={this.reset}>Reset</button>
          </div>
        </div>
    );
  }

  increment = (by) => {
    this.setState(
        (prevState) => {
          return {counter: prevState.counter + by}
        }
    );
  }

  decrement = (by) => {
    this.setState(
        (prevState) => {
          return {counter: prevState.counter - by}
        }
    );
  }

  reset = () => {
    this.setState(
        () => {
          return {counter: 0}
        }
    );
  }
}

class CounterButton extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  render() {
    return (
        <div>
          <button className="counter-button" onClick={this.increment}>
            +{this.props.by}
          </button>
          <button className="counter-button" onClick={this.decrement}>
            -{this.props.by}
          </button>
        </div>
    );
  }

  increment = () => {
    this.props.incrementMethod(this.props.by);
  }

  decrement = () => {
    this.props.decrementMethod(this.props.by);
  }
}

CounterButton.defaultProps = {
  by : 1
}

CounterButton.propType = {
  by : PropTypes.number
}

export default Counter;