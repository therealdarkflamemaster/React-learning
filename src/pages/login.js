import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Form,Input,Button} from 'antd'
import axios from 'axios';
const FormItem = Form.Item;

export default function Login(){

    const [name,setName] = useState('')
    const [pwd,setPwd] = useState('')
    const history = useHistory();
    return <Form className="login-form">
        <FormItem>
            <Input placeholder="username" maxLength={5} onChange={(event)=>{
                setName(event.target.value);
            }}/>
        </FormItem>
        <FormItem>
            <Input placeholder="password" maxLength={5} type="password" onChange={(event)=>{
                   setPwd(event.target.value);
            }}/>
        </FormItem>
        <FormItem>
        <label>{name} -- {pwd}</label>
        </FormItem>
        <FormItem>
            <Button type="primary" onClick={()=>{
                login(name,pwd).then((response)=>{
                    let res = response.data;
                    if(res.code === 0){
                        history.push('/home');
                    }
                })
            }}>Login in</Button>
        </FormItem>
        
    </Form>
}


function login(name,pwd){
   return axios.get("/login.json",{
        params:{
            name,pwd
        }
    });

}