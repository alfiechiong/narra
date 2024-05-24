// data/users.js
import bcrypt from 'bcryptjs';

const users = [
  {
    id: '1',
    username: 'user1',
    password: bcrypt.hashSync('password1', 10), // hashed password
  },
  {
    id: '2',
    username: 'user2',
    password: bcrypt.hashSync('password2', 10), // hashed password
  },
];

export default users;
