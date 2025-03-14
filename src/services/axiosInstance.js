import axios from "axios";
import Swal from "sweetalert2";

const axiosInstance = axios.create({
    baseURL : 'http://localhost:3000',
    timeout : 10000,
    headers : {
       'Content-Type' : 'application/json' 
    }
})

axiosInstance.interceptors.response.use(
    (response)=> response.data,
    (error)=>{
        if(error.code == "ERR_NETWORK"){
            Swal.fire('network error')
            return;
        }else if (error.response.status == 404){
            Swal.fire('Api not found')
            return;
        }
        else if(error.response.status == 500){
            Swal.fire('Server.error')
            return;
        }else if(error.response.data ){
            return  Promise.reject(error.response.data)
        }
    }
)


export default axiosInstance