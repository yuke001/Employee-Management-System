import React from 'react'

const ListEmployeeComponent = () => {


    const dummyData = [
        {
            "id": 1,
            "firstName": "Lance",
            "lastName": "Stamm",
            "email": "lance.stamm@gmail.com"
        },
        {
            "id": 2,
            "firstName": "Olivia",
            "lastName": "Morris",
            "email": "olivia.morris@example.com"
        },
        {
            "id": 3,
            "firstName": "Ethan",
            "lastName": "Smith",
            "email": "ethan.smith@example.com"
        },
        {
            "id": 4,
            "firstName": "Sophia",
            "lastName": "Johnson",
            "email": "sophia.johnson@example.com"
        },
        {
            "id": 5,
            "firstName": "Mason",
            "lastName": "Williams",
            "email": "mason.williams@example.com"
        }
       
    ]



    return (
        <div className='.container'>
            <h2>List of Employees</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        dummyData.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
    )
}

export default ListEmployeeComponent