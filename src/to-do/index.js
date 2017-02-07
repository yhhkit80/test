import React, { Component } from 'react';
import TodoList from './todolist/';
// class TodoList extends Component{
var Todo = React.createClass({
  getInitialState() {
    return {
      items: [
        {text: 'aaa',id: 0},
        {text: 'bbb',id: 1},
        {text: 'ccc',id: 2}
      ],
      value: 'test'
    }
  },
  render() {

    return (
      <div>
      <h3>列表操作</h3>
      <div>
        <input  value={this.state.value} onChange={this.handleChange}/>
        <button onClick={this.handleAdd}>提交</button>
      </div>
      <TodoList 
      items={this.state.items}
      onDelete={this.handleDelete}
      doChange={this.doChange}
      />
      </div>
    )
  },
  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  },
  handleAdd() {
    var itemsnew = this.state.items.push({
      text: this.state.value,
      id: Math.random()
    })
    this.setState({
      items: this.state.items
    })
  },
  handleDelete(item) {

    var index;
    for(var i=0,l=this.state.items.length;i<l;i++){
      if(item.id==this.state.items[i].id) index = i;
    }
    console.log(index)
    this.state.items.splice(index,1)
    this.setState({
      items: this.state.items
    })
  },
  doChange(text,item){
    if(!text){
      alert('不能为空！');
      return;
    }
    var jsons = [];
    for(var i=0,l=this.state.items.length;i<l;i++){
      if(item.id==this.state.items[i].id) {
        jsons.push({
          text:text,id:this.state.items[i].id
        })
      }else{
        jsons.push(this.state.items[i])
      };
    }
    this.setState({
      items: jsons
    })

  }
})
// }
export default Todo;