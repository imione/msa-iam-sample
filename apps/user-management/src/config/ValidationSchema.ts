import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('production', 'stage', 'dev')
    .required(),
  SERVICE_ID: Joi.string().required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number()
    .positive()
    .integer()
    .required(),
  DB_USER: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_SCHEMA: Joi.string().required(),
});
