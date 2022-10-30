import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "../common/spinner/Spinner";
import UserCard from "./UserCard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseUrl = "https://randomuser.me/api/?results=108";

const User = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const res = await axios.get(baseUrl);
    setUserData(res.data.results);
    setLoading(false);
    toast.success("User fetch successfully");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {!loading ? <UserCard data={userData} /> : <Spinner />}
      <ToastContainer />
    </>
  );
};

export default User;
