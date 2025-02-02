import React from 'react'
import HelloWorld from './HelloWorld'
import ListEmployeeComponent from './Component/ListEmployeeComponent'
import Header from './Component/Header'
import Footer from './Component/Footer'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Employee from './Component/Employee'

const App = () => {
  return (
    <>
      <BrowserRouter>

        <Header></Header>
        <Routes>

    {/* // http://localhost:3000 */}
          <Route path='/' element={<ListEmployeeComponent />}></Route>

    {/* // http://localhost:3000/employees */}

          <Route path='/employees' element={<ListEmployeeComponent />}></Route>
    
    
    {/* // http://localhost:3000/add-employee */}

    <Route path='/add-employee' element={<Employee />}></Route>




        </Routes>



        {/* <ListEmployeeComponent></ListEmployeeComponent> */}

        <Footer></Footer>

      </BrowserRouter>

    </>

  )
}

export default App