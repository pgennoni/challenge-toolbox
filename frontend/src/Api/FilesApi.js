import axios from "axios"

const getFileList = () => {
    return axios.get('http://localhost:3000/files/data')
}

export default getFileList