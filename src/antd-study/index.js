import React from 'react'
import Button from './button'
import Input from './input'

var AntStudy = React.createClass({
  getInitialState: function(){
    return {
      loading: false,
      value: 'aaa'
    }
  },
  render: function(){
    return (
      <div>
        <h3>输入框的值{this.state.value}</h3>
        <Button loading={this.state.loading} ajax={this.ajax}>原始按钮</Button>
        <Input 
        value={this.state.value} 
        onChange={(e)=>this.setState({value:e.target.value})}
        onPressEnter={this.onPressEnter}
        />
      </div>
    )
  },
  ajax: function(){
    this.setState({
      loading: !this.state.loading
    })
  },
  handleChange: function(e){
    this.setState({
      value: e.target.value
    })
  },
  onPressEnter: function(e){
    if(e.which == 13)
    console.log(e.target.value) 
  }
})
export default AntStudy