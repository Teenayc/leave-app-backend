
const user = {
    username:"user1",
    email:"user1@mail.com",
    password:"P4ssword"
}

const findByEmail = async (email) => {
    return await user.findOne({where: {email: email}});
}
  
module.exports = {
    // create,
    // getUsers,
    // getUser,
    findByEmail
}