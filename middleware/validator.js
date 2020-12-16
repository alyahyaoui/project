const { check, validationResult } = require("express-validator");

// validation register
exports.registerRules = () => [
  check("nom", "le nom est obligatoire").notEmpty(),
  check("prenom", "le prenom est obligatoire").notEmpty(),
  check("email", "l'email est obligatoire").notEmpty(),
  check("email", "verifier votre email").isEmail(),
  check("cin", "la cin est obligatoire").notEmpty(),
  check("cin", "la cin doit avoir minimum 8 chiffres").isLength({
    min: 8,}),
  check("motDePasse", "le mot de passe est obligatoire").isLength({
    min: 6,
    max: 20,
  }),
  check("numero","le numero doit avoir minimum 8 chiffres").isLength({
    min: 8,
  }),
];

// validation login
exports.loginRules = () => [
  check("email", "l'email est obligatoire").notEmpty(),
  check("email", "verifier votre email").isEmail(),
  check(
    "motDePasse",
    "le mot de passe doit etre compris entre 8 et 20 characteres"
  ).isLength({
    min: 8,
    max: 20,
  }),
];
// validation post pub

exports.pubRules = () => [
  check("titre", "le titre est obligatoire").notEmpty(),
  check("description", "la discription est obligatoire").notEmpty(),
  check("prix", "le prix est obligatoire").notEmpty(),];

exports.validation = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array().map((el) => ({
        msg: el.msg,
      })),
    });
  }
  next();
};

