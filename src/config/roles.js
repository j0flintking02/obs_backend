const allRoles = {
  user: [],
  admin: ['getUsers', 'manageUsers', 'checkAccount', 'updateVerification'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
