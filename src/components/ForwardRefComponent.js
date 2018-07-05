/**
 *name: CreateRefComponent
 *describe:
 *time: 2018/7/5 下午12:50
 *author: yangshuo
 *version:
*/

import React, {PureComponent} from 'react'

const fancyButtonRef = React.createRef();

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} {...props} someAttribute="我是一个button">
    {props.children}
  </button>
))

export default class ForwardRefComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.pRef = React.createRef();
  }

  // componentDidMount(){console.log('ForwardRefComponent',ForwardRefComponent.name)}

  getButtonRef(){
    this.pRef.current.innerHTML =fancyButtonRef.current.getAttribute('someAttribute')
  }

  render() {
    return(
      <div>
        <br/>
        <FancyButton ref={fancyButtonRef} onClick={this.getButtonRef.bind(this)}>点我获取button的属性</FancyButton>
        <p ref={this.pRef}>猜猜我会拿到什么❓</p>
      </div>
    )
  }
}


function logProps(Component) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const {forwardedRef, ...rest} = this.props;

      // Assign the custom prop "forwardedRef" as a ref
      return <Component ref={forwardedRef} {...rest} />;
    }
  }

  // Note the second param "ref" provided by React.forwardRef.
  // We can pass it along to LogProps as a regular prop, e.g. "forwardedRef"
  // And it can then be attached to the Component.
  function forwardRef(props, ref) {
    return <LogProps {...props} forwardedRef={ref} />;
  }

  // These next lines are not necessary,
  // But they do give the component a better display name in DevTools,
  // e.g. "ForwardRef(logProps(MyComponent))"
  const name = Component.displayName || Component.name;
  forwardRef.displayName = `logProps(${name})`;

  return React.forwardRef(forwardRef);
}



