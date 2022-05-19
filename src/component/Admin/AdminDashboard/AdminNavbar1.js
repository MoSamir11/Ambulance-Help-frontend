import Cookies from 'js-cookie';
import React,{Component,PureComponent,useEffect, useState} from 'react';
import { AdminNavbar } from './AdminNavbar';
import jwt_decode from "jwt-decode";
import {axios} from 'axios'
// class AdminNavbar1 extends PureComponent{
    
//     constructor(props) {
//         super(props);
   
//         this.state = {
//             notification: [],
//             DataisLoaded: false
//         };
//     }
   
//     componentDidMount() {
//         const token = Cookies.get("Admin");
//         console.log("token-->",token);
//         const decode = jwt_decode(token);
//         console.log("decode-->",decode.data._id);
//         fetch(`http://localhost:5000/adminList/${decode.data._id}`)
//             .then((res) => res.json())
//             .then((json) => {
//                 if(json.isSuccess){
//                     this.setState({
//                         notification: json.data.notification,
//                     });
//                 }
//             })
//     }
//     render(){
//         console.log(this.state.notification);
//         return(
//             <>
//                 <AdminNavbar notification={this.state.notification} />
//             </>
//         )
//     }
// }
// export default AdminNavbar1

const AdminNavbar1 = () =>{
    const [notification,setNotification] = useState([]);
    useEffect(()=>{
        const token = Cookies.get("Admin");
        console.log("67-->",token);
        const decode = jwt_decode(token);
        console.log("49-->",decode.data.notification);
        setNotification(decode.data.notification)
        // axios.get(`http://localhost:5000/adminList/${decode.data._id}`)
        //  .then((res)=>{
        //     console.log("52-->",res)
        // })
    },[])
    return(
        <>
            <AdminNavbar notification={notification} />
        </>
    )
}
export default AdminNavbar1