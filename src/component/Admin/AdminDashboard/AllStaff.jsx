import { Container,makeStyles,Paper,Table,TableBody,TableCell,TableContainer,TableHead,TablePagination,TableRow } from "@material-ui/core";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import styles from '../Styles.styles.js';
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { BounceLoader } from "react-spinners";
import { TramOutlined } from "@material-ui/icons";
import { AddStaff } from "./AddStaff.jsx";

const style = makeStyles((theme) => ({
    container1: {
      width:'60%',
      paddingTop: theme.spacing(10),
      [theme.breakpoints.down("sm")]: {
        width:'100%',
      },
    },
    division:{
        paddingTop: theme.spacing(2)
    }
}))
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
export const AllStaff = () =>{
    const classes = styles();
    const myClass = style();
    const {container1,card1,form_control,label,division1,button} = classes;
    const [ambulanceList,setAmbulanceList] = useState([]);
    const [spinner, setSpinner] = useState(false)
    useEffect(()=>{
        setSpinner(TramOutlined)
        const data = localStorage.getItem("Admin");
        console.log("36-->",data);
        const decoded = jwt_decode(data);
        console.log("38-->",decoded.data.hospitalName);
        axios.get(`http://localhost:5000/staffList/${decoded.data.hospitalName}`)
        .then((res,err)=>{
            if(res.data.isSuccess)
            {
                console.log(res.data.data)
                setAmbulanceList(res.data.data)
                setSpinner(false)
            }else{
                console.log(err)
                alert(err)
            }
        })
    },[])
    return(
        <>
            <Container className={myClass.container1}>
                <h1>All Ambulance</h1>
                {
                    spinner ? <><div className="text-center" style={{ marginTop: '20%', marginRight: '4%' }}>
                        <BounceLoader size={100} color="#089bab" />
                    </div><br /><div className='text-center' style={{ marginTop: '11%', marginLeft: '10%' }}>Loading...</div> </>: 
                <TableContainer component={Paper}>
                  
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead style={{backgroundColor:'#089bab'}}>
                            <TableRow>
                                <TableCell>Hospital Name</TableCell>
                                <TableCell align="center">Employee Name</TableCell>
                                <TableCell align="center">Employee Id</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ambulanceList.map((row) => (
                            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {row.hospitalName}
                                </TableCell>
                                <TableCell align="center">{row.employeeName}</TableCell>
                                <TableCell align="center">{row.employeeId}</TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                
                </TableContainer>
                } 
            </Container>
        </>
    )
}