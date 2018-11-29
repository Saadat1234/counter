import React, {Component} from 'react';

class Counter extends Component {
  render(){
    const {value, onIncrement, onDecrement} = this.props;
    return (
      <div className="input-group w-25">
        <div className="input-group-prepend">
          <button
            className="decrement btn btn-outline-secondary"
            onClick={onDecrement}
          >-</button>
        </div>

        <input className="form-control text-center" type="text" readOnly value={value} />

        <div className="input-group-append">
          <button
            className="increment btn btn-outline-secondary"
            onClick={onIncrement}
          >+</button>
        </div>

      </div>
    )
  }
}

export default Counter;
