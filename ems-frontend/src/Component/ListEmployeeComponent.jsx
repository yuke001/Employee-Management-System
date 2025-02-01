import React, { useEffect, useState } from 'react';
import { listEmployees } from '../Services/EmployeeService';

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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
    }, []);

    console.log("Employees State:", employees); // Debugging

    return (
        <div className="container">
            <h2>List of Employees</h2>
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
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
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
