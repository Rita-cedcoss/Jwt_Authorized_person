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
        "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWwiOiJwYWxyaXRhMDkyQGdtYWlsLmNvbSIsInB3ZCI6InBhbEAxMjMiLCJyb2wiOiJhZG1pbiIsImV4cCI6MTUxNjIzMTAyMjJ9.LCQ7j0XYGkCBqqrf4HDoNv3SMzY5gDkoZ2zgmnX3cbE"
      },
      {
        "eml":"pal123@gmail.com",
        "pwd":"1234",
        "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWwiOiJwYWwxMjNAZ21haWwuY29tIiwicHdkIjoiMTIzNCIsInJvbCI6InVzZXIiLCJleHAiOjE1MTYyMzkzMjJ9.b4aO065m3G6P4K_XIfzBLEQaSdvbu_5QQ6wRXIsiwww" 
      },
      {
        "eml":"rahul@gmail.com",
        "pwd":"1234",
        "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWwiOiJyYWh1bEBnbWFpbC5jb20iLCJwd2QiOiIxMjM0Iiwicm9sIjoidXNlciIsImV4cCI6MTUxNjIzMTAyMzR9.hUPMfRKML4N2_yJb01p1eYolmpjFbDQQb5nDp96A7-k"
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
