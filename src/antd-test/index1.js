import React from 'react'
import {Button,Col,Row} from 'antd'  //引入antd模块中的Button组件
import 'antd/dist/antd.css'  //引入antd模块中的样式


var ReactAntd = React.createClass({
  getInitialState: function(){
    return {
      loading: false
    }
  },
  render: function() {
    return (
      <div>
        <Button>Hello</Button>
        <Row>
          <Col span={4}><Button>Hello1</Button></Col>
          <Col span={4}><Button type="primary">Hello1</Button></Col>
          <Col span={4}>
            <Button icon={this.state.loading ? 'loading' : null} onClick={this.ajax}>Hello2</Button>
          </Col>
          <Col span={4}><Button type="ghost" icon="loading">Hello3</Button></Col>
        </Row>
      </div>
    )
  },
  ajax: function(){
    console.log('111')
    this.setState({
      loading: !this.state.loading
    })
  }
})
export default ReactAntd;