import axios from'axios'
const KEY = "IzaSyBRD4BgOUBprJFw9819VIa-0fA991KADv0";

export default axios.create({
    baseURL: "http://www.googleapis.com /youtube/v3",
    params : {
        part: 'snippet';
        maxResult: 5,
        type: 'video',
        key : KEY
    }
});