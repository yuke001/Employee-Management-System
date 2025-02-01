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
        },
        {
            "id": 6,
            "firstName": "Isabella",
            "lastName": "Brown",
            "email": "isabella.brown@example.com"
        },
        {
            "id": 7,
            "firstName": "James",
            "lastName": "Davis",
            "email": "james.davis@example.com"
        },
        {
            "id": 8,
            "firstName": "Ava",
            "lastName": "Miller",
            "email": "ava.miller@example.com"
        },
        {
            "id": 9,
            "firstName": "Benjamin",
            "lastName": "Wilson",
            "email": "benjamin.wilson@example.com"
        },
        {
            "id": 10,
            "firstName": "Charlotte",
            "lastName": "Moore",
            "email": "charlotte.moore@example.com"
        }
    ]



    return (
        <div>
            <h2>List of Employees</h2>
            <table>
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