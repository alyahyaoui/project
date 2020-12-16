const Pub =require("../models/Pub");

exports.pub = async (req, res) => {
    const { titre,description,prix } = req.body;
    try {
      const newPub = new Pub({
        titre,description,prix
      });
    
      // save the pub
      const newPube = await newPub.save();

      res.status(200).send({
        pub: newPube,
        msg: "la publication est sauvgarder avec succee",
      });
    } catch (error) {
      console.clear();
      console.dir(error);
      res.status(500).send({ msg: "la publication n'a pas etait sauvgarder" });
    }
  };
 

  exports.ALLPub = (req, res) => {
    res.status(200).send({ pub: req.body });
  };