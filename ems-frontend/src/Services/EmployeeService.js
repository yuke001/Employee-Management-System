import axios from "axios";

const REST_API_BASE_URL = "http://localhost:9000/api/employees";



export const listEmployees = () => axios.get(REST_API_BASE_URL); // get all employees

listEmployees().then(response => console.log(response.data));