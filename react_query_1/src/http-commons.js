import axios from "axios";

// 공통기반 => 서버 연동
export default axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json"

    }
})