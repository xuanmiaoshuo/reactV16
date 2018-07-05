/** 
 *name: Error
 *describe: 
 *time: 2018/7/4 上午11:26
 *author: yangshuo
 *version: 
*/

import React, {PureComponent} from 'react'

export default class Error1Component extends PureComponent {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
      fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
        throw new Error('第四次：我错了!');
      }).catch((error)=>{
        console.log("看看有啥错误",error);
      })
  }

  render() {
    return(
      <p>我没错！（这一秒）</p>
    )
  }
}