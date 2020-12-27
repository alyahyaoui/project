import React from "react";
import PubList from "../../components/PubList";
import Filter from "../../components/Filter";
const Home = ({ searched, setSearched,loadpub,pubs }) => {
  return (
    <div>
      <Filter setSearched={setSearched} loadpub={loadpub}/>
      <PubList  pubs={pubs} searched={searched} />
    </div>
  );
};

export default Home;
