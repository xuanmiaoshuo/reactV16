/** 
 *name: ErrorBoundary
 *describe:hasError 
 *time: 2018/7/4 上午11:22
 *author: yangshuo
 *version: 
*/

import React, {PureComponent} from 'react'

export default class ErrorBoundary extends React.Component{
  constructor(props){
    super(props);
    this.state=({
      hasError:false
    });
  }

  componentDidCatch(err, info) {
    this.setState({ hasError: true })
    console.log( err,"======info", info);
  }

  render(){
    if(this.state.hasError){
      return <p>组件给玩坏了🐯</p>;
    }
    return this.props.children
  }
}