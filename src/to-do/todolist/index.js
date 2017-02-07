import React, { Component } from 'react';


var TodoItem = React.createClass({
  getInitialState: function(){
    return {
      value: ''
    }
  },
  render: function(){
                // <button onClick={this.props.delete.bind(this.props.top,this.props.item)}>删除</button>
    return (
        <li key={this.props.item.id}>
          <p>
            {this.props.item.text}
            <button onClick={(e)=>this.props.delete(this.props.item)}>删除</button>
          </p>
          <p><input value={this.state.value} onChange={this.handleChange}/>
          <button onClick={(e)=>this.props.doChange(this.state.value,this.props.item)}>确定</button>
          <button onClick={this.cancleChange}>取消</button></p>
        </li>

    )
  },
  handleChange: function(e){
    this.setState({
      value: e.target.value
    })
  },
  cancleChange: function(e){
    this.setState({
      value: ''
    })
  }

})
// class TodoList extends Component{
var TodoList = React.createClass({
              // <TodoItem item={item} delete={that.props.onDelete.bind(that,item)} />
        // <li key={item.id}>
        //   <p>{item.text}<button onClick={that.delete.bind(that,item)}>删除</button></p>
        //   <p><input /><button>确定</button><button>取消</button></p>
        // </li>
  render() {
    var that = this;
    var nodes = this.props.items.map(function(item){
      return (
        <TodoItem key={item.id} item={item} 
        delete={that.props.onDelete} 
        top={that} 
        doChange={that.props.doChange}
        />


      )
    })

    return (
      <div>
      <ul>{nodes}</ul>

      </div>

    )
  }
  // ,
  // delete(item) {
  //   this.props.onDelete(item)
  // }
})
// }
export default TodoList;