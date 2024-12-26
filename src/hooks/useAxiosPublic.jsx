import axios from "axios";


const axiosPublic = axios.create({
  baseURL: 'https://react-interview.crd4lc.easypanel.host'
})
const useAxiosPublic = () => {
  return axiosPublic;
}

export default useAxiosPublic;