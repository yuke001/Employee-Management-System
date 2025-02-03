import React, { useState, useEffect } from 'react';
import { createEmployee, getEmployee } from '../Services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const Employee = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const { id } = useParams();
  console.log("ID from URL:", id);

  const [error, setError] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    console.log("Fetching Employee with ID:", id);
    if (id) {
      getEmployee(id)
        .then((response) => {
          console.log("API Response:", JSON.stringify(response.data, null, 2));
          if (response.data && response.data.data) {
            const { firstName, lastName, email } = response.data.data;
            setFirstName(firstName);
            setLastName(lastName);
            setEmail(email);
          }
        })
        .catch((error) => {
          console.error("API Error:", error);
        });
    }
  }, [id]);

  //saveEmployee
  // function saveEmployee(e) {
  //   e.preventDefault();

  //   if (validateForm()) {
  //     const employee = { firstName, lastName, email };
  //     console.log(employee);

  //     // create Employee
  //     createEmployee(employee)
  //       .then((response) => {
  //         console.log(response.data);
  //         navigate('/employees');
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // }

  function saveEmployee(e) {
    e.preventDefault();
 
    if (validateForm()) {
 
      const employee = { firstName, lastName, email };
      console.log("Employee data being sent:", employee); // Log the employee data
 
      // create Employee
      createEmployee(employee).then((response) => {
        console.log(response.data);
        navigate('/employees');
      }).catch(error => {
         console.log(error);
         console.log(error.response.data); // Log the backend error response
      })
    }
 
  }

  // form validation
  function validateForm() {
    let valid = true;
    const errorsCopy = { ...error };

    if (firstName.trim()) {
      errorsCopy.firstName = '';
    } else {
      errorsCopy.firstName = 'First Name is required';
      valid = false;
    }

    if (lastName.trim()) {
      errorsCopy.lastName = '';
    } else {
      errorsCopy.lastName = 'Last Name is required';
      valid = false;
    }

    if (email.trim()) {
      errorsCopy.email = '';
    } else {
      errorsCopy.email = 'Email is required';
      valid = false;
    }

    setError(errorsCopy);
    return valid;
  }

  // function for page title change
  function pageTitle() {
    if (id) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add Employee</h2>;
    }
  }

  return (
    <div>
      <div className="container">
        <br />
        <br />
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {pageTitle()}
            <div className="card-body">
              <form action="">
                {/* First Name */}
                <div className="form-group mb-2">
                  <label className="form-label">First Name :</label>
                  <input
                    type="text"
                    placeholder="Enter Employee First Name"
                    name="firstName"
                    value={firstName}
                    className={`form-control ${error.firstName ? 'is-invalid' : ''}`}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {error.firstName && (
                    <div className="invalid-feedback">{error.firstName}</div>
                  )}
                </div>
                {/* Last Name */}
                <div className="form-group mb-2">
                  <label className="form-label">Last Name :</label>
                  <input
                    type="text"
                    placeholder="Enter Employee Last Name"
                    name="lastName"
                    value={lastName}
                    className={`form-control ${error.lastName ? 'is-invalid' : ''}`}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {error.lastName && (
                    <div className="invalid-feedback">{error.lastName}</div>
                  )}
                </div>
                {/* Email */}
                <div className="form-group mb-2">
                  <label className="form-label">Email :</label>
                  <input
                    type="email"
                    placeholder="Enter Employee Email"
                    name="email"
                    value={email}
                    className={`form-control ${error.email ? 'is-invalid' : ''}`}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {error.email && (
                    <div className="invalid-feedback">{error.email}</div>
                  )}
                </div>
                {/* Button */}
                <button className="btn btn-success" onClick={saveEmployee}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;