import axios from "axios";

const http = axios.create({
  baseURL: "https://icanhazdadjoke.com"
});

const headers = {
    headers: {
        "Accept": "text/plain",
    }
}

export default {
    getRandmJoke() {
        return http.get('', headers);
    }
}