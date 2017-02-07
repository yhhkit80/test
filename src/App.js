import React, { Component } from 'react';
// import request from 'superagent';
import request from 'request';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
  componentDidMount() {
    // request.get('http://101.200.129.112:9527/react1/student/')
    // request.get('http://localhost/Spannew/reston/testjjs/login.jjs')
    // .end(function(err,res){
    //   if(res.ok) console.log(res.body)

    // })
    request.get('http://101.200.129.112:9527/react1/student/',
    // request.post('http://localhost/Spannew/reston/testjjs/login.jjs',{qs:{name:1}},
        function(err,res,body){
          console.log(res)
          console.log(JSON.parse( body ))
            // if (!e && r.statusCode == 200) {
            //     res.cookie('name', req.query.userName, { maxAge: 7*24*60*60*1000 ,httpOnly:true, path:'/' });//设置一周过期时间
            //     res.send(   JSON.parse( body ) );
            // }else{
            //     result = res.json(e);
            //     // var a = require("../static/data/jjs/s/login.js");
            //     // res.json(a);
            // }
        })
  }
}

export default App;
