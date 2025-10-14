import axios from "axios";

export default  {
    getCollectionItems(searchTerm) {
        return axios.get(`https://images-api.nasa.gov/search?q=${searchTerm}`);
    }
};