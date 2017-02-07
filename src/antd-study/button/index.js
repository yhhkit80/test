import React from 'react'

var Button = React.createClass({
  render: function(){
    return (
      <div>
        <h3>按钮 内部</h3>
        <button onClick={this.props.ajax}>{this.props.children}{this.props.loading?'...':''}</button>
      </div>
    )
  }
})
export default Button