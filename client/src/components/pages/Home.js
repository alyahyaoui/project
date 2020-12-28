import React from "react";
import PubList from "../../components/PubList";
// import Filter from "../../components/Filter";
const Home = ({ searched, setSearched,loadpub,pubs }) => {
  return (
    <div>
      <h1>Bienvenue à TuniHotes</h1>
      <p>blablablablabla</p>
      {/* <Filter setSearched={setSearched} searched={searched} loadpub={loadpub}/> */}
      <PubList  pubs={pubs} loadpub={loadpub} />
    </div>
  );
};

export default Home;
