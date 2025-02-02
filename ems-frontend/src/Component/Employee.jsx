import React, { useState } from 'react'
import { createEmployee } from '../Services/EmployeeService';
import { useNavigate } from 'react-router-dom';


const Employee = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  // // handle first name 
  // const handleFirstName = (e) => setFirstName(e.target.value);

  // // handle last name
  // const handleLastName = (e) => setLastName(e.target.value);
  // // handle email
  // const handleEmail = (e) => setEmail(e.target.value);

  //saveEmployee
  function saveEmployee(e) {
    e.preventDefault();
    const employee = { firstName, lastName, email };
    console.log(employee);

    
  createEmployee(employee).then((response) => {
    console.log(response.data);
    navigate('/employees');
  }).catch(error => {
    console.log(error);
  })

  }

  // create Employee



  return (
    <div>
      <div className='container'>
        <br /><br />
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h2 className='text-center'>Add Employee</h2>
            <div className='card-body'>

              <form action="">

                {/* First Name */}
                <div className='form-group mb-2'>
                  <label className='form-label'>First Name :</label>
                  <input
                    type="text"
                    placeholder='Enter Employee First Name'
                    name='firstName'
                    value={firstName}
                    className='form-control'
                    onChange={(e) => setFirstName(e.target.value)} />
                </div>

                {/* Last Name */}
                <div className='form-group mb-2'>
                  <label className='form-label'>Last Name :</label>
                  <input
                    type="text"
                    placeholder='Enter Employee Last Name'
                    name='lastName'
                    value={lastName}
                    className='form-control'
                    onChange={(e) => setLastName(e.target.value)} />
                </div>

                {/* Email */}
                <div className='form-group mb-2'>
                  <label className='form-label'>Email :</label>
                  <input
                    type="email"
                    placeholder='Enter Employee Email'
                    name='email'
                    value={email}
                    className='form-control'
                    onChange={(e) => setEmail(e.target.value)} />
                </div>

                {/* Button */}

                <button className='btn btn-success' onClick={saveEmployee}>Submit</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employee