import React from 'react'
import {Button,Col,Row,Table,Modal,Form,Input,Icon,Radio,message} from 'antd'  //引入antd模块中的Button组件
import 'antd/dist/antd.css'  //引入antd模块中的样式
const FormItem = Form.Item
const RadioGroup = Radio.Group
const RadioButton = Radio.Button
const success = function () {
  message.success('成功添加数据');
};

const error = function () {
  message.error('This is a message of error');
};

const warning = function () {
  message.warning('This is message of warning');
};
var header = [
  {title:'name',dataIndex:'name'},
  {title:'age',dataIndex:'age'},
  {title:'sex',dataIndex:'sex'}
]
var data = [
  {id:1,name:'aaa',age:20,sex:'boy'},
  {id:2,name:'bbb',age:21,sex:'girl'},
  {id:3,name:'ccc',age:22,sex:'boy'},
  {id:4,name:'ddd',age:23,sex:'boy'},
  {id:5,name:'eee',age:24,sex:'boy'},
  {id:6,name:'fff',age:25,sex:'boy'},
  {id:7,name:'ggg',age:26,sex:'girl'},
  {id:8,name:'hhh',age:27,sex:'boy'},
  {id:9,name:'iii',age:27,sex:'boy'},
  {id:10,name:'jjj',age:27,sex:'boy'},
  {id:11,name:'kkk',age:27,sex:'boy'},
  {id:12,name:'lll',age:27,sex:'boy'},
  {id:13,name:'mmm',age:27,sex:'boy'},
  {id:14,name:'nnn',age:27,sex:'boy'},
  {id:15,name:'ooo',age:27,sex:'boy'}
]

var ReactAntd = React.createClass({
  getInitialState: function(){
    return {
      loading: false,
      showPlus: false,
      value: 2,
      name: 'ryan',
      sex: 'boy',
      age: 28
    }
  },
  onChange(e,type) {
    var obj = {};
    obj[type] = e.target.value;
    this.setState(obj);
  },
  handlePlus(){
    var obj = {};
    obj.name = this.state.name;
    obj.sex = this.state.sex;
    obj.age = this.state.age;
    data.unshift(obj);
    success();
    this.setState({
      showPlus: false
    })
  },
  render: function() {
    return (
      <div>

        <h3>ant表格</h3>
        <Row key="1">
          <Col span={4}><Button icon="plus" type="primary" onClick={(e)=>this.setState({showPlus:true})}>增加</Button></Col>
          <Col span={4}><Button icon="edit" type="ghost">编辑</Button></Col>
          <Col span={4}><Button icon="delete">删除</Button></Col>
        </Row>
        <br />
        <Row key="2">
          <Col>
            <Table dataSource={data} columns={header}/>
          </Col>
        </Row>
        <Modal visible={this.state.showPlus} 
                title="增加信息"
                onCancel={()=>this.setState({showPlus:false})}
                onOk={this.handlePlus}
        >
          <Form>
            <FormItem
              label="姓名"
              labelCol={{span:6}} 
              wrapperCol={{span:14}} 
            >
              <Input placeholder="请输入姓名" value={this.state.name} onChange={(e)=>this.onChange(e,'name')} />
            </FormItem>
            <FormItem
              label="年龄"
              labelCol={{span:6}} 
              wrapperCol={{span:14}} 
            >
              <Input  placeholder="请输入年龄" value={this.state.age} onChange={(e)=>this.onChange(e,'age')}/>
            </FormItem>
            <FormItem
              label="性别"
              labelCol={{span:6}} 
              wrapperCol={{span:14}} 
            >
              <RadioGroup  onChange={(e)=>this.onChange(e,'sex')} value={this.state.sex}>
                <Radio value={'boy'}>男</Radio>
                <Radio value={'girl'}>女</Radio>
              </RadioGroup>
            </FormItem>

            <RadioGroup onChange={(e)=>this.onChange(e,'value')} value={this.state.value}>
              <RadioButton value={1}>A</RadioButton>
              <RadioButton value={2}>B</RadioButton>
              <RadioButton value={3}>C</RadioButton>
              <RadioButton value={4}>D</RadioButton>
            </RadioGroup>
          </Form>
        </Modal>
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