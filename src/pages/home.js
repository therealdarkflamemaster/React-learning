import React, {useEffect, useState} from 'react'
import { Table } from 'antd'
import {Link} from 'react-router-dom'
import './home.scss'
import axios from 'axios'
export default function Home(){
    const [data,setData] = useState([]);
    const [index,setIndex] = useState(0);
    const columns = [
        {
        title:'地区',
        dataIndex:'area'
        },{
            title:'Java',
            dataIndex:'java'
        },{
            title:'php',
            dataIndex:'php'
        },{
            title:'node',
            dataIndex:'node'
        },{
            title:'JS',
            dataIndex:'JS'
        },{
            title:'python',
            dataIndex:'python'
        }

    ];
    useEffect(()=>{
        axios.get('/data.json').then((reponse)=>{
            const res = reponse.data;
            if(res.code === 0){
                setData(res.data);
            }
        })
    },[]);

    return <div className="home">
           <h1>语言大数据报告</h1>
           <div className="wrap">
               <div className="nav">
                   <a className={index == 0 ? "checked" : ""} onClick={()=>{setIndex(0) }}>语言动态</a>
                   <a className={index == 1 ? "checked" : ""} onClick={()=>{setIndex(1) }}>语言地图</a>
                   <a className={index == 2 ? "checked" : ""} onClick={()=>{setIndex(2) }}>语言热搜</a>
                   <a className={index == 3 ? "checked" : ""} onClick={()=>{setIndex(3) }}>语言播报</a>
               </div>
               <p>数据是虚构的</p>
                   <Table
                   bordered
                   pagination={false}
                   columns={columns} 
                   dataSource={data} />
                <Link to="/" className="nav-link">回首页</Link>
           </div>
    </div>
}


// class组件实现页面交互功能
/* export default class Home extends React.Component{


    // 初始化表格数据源和Tab索引
    state = {
        data:[],
        index:0
    }
    
    

    componentDidMount(){
        axios.get('/data.json').then((reponse)=>{
            const res = reponse.data;
            if(res.code === 0){
                this.setState({
                    data : res.data
                });
            }
        })
    }

    handleSwitch = (index) =>{
         this.setState({
             index : index
         })
    }

    render(){
        const columns = [
            {
            title:'地区',
            dataIndex:'area'
            },{
                title:'Java',
                dataIndex:'java'
            },{
                title:'php',
                dataIndex:'php'
            },{
                title:'node',
                dataIndex:'node'
            },{
                title:'JS',
                dataIndex:'JS'
            },{
                title:'python',
                dataIndex:'python'
            }
    
        ];
        
        const index = this.state.index;
        return <div className="home">
        <h1>语言大数据报告</h1>
        <div className="wrap">
            <div className="nav">
                <a className={index == 0 ? "checked" : ""} onClick={()=>this.handleSwitch(0)}>语言动态</a>
                <a className={index == 1 ? "checked" : ""} onClick={()=>this.handleSwitch(1)}>语言地图</a>
                <a className={index == 2 ? "checked" : ""} onClick={()=>this.handleSwitch(2)}>语言热搜</a>
                <a className={index == 3 ? "checked" : ""} onClick={()=>this.handleSwitch(3)}>语言播报</a>
            </div>
            <p>数据是虚构的</p>
                <Table
                bordered
                pagination={false}
                columns={columns} 
                dataSource={this.state.data} />
             <Link to="/" className="nav-link">回首页</Link>
          </div>
        </div>
    }
}
*/