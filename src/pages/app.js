import React from 'react'
import { Link } from 'react-router-dom'
import './app.scss'
import {Button} from 'antd'
import 'antd/dist/antd.css'
export default function App(){
    // const [count,setCount] = useState(0)
    // useEffect(()=>{
    //       console.log('执行了useEffect...')
          
    // })
    return <div className="container">
        <h1>欢迎来到这里</h1>
        <Link to='/login'>jump to login</Link>
        <br />
        <Link to='/home'>jump to home</Link>
        <br />
       
    </div>
}
//有状态组件
// export default class App extends React.Component{

//     state ={
//         count:10
//     }
//     handleUpdate = () =>{
//         this.setState({
//             count:this.state.count+1
//         })
//     }
//     handleJump = () => {
//         this.props.history.push('./login')
//     }


//     render(){
//         return <div class="container">
//         <h1>欢迎来到这里</h1>
//         <Link to='/login'>点击跳转到login</Link>
//         <br />
//         <Link to='/home'>点击跳转到home</Link>
//         <br />
//         <Button onClick={this.handleJump}>登录跳转</Button>
//     </div>
//     }
// }