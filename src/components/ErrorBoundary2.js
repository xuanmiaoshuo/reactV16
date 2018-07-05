/** 
 *name: ErrorBoundary
 *describe:hasError 
 *time: 2018/7/4 上午11:22
 *author: yangshuo
 *version: 
*/

import React, {PureComponent} from 'react'
import CreateRefComponent from "./CreateRefComponent";

export default class ErrorBoundary2 extends React.Component{
  constructor(props){
    super(props);
    this.state=({
      hasError:false
    });
  }
  componentDidMount(){
    // throw new Error('这里也管不住🤦‍');
  }

  componentDidCatch(err, info) {
    this.setState({ hasError: true })
    console.log(err);
    throw new Error('这里还是能管得住的😀');
  }
  CreateRefComponent
  render(){
    // throw new Error('管得住别人管不了自己🤦‍');
    if(this.state.hasError){
      return <p>组件给玩坏了🐯</p>;
    }
    return this.props.children
  }
}