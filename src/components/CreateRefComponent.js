/**
 *name: CreateRefComponent
 *describe:
 *time: 2018/7/5 下午12:50
 *author: yangshuo
 *version:
*/

import React, {PureComponent} from 'react'

export default class CreateRefComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  changeInputValue(value){
    console.log('value',value)
    console.log('value',this.inputRef)
    this.inputRef.current.setAttribute('value',value)
  }

  render() {
    return(
      [
        <br/>,
        <input type="text" ref={this.inputRef} />,
        <br/>,
        <button onClick={this.changeInputValue.bind(this,"轩邈")}>修改👆那家伙的值</button>
      ]
    )
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }
}
