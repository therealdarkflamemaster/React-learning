import React from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import './app.scss'
import {Button} from 'antd'
import 'antd/dist/antd.css'

export default function Detail(){
    const params = useParams();
    const history = useHistory();
    return <div className="container">
        <p>this is detail.</p>
        <p>当前的参数ID为 ：{params.id} </p>
        <Button onClick={()=>{
            history.push('/')
        }}>跳转到首页</Button>
    </div>
}
//有状态组件
// export default class Detail extends React.Component{
    
//     handleJump = () => {
//         this.props.history.push('./login')
//     }


//     render(){
//         return <div className="container">
//         <h1>欢迎来到这里</h1>
//         <p>当前的参数ID为 ：{this.props.match.params.id} </p>
//     </div>
//     }
// }