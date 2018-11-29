import React, { Component } from 'react';

import Counter from './components/Counter';
import Hearts from './components/Hearts';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      count: 0
    };
  }

  decrement = () => {
    const {count} = this.state;
    if(count <= 0) return;

    this.setState({count: count - 1})
  }

  render() {
    const {count} = this.state;
    return (
      <main className="container">
        <h1>Counter</h1>
        <Counter
          value={count}
          onIncrement={() => this.setState({count: count + 1})}
          onDecrement={this.decrement}
        />
        <Hearts count={count}/>
      </main>
    );
  }
}

export default App;
