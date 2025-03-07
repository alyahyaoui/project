const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
exports.register = async (req, res) => {
  const { nom, prenom, email, adresse, cin, numero, motDePasse, role } = req.body;
  try {
    const newUser = new User({
      nom,
      prenom,
      email,
      adresse,
      cin,
      numero,
      motDePasse,
      role,
    });

    //   check if the email exist
    const searchedUser = await User.findOne({ email });

    if (searchedUser) {
      return res.status(400).send({ msg: "l'email existe deja" });
    }

    // hash password
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(motDePasse, genSalt);
    console.log(hashedPassword);
    newUser.motDePasse = hashedPassword;
    // save the user
    const newUserToken = await newUser.save();
    // generate a token
    const payload = {
      _id: newUserToken._id,
      nom: newUserToken.nom,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600,
    });
    res.status(200).send({
      user: newUserToken,
      msg: "l'utilisateur est sauvgarder avec succee",
      token: ` Bearer ${token}`,
    });
  } catch (error) {
    console.clear();
    console.dir(error);
    res.status(500).send({ msg: "l'utilisateur n'a pas etait sauvgarder" });
  }
};
exports.login = async (req, res) => {
  const { email, motDePasse } = req.body;
  try {
    //   find if the user exist
    const searchedUser = await User.findOne({ email });
    // if thhe email not exist
    if (!searchedUser) {
      return res.status(400).send({ msg: "verifier l'un des données saisie" });
    }
    // password are equals
    const match = await bcrypt.compare(motDePasse, searchedUser.motDePasse);

    if (!match) {
      return res.status(400).send({ msg: "verifier l'un des données saisie" });
    }
    // generate a token
    const payload = {
      _id: searchedUser._id,
      nom: searchedUser.nom,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600,
    });
    // send the user
    res
      .status(200)
      .send({ user: searchedUser, msg: "success", token: ` Bearer ${token}` });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "l'operation a echouer" });
  }
};
exports.current = (req, res) => {
  res.status(200).send({ user: req.user });
};

//edit profile
//exports.update = async (req, res) => {
  //const errors = validationResult(req);
  //if (!errors.isEmpty()) {
  //  return res.status(400).send({ errors: errors.array() });
  //}

  //const { nom, prenom, email, adresse, cin, numero, role } = req.body;

  //const profileFields = {};

  //if (email) profileFields.email = email;
  //if (nom) profileFields.nom = nom;
  //if (prenom) profileFields.prenom = prenom;
  //if (numero) profileFields.numero = numero;
  //if (adresse) profileFields.adresse = adresse;
  //if (cin) profileFields.cin = cin;
  //if (role) profileFields.role = role;

  //try {
    // See if user exists
    //let user = await User.findOne({ user: req.email });
   // if (user) {
     // user = await User.findOneAndUpdate(
       // { user: req.email },
       // {
       //   $set: profileFields,
      //  },
      //  { new: true }
     // );
     // return res.user;
   // }
  //} catch (err) {
  //  res.status(500).send("Server error");
 // }
//};

//logout

exports.logout = (req, res) => {
    res.status(200).send({ user: req.logout() });
  };

  //Get all user 

exports.getusers = async (req, res) => {
  try {
    let result = await User.find();
    res.status(200).send({ response: result, message: "Getting users successfully" });
  } catch (error) {
    res.status(500).send({ message: "les utilisateurs nont pas etait afficher" });
  }
};

// get user by id

exports.getuserById=async (req, res) => {
  try {
    let result = await User.findById( req.params.id );
    res.status(200).send({
      response: result,
      message: "Got the desired user successfullY !",
    });
  } catch (e) {
    res.status(500).send({ message: "there is no user with this id !" });
  }
}

//delete user by id

exports.deleteuser = async (req, res) => {
  try {
    let result = await User.deleteOne({ _id: req.params.id });
   result ? res.status(200).send({ response: result, message: "votre user a etait supprimer" }):
   res.status(500).send({ message: "il y a pas de user avec cette id" });
  } catch (error) {
    res.status(500).send({ message: "il y a pas de id" });
  }
};

//Update a user by id
exports.updateUser=async (req, res) => {
  try {
    const result = await User.updateOne({ _id: req.params.id },{$set:{...req.body}});
    result.dModified? res.status(200).send({
      message: "deja modifier !",
    }):res.send({message:"Updated the desired user successfully !"});
  } catch (e) {
    res.status(500).send({ message: "there is no user with this id !" });
  }
}