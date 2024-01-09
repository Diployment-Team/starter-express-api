const Joi = require("joi");

const AllSuperAnnuationSchema = (AllSuperAnnuation) => {
  const schema = Joi.object({
    // id: Joi.number().min(1).max(5000000000).required(),
    Email: Joi.string().min(1).max(5000000000).required(),
    AreaOfAdvice: Joi.string().min(1).max(5000000000).required(),
    When: Joi.string().min(1).max(5000000000).required(),
    EstimatedAmount: Joi.number().min(1).max(5000000000).required(),
    Description: Joi.string().min(1).max(5000000000).required(),
  });
  return schema.validate(AllSuperAnnuation);
};

module.exports = AllSuperAnnuationSchema;