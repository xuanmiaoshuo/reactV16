/**
 *name: PortalComponent2.js
 *describe:
 *time: 2018/7/5 上午12:56
 *author: yangshuo
 *version:
*/

import React, {PureComponent} from 'react'
import ReactDOM from 'react-dom'

const rootContainer = document.getElementById('root');

export default class PortalComponent2 extends PureComponent {
  state = {clicks: 0};
  onClick = () => {
    this.setState(state => ({clicks: state.clicks + 1}));
  };
  render() {
    return (
      <div onClick={this.onClick}>
        <p>吾子被点{this.state.clicks}下了</p>
        {ReactDOM.createPortal(<Child />, rootContainer)}
      </div>
    );
  }
}

function Child() {
  return <button>Click</button>;
}

