import { Link } from "react-router-dom";
import customFetch from "../../service/api";
import { useState } from "react";

const Home = () => {
  const [responseData, setResponseData] = useState("Initial Content");


  const get = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await customFetch
        .get(
          `/auth/data/${token}`
        );
      // console.log(res.data);
      setResponseData(`name: ${res.data.name}  & email :${res.data.email}`);
      return;
    } catch (error) {
      console.log(error);
      alert(error?.response?.data?.msg);
      return error;
    }
  };
  return (
    <div>
      <div onClick={() => get()}>Home:</div>
      <div>{responseData}</div>

      <Link to='/complain'>Complain</Link>
    </div>
  );
};
export default Home;
