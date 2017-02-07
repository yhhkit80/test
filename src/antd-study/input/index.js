import React from 'react'

var Input = React.createClass({
  render: function(){
    return (
      <div>
        <h3>输入框 内部</h3>
        <input 
        value={this.props.value} 
        onChange={this.props.onChange} 
        onKeyDown={this.props.onPressEnter}
        placeholder="输入框"/>
      </div>
    )
  }
})
export default Input