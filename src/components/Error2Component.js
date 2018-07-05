/** 
 *name: Error
 *describe: 
 *time: 2018/7/4 上午11:26
 *author: yangshuo
 *version: 
*/

import React, {PureComponent} from 'react'

export default class Error2Component extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({counter}) => ({
      counter: counter + 1
    }));
  }

  render() {
    if (this.state.counter === 5) {
      throw new Error('我错了!');
    }
    return <p onClick={this.handleClick}>{this.state.counter}</p>;
  }
}
