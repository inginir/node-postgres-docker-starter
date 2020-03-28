const initCrud = modelRefs => {
  const { Users } = modelRefs;
  const getAllUsers = () => Users.findAll();

  const createUser = (user = { firstName: "default", lastName: "default" }) =>
    Users.create(user);

  return { createUser, getAllUsers };
};

module.exports = { initCrud };
