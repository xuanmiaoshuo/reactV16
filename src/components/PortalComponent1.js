/**
 *name: PortalComponent.js
 *describe:
 *time: 2018/7/4 下午11:49
 *author: yangshuo
 *version:
*/

// These two containers are siblings in the DOM
import React, {PureComponent} from 'react'
import ReactDOM from 'react-dom';

//样式
import '../css/portalComponent1.css';

const modalContainer = document.getElementById('root');

class Modal extends  React.Component {
  el = document.createElement('div');
  componentDidMount() {
    modalContainer.appendChild(this.el);
  }
  componentWillUnmount() {
    modalContainer.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

export default class PortalComponent extends PureComponent {
  constructor(props) {
    super(props)
    this.state={showModal: false}
  }

  onShow = () => this.setState({showModal: true});

  onHide = () => this.setState({showModal: false});

  render() {
    const modal = this.state.showModal
      ? <Modal
        key="modal"
        children={
          <div className="modal">
            <div>
              通过传送组件，我们可以渲染Modal组件到任何dom节点上。
            </div>
            这是一个渲染在root节点上的div
            <button onClick={this.onHide}>隐藏遮罩</button>
          </div>
        }
      />
      : '' //Look here!

    return (
      <div className="app">
        这个div已经被overflow：hidden
        <button onClick={this.onShow}>显示遮罩</button>
        {modal}
      </div>
    );
  }
}
