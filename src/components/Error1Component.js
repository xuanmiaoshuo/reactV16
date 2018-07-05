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

  render() {
    return '我是假的二位小数'.toFixed(2)
  }
}