const Joi = require("joi");

const validation_data = (data) => {
  const Schema = Joi.object().keys({
    admin_id: Joi.string().required(),
    skill_id: Joi.string().required(),
    english_title: Joi.string(),
    arabic_title: Joi.string(),
    english_description: Joi.string(),
    arabic_description: Joi.string(),
    created_at: Joi.string(),
  });

  // validate data
  const Error = Schema.validate(data);

  // check if the data has any error and return it
  if (Error.error) {
    return Error;
  } else {
    return true;
  }
};

module.exports = validation_data;
