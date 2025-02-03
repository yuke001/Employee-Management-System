# Employee Management System

This repository contains a full-stack web application for managing employee data, built using Spring Boot on the backend and React on the frontend.

## Overview

The application provides the following functionalities:

*   **Display Employee List:** Fetches and displays all employees from the database.
*   **Add New Employee:** Allows users to create new employee records through a form.
*   **Update Existing Employee:** Allows users to update employee details via their ID.
*   **Delete Employee:** Allows users to delete employee records using their ID.

## Technologies Used

### Backend

*   **Java:** Programming language.
*   **Spring Boot:** Framework for building RESTful APIs and handling data persistence.
*   **Spring Data JPA:** Simplifies database interactions with repositories.
*   **MySQL:** Database for storing employee data.
*   **Lombok:** Library to reduce boilerplate code.
*   **Maven:** Project building tool.

### Frontend

*   **JavaScript (ES6+)**: Programming language.
*   **React**: Library for building user interfaces.
*   **React Router**: Library for handling client-side routing.
*   **Axios:** Library for making HTTP requests to the backend.
*   **Bootstrap:** CSS framework for UI styling.
*   **Vite**: Build tool.
*   **ESLint**: Linter for code quality

## Project Structure

The project is organized into two main directories:

*   **`ems-frontend/`:** Contains the React frontend application.
    *   `src/`: Source code for React components, services, and assets.
        *   `components/`: Reusable UI components (`Employee.jsx`, `Footer.jsx`, `Header.jsx`, `ListEmployeeComponent.jsx`).
        *   `services/`: Contains data fetching logic (`EmployeeService.js`).
*   **`src/`:** Contains the Spring Boot backend application.
    *   `main/java/com/yuke/ems`: Java source code for controllers, services, entities and repositories.
        *   `controller/`: REST controllers (`EmployeeController.java`).
        *   `dto/`: Data transfer object classes (`Employee.java`).
        *   `repository/`: JPA repositories (`EmployeeRepository.java`).
        *   `service/`: Business logic (`EmployeeService.java`).
    *   `main/resources`: Configuration files (`application.properties`).
*    `.mvn/` & `mvnw` & `mvnw.cmd` : Maven wrapper files.

## Setup Instructions

### Prerequisites

*   **Java Development Kit (JDK) 17 or later**: You can download it from [Oracle](https://www.oracle.com/java/technologies/downloads/).
*   **Node.js (v18+) and npm**: You can download it from [Node.js](https://nodejs.org/).
*   **MySQL Database**: You'll need an instance of MySQL database running, and you'll need to create an `ems` database.
*   **Git**: To clone this repository.

### Steps

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/yuke001/Employee-Management-System.git
    cd Employee-Management-System
    ```

2.  **Set up the Backend (Spring Boot):**

    *   Navigate to the backend directory:
         ```bash
         cd src
        ```
    *   Configure MySQL in `src/main/resources/application.properties`:
         ```properties
         spring.datasource.url=jdbc:mysql://localhost:3306/ems?createDatabaseIfNotExist=true
         spring.datasource.username=root
         spring.datasource.password=root
         ```

        > Ensure that you have a MySQL database named `ems` running on your machine and update the database username and password accordingly.
    *   Run the backend application using the Maven Wrapper:
        ```bash
        ./mvnw spring-boot:run
        ```
        or
        ```bash
        ./mvnw.cmd spring-boot:run
        ```

        > The backend server will start on port 9000.

3.  **Set up the Frontend (React):**

    *   Navigate to the frontend directory:
        ```bash
        cd ../ems-frontend
        ```
    *   Install dependencies:
        ```bash
        npm install
        ```
    *   Start the React development server:
        ```bash
        npm run dev
        ```
        > The frontend will be available at http://localhost:3000.

4.  **Access the Application:**

    Open your web browser and navigate to http://localhost:3000 to access the Employee Management System.

## API Endpoints

The backend exposes the following REST API endpoints:

*   `GET /api/employees`: Get all employees.
*   `GET /api/employees/{id}`: Get an employee by ID.
*   `GET /api/employees/email/{email}`: Get an employee by email.
*   `POST /api/employees`: Create multiple new employees.
*   `POST /api/employee`: Create a new employee.
*   `PUT /api/employees`: Update an existing employee.
*    `PATCH /api/employees/{id}`: Update an existing employee by ID.
*   `DELETE /api/employees/{id}`: Delete an employee by ID.

## Contributing

If you wish to contribute to this project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them.
4.  Push your branch to your forked repository.
5.  Create a pull request.

## License

This project is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)

## Contact

If you have any questions or suggestions, feel free to contact the repository yuke.
