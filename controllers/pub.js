const Pub = require("../models/Pub");

// post pub

exports.pub = async (req, res) => {
  const { titre, description, prix,photo } = req.body;
  try {
    const newPub = new Pub({
      titre,
      description,
      prix,
      photo
    });

    // save the pub
    const newPube = await newPub.save();

    res.status(200).send({
      pub: newPube,
      message: "la publication est sauvgarder avec succee",
    });
  } catch (error) {
    console.clear();
    console.dir(error);
    res.status(500).send({ message: "la publication n'a pas etait sauvgarder" });
  }
};

//Get all pub 

exports.getpubs = async (req, res) => {
  try {
    let result = await Pub.find();
    res.status(200).send({ response: result, message: "Getting pubs successfully" });
  } catch (error) {
    res.status(500).send({ message: "les publications nont pas etait afficher" });
  }
};
//Get a pub by id 

exports.getpubById=async (req, res) => {
  try {
    const result = await Pub.findById( req.params.id );
    res.status(200).send({
      response: result,
      message: "Got the desired pub successfullY !",
    });
  } catch (e) {
    res.status(500).send({ message: "there is no pub with this id !" });
  }
}

// Get searshed pub
exports.getsearchPub = async (req, res) => {
  try {
    let result = await Pub.find({searched : req.params.titre});
    res.status(200).send({ response: result, message: "Getting pubs successfully" });
  } catch (error) {
    res.status(500).send({ message: "les publications nont pas etait afficher" });
  }
};

//delete pub by id
exports.deletePub = async (req, res) => {

  try {
    let result = await Pub.deleteOne({ _id: req.params.id });
   result ? res.status(200).send({ response: result, message: "votre pub a etait supprimer" }):
   res.status(500).send({ message: "il y a pas de pub avec cette id" });
  } catch (error) {
    res.status(500).send({ message: "il y a pas de id" });
  }
};

//Update a pub by id
exports.updatePub=async (req, res) => {
  try {
    const result = await pub.updateOne({ _id: req.params.id },{$set:{...req.body}});
    result.dModified? res.status(200).send({
      message: "Updated the desired pub successfully !",
    }):res.send({message:"The pub is already updated !"});
  } catch (e) {
    res.status(500).send({ message: "there is no pub with this id !" });
  }
}