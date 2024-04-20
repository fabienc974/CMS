module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET',['jP8pb1lYsrewxhA==,34xnLMYHY5jiU7ONTstTqQAhnmURa==']),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT',['jP8pb1lYsAhnmURarewxhA==,34xnLMYHY5jiU7ONTstTqQ==']),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
