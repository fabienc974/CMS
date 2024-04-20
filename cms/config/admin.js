module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET',['a5d5dfabb9086d13fc10e933fffcdd86']),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT',['9a75601ca5560f64d5d92bc0cb6a55c32308f5d0']),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT',['4f698f15e554a1674ce00f1026a161b4']),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
