import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        // key:'c7b18323a47d40c394ea5b019646b1f5'
        key:'5fc905de06d44276825619397e680a52'
    }
})

