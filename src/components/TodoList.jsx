/**
 *name: ErrorBoundary
 *describe:
 *time: 2018/7/4 上午10:24
 *author: yangshuo
 *version:
 */
import React, {Component} from "react";
import {observable, action} from "mobx";
import {observer} from "mobx-react";

import Todo from "./Todo";
import Error1Component from "./Error1Component";
import Error2Component from "./Error2Component";
import Error3Component from "./Error3Component";
import Error4Component from "./Error4Component";
import PortalComponent1 from "./PortalComponent1";
import PortalComponent2 from "./PortalComponent2";
import ErrorBoundary from "./ErrorBoundary";
import ErrorBoundary2 from "./ErrorBoundary2";
import CreateRefComponent from "./CreateRefComponent";
import ForwardRefComponent from "./ForwardRefComponent";

import { MyProvider } from "./MyContext";
import MyComponent from "./MyComponent";
import registerServiceWorker from "./registerServiceWorker";

var a = 1;

class Foo {
  a = 2
  test = () => {
    console.log(this.a);
  }
}

let bar = {
  a: 3,
  test: () => {
    console.log(this.a);
  },
  test2: function () {
    console.log(this.a);
  }
}

v = 1; // 严格模式和非严格模式区分
// 给出以下6个结果
// Foo.test();                       //Foo.test is not a function
// bar.test();                       //Cannot read property 'a' of undefined
// bar.test2();                      //3
// bar.test.bind(Foo)();             //Cannot read property 'a' of undefined
// bar.test2.bind(Foo)();            //undefined
// bar.test2.bind(Foo).bind(bar)();  //undefined

// 附加题：给出以下3个结果
let foo = new Foo();
// foo.test();                       //2
// bar.test2.bind(foo)();            //2
// bar.test2.bind(foo).bind(bar)();  //2


