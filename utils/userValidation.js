const joi = require("joi");

const signupValidator = {
  body: joi
    .object()
    .required()
    .keys({
      first_name: joi
        .string()
        .required()
        .pattern(new RegExp(/[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{2,10}$/))
     ,
     last_name: joi
     .string()
     .required()
     .pattern(new RegExp(/[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{2,10}$/))
  ,
      email: joi.string().email().required(),
      phone:joi.string().required().pattern(new RegExp(/^(010|011|012)[0-9]{8}$/)),
      password: joi
        .string()
        .required()
        .pattern(
          new RegExp(/^[A-Z][a-z0-9]{3,8}$/)
        ),
        role: joi.string()
    }),
};
const signinValidator = {
  body: joi
    .object()
    .required()
    .keys({
      email: joi.string().email().required(),
      password: joi
        .string()
        .required()
        .pattern(
          new RegExp(/^[A-Z][a-z0-9]{3,8}$/)
        ),
    }),
};
module.exports = { signupValidator, signinValidator };
