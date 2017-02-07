import React, { Component } from 'react';
// import request from 'superagent';
import request from 'request';
import Todo from '../to-do/';
import AntdTest from '../antd-test/';
import AntdStudy from '../antd-study/';

// // class App extends Component {
// var App = React.createClass({
//   getInitialState() {
//     return {
//       items: [
//         {text: 'aaa',id: 0},
//         {text: 'bbb',id: 1},
//         {text: 'ccc',id: 2}
//       ]
//     }
//   },
//   render() {
//     // request.get('http://101.200.129.112:9527/react1/student/',
//     //     function(err,res,body){
//     //       this.setState({
//     //         items: JSON.parse( body )
//     //       })
//     //       console.log(JSON.parse( body ))
//     // })
//     return (
//       <div className="App">
//         <h3>test</h3>
//         <TodoList items={this.state.items}/>
//       </div>
//     );
//   },
//   componentDidMount() {
//     // request.get('http://101.200.129.112:9527/react1/student/')
//     // request.get('http://localhost/Spannew/reston/testjjs/login.jjs')
//     // .end(function(err,res){
//     //   if(res.ok) console.log(res.body)

//     // })

//   }
// })
// // }
class App extends Component {
  constructor(props){
    super(props);
    this.state=  {
      items: [

      ]
    };
  }
  render() {
    return (
      <div className="App">
        <h3>test</h3>
        <Todo />
        <AntdTest />
        <AntdStudy />
      </div>
    );
  }

}
export default App;
