const { getUserId } = require('../../utils');

const getAllUsers = (root, args, ctx, info) => ctx.db.query.users({}, info);

const getUserById = (root, args, ctx, info) => {
  const userId = getUserId(ctx);

  return ctx.db.query.user({ where: { id: userId } }, info);
};

module.exports = {
  getAllUsers,
  getUserById
};
