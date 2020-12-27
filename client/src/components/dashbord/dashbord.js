import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { current } from "../../JS/actions/user";
const Dashbord = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(current());
  }, []);
  return <div>dashbord</div>;
};

export default Dashbord;
