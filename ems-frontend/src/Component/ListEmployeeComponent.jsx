import React, { useEffect, useState } from 'react';
import { deleteEmployee, listEmployees } from '../Services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();



    useEffect(() => {
        getAllEmployees()
    }, []);

    function getAllEmployees() {
        listEmployees()
            .then((response) => {
                console.log("API Response:", response.data); // Debugging: Check response
                const empData = Array.isArray(response.data) ? response.data : response.data.data || [];
                setEmployees(empData);
                setLoading(false);
            })
            .catch(error => {
                console.log("Error fetching employees:", error);
                setLoading(false);
            });
    }

    // function addNewEmployee
    function addNewEmployee() {
        navigate('/add-employee');
    }

    console.log("Employees State:", employees); // Debugging

    // function updateEmployee
    function updateEmployee(id) {
        navigate(`/update-employee/${id}`);
    }

    // function removeEmployee

    function removeEmployee(id) {
        console.log("Delete Employee with ID:", id);
        deleteEmployee(id).then((response) => {
            getAllEmployees()
        }).catch(error => {
            console.error(error)
        })
    }

    return (
        <div className="container">
            <h2>List of Employees</h2>
            <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>


            {loading ? (
                <p>Loading...</p>
            ) : employees.length > 0 ? (
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                    <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)}
                                        style={{ marginLeft: '10px' }}
                                    >Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No Employees Found</p>
            )}
        </div>
    );
};

export default ListEmployeeComponent;
