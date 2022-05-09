import Cookies from 'js-cookie';
import React,{Component,PureComponent} from 'react';
import { AdminNavbar } from './AdminNavbar';
import jwt_decode from "jwt-decode";
import {axios} from 'axios'
class AdminNavbar1 extends PureComponent{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         notification:[]
    //     };
    // }
    // componentDidMount(){
    //     const token = Cookies.get("Admin");
    //     console.log("token-->",token);
    //     const decode = jwt_decode(token);
    //     console.log("decode-->",decode.data);
    //     fetch(`http://localhost:5000/adminList/${decode.data._id}`)
    //         .then((result)=>{console.log(result)});
            
    // }
    constructor(props) {
        super(props);
   
        this.state = {
            notification: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        const token = Cookies.get("Admin");
        console.log("token-->",token);
        const decode = jwt_decode(token);
        console.log("decode-->",decode.data._id);
        fetch(`http://localhost:5000/adminList/${decode.data._id}`)
            .then((res) => res.json())
            .then((json) => {
                if(json.isSuccess){
                    this.setState({
                        notification: json.data.notification,
                    });
                }
            })
    }
    render(){
        console.log(this.state.notification);
        return(
            <>
                <AdminNavbar notification={this.state.notification} />
            </>
        )
    }
}
export default AdminNavbar1