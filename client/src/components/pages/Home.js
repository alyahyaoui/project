import React from "react";
import PubList from "../PubList/PubList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { current } from "../../JS/actions/user";
import {getpubs} from "../../JS/actions/pub";


const Home = ({loadpub,pubs,match }) => {
  const searched = match.params.searched
  const dispatch = useDispatch()
  console.log(searched)
  useEffect(() => {
    dispatch(current());
    dispatch(getpubs(searched))
  }, [searched]);
  return (
    <div>
      <h1>Bienvenue à TuniHotes</h1>
      <p>cela est une intro au site</p>
      <PubList  pubs={pubs} loadpub={loadpub} />
    </div>
  );
};

export default Home;
