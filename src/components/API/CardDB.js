import axios from "axios";
const cardDBClient = axios.create({
	baseURL: "http://localhost:3002",
});
export default cardDBClient;
