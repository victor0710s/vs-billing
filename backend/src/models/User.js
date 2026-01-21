const users = [];

class User {
  static async findByEmail(email) {
    return users.find(user => user.email === email) || null
  }

  static async create(data) {
    users.push({
      id: users.length + 1,
      ...data
    })
    console.log(users);
  }
}

export default User;