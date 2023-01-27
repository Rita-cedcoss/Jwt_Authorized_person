import React from 'react';
import logo from './logo.svg';
import './App.css';
import JWTLogin from './JWTAuthorization/JWTLogin';
import './JWTAuthorization/typeProps'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './JWTAuthorization/Dashboard';
function App() {
  const loginarr=[
      {
        "eml":"palrita092@gmail.com",
        "pwd":"pal@123",
        "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWwiOiJwYWxyaXRhMDkyQGdtYWlsLmNvbSIsInB3ZCI6InBhbEAxMjMiLCJyb2wiOiJhZG1pbiJ9.EEYut-n_EgcbsmbDMcWU347UwLCh6ON8U3tyvV9MdmU"
      },
      {
        "eml":"pal123@gmail.com",
        "pwd":"1234",
        "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWwiOiJwYWwxMjNAZ21haWwuY29tIiwicHdkIjoiMTIzNCIsInJvbCI6InVzZXIifQ.UJR3urMcTrpvY7sHSq9kqfh-dadvAMLLQ6nyehMNQxs" 
      },
      {
        "eml":"rahul@gmail.com",
        "pwd":"1234",
        "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWwiOiJyYWh1bEBnbWFpbC5jb20iLCJwd2QiOiIxMjM0Iiwicm9sIjoidXNlciJ9.mr0J8URiiRfmSrQ0RfCDbTxtTF9EZfRW5XfsjHn5ryY"
      }
  ]
  return (
    <Routes>
      <Route path='/' element={ <JWTLogin loginarr={loginarr}/>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
    </Routes>
  

  );
}

export default App;