@observer
class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      a: 1
    }
  }

  @observable newTodoTitle = "";

  // UNSAFE_componentWillMount(){
  //   console.log('UNSAFE_componentWillMount',)
  // }
  //
  // UNSAFE_componentWillReceiveProps(nextProps){
  //   console.log('UNSAFE_componentWillReceiveProps',)
  // }
  //
  // UNSAFE_componentWillUpdate(nextProps,nextState){
  //   console.log('UNSAFE_componentWillUpdate',)
  // }

  componentDidMount(){
    // console.log('组件挂载完毕',)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log('getDerivedStateFromProps',)
    // console.log('nextProps, prevState',nextProps, prevState)
    return null
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log('getSnapshotBeforeUpdate',)
    // console.log('prevProps, prevState',prevProps, prevState)
    return 2
  }

  componentDidUpdate(props, state, snapshot) {
    console.log('componentDidUpdate',)
    console.log('props',props,'state',state, 'snapshot',snapshot)
  }

  componentDidCatch() {
    // console.log('componentDidCatch',)
  }

  render() {
    return (
      <React.StrictMode>
        <div>
          <form onSubmit={this.handleFormSubmit}>
            新任务:
            <input
              type="text"
              value={this.newTodoTitle}
              onChange={this.handleInputChange}
            />
            <button type="submit">Add</button>
          </form>
          <hr/>
          <ul>
            {this.props.store.todos.map(todo => (
              <Todo todo={todo} key={todo.id}/>
            ))}
          </ul>
          未完成: {this.props.store.unfinishedTodoCount}

          <hr/>
          错误组件1：
          {/*<ErrorBoundary>*/}
            {/*<Error1Component/>*/}
          {/*</ErrorBoundary>*/}

          {/*<br/>*/}
          {/*错误组件2：*/}
          {/*<ErrorBoundary>*/}
            {/*<p>我是无辜的组件</p>*/}
            {/*<Error2Component/>*/}
          {/*</ErrorBoundary>*/}

          {/*<br/>*/}
          {/*错误组件3：*/}
          {/*<ErrorBoundary>*/}
            {/*<Error3Component/>*/}
          {/*</ErrorBoundary>*/}

          {/*<br/>*/}
          {/*错误组件4：*/}
          {/*<ErrorBoundary>*/}
            {/*<Error4Component/>*/}
          {/*</ErrorBoundary>*/}

          {/*<br/>*/}
          {/*错误组件5：*/}
          {/*<ErrorBoundary2>*/}
            {/*<p>我是真的没毛病</p>*/}
          {/*</ErrorBoundary2>*/}

          {/*<br/>*/}
          {/*传送组件1:*/}
          {/*<PortalComponent1/>*/}

          {/*<br/>*/}
          {/*传送组件1:*/}
          {/*<PortalComponent2/>*/}

          {/*自定义属性1*/}
          {/*<p mycustomattribute="something">我身上有自定义属性</p>*/}

          {/*自定义属性2*/}
          {/*<div class="app">*/}
            {/*我用的是class😊*/}
          {/*</div>*/}

          {/*自定义属性3*/}
          {/*<br/>*/}
          {/*<a href="http://www.apple.com/" tabindex="2">我是老二</a><br/>*/}
          {/*<a href="http://www.google.com/" tabindex="1">我是老大</a><br/>*/}
          {/*<a href="http://www.microsoft.com/" tabindex="3">我是老三</a>*/}

          {/*<br/>*/}
          {/*createRef方法*/}
          {/*<br/>*/}
          {/*<CreateRefComponent/>*/}

          {/*<br/>*/}
          {/*forwardRef方法*/}
          {/*<br/>*/}
          {/*<ForwardRefComponent/>*/}

          {/*<MyProvider>*/}
            {/*<MyComponent />*/}
          {/*</MyProvider>*/}

        </div>
      </React.StrictMode>

      // [
      // <form onSubmit={this.handleFormSubmit}>
      //   新任务:
      //   <input
      //     type="text"
      //     value={this.newTodoTitle}
      //     onChange={this.handleInputChange}
      //   />
      //   <button type="submit">Add</button>
      // </form>,
      //   <hr/>,
      //   <ul>
      //     {this.props.store.todos.map(todo => (
      //       <Todo todo={todo} key={todo.id}/>
      //     ))}
      //   </ul>,
      //   '未完成:',
      //   this.props.store.unfinishedTodoCount,
      //   <hr/>,
      //
      //   '错误组件1：',
      //   <ErrorBoundary>
      //     <Error1Component/>
      //   </ErrorBoundary>,
      //
      //   <br/>,
      //   '错误组件2：',
      //   <ErrorBoundary>
      //     <p>我是无辜的组件</p>
      //     <Error2Component/>
      //   </ErrorBoundary>,
      //
      //   <br/>,
      //   '错误组件3：',
      //   <ErrorBoundary>
      //     <Error3Component/>
      //   </ErrorBoundary>,
      //
      //   <br/>,
      //   '错误组件4：',
      //   <ErrorBoundary>
      //     <Error4Component/>
      //   </ErrorBoundary>,
      //
      //   <br/>,
      //   '传送组件1:',
      //   <PortalComponent1/>,
      //
      //   <br/>,
      //   '传送组件1:',
      //   <PortalComponent2/>,
      // ]
    );
  }

  @action
  handleInputChange = e => {
    this.newTodoTitle = e.target.value;
  };

  @action
  handleFormSubmit = e => {
    this.props.store.addTodo(this.newTodoTitle);
    this.newTodoTitle = "";
    e.preventDefault();
  };

//

}


//v16前
const OldHoc = (Component) => {
  return (props = {}) => (
    <div>
      <Component {...props} />
      <div>extra content</div>
    </div>
  );
};

//v16后
const NewHoc = (Component) => {
  return (props) => [
    <Component {...props} />,
    <div>extra content</div>
  ];
};

export default TodoList;
