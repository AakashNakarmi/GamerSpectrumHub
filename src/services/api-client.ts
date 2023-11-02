import axios from "axios"
export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key: "76afdba3803042559695fe661e5249d9"
    }
})
