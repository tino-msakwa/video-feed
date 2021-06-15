import axios from "axios";
const KEY = "IzaSyBRD4BgOUBprJFw9819VIa-0fA991KADv0";

export default axios.create({
  baseURL: "http://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
