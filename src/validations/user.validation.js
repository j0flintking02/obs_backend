const Joi = require('joi');
const { password, verificationStatus } = require('./custom.validation');

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid('user', 'admin'),
  })
};

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string()
  })
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.required()
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      profileImage: Joi.string(),
      firstName: Joi.string(),
      lastName: Joi.string(),
      dob: Joi.string(),
      age: Joi.string(),
      nationality: Joi.string(),
      maritalStatus: Joi.string(),
      gender: Joi.string(),
      documentId: Joi.string(),
      documentImage: Joi.string(),
    })
    .min(1),
};
const updateVerification = {
  params: Joi.object().keys({
    userId: Joi.required(),
  }),
  body: Joi.object()
    .keys({
      verificationStatus: Joi.string().custom(verificationStatus),
    })
    .min(1),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string()
  })
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  updateVerification
};
