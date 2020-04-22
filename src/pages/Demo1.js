import React from 'react';
import {Input,Button,Select} from 'antd'
import 'antd/dist/antd.css'
import './Demo1.scss';
const Search = Input.Search;
const Option = Select.Option;

class App extends React.Component{
  state ={
    val:'',
    list:[]
  }
  handleAdd = ()=>{
    let {val, list} = this.state;
    list.push(val);
    this.setState({
      list
    })
  }

  handleSearch = (value)=>{
    let {list} = this.state;
    list.push(value);
    this.setState({
      list
    })
  }

  handleChange = (event)=>{
    let val = event.target.value;
    this.setState({
      val
    })
  }
  render(){
    const {val,list} = this.state;
    const options = [];
    const LiItem = list.map((item,index)=>{
      options.push(<Option key={index}>{item}</Option>)
      return <li key={index}>{item}</li>
      })
    return <div>
      <p>欢迎来到这里</p>
      <h1>hello, world!</h1>
      <Input type="text" style={{width:300}}value={val} onChange={this.handleChange}/> 
      <Button type="primary" onClick={this.handleAdd}>添加</Button>
      <ul>
        {
          LiItem
        }
      </ul>
      <div>
        <Search 
        style={{width:300}}
        onSearch={this.handleSearch}
        enterButton="添加"></Search>
        <br />
        <Select style={{width:150}}>
          {options}
        </Select>
      </div>
    </div>

  }
}


export default App;
