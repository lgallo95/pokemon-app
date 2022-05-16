import axios from "axios";

export default axios.create({
    baseURL: "https://api.pokemontcg.io/v2/",
    headers: {
      "x-api-key": "af08500c-f6d1-491a-aa2a-75c980bb1e54"
    }
  });