const { v4: uuid } = require('uuid');

const users = [
  {
    id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
    firstName: 'John',
    lastName: 'Black',
    age: 40,
  },
  {
    id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bec',
    firstName: 'Sara',
    lastName: 'White',
    age: 30,
  },
  {
    id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4beb',
    firstName: 'Sam',
    lastName: 'Smith',
    age: 20,
  }
];

exports.getUsers = (req, res) => {
  res.status(200).json({ success: true, data: users });
}

exports.getUser = (req, res) => {
  const userId = req.params.id;
  const user = users.find(item => item.id === userId);

  if (!user) {
    return res.status(404).json({ success: false, message: `User not found with id ${userId}` });
  }

  res.status(200).json({ success: true, data: user });
}


exports.createUser = (req, res) => {
  const newUser = { ...req.body, id: uuid() };

  users.push(newUser);

  res.status(201).json({ success: true, data: newUser });
}

exports.updateUser = (req, res) => {
  const userId = req.params.id;
  const user = users.find(item => item.id === userId);

  if (!user) {
    return res.status(404).json({ success: false, message: `User not found with id ${userId}` });
  }

  const updatedUser = { ...user, ...req.body };

  users.forEach(item => {
    if (item.id === userId) {
      item = updatedUser;
    }
  });

  res.status(200).json({ success: true, data: updatedUser });
}


exports.deleteUser = (req, res) => {
  const userId = req.params.id;
  const userIndex = users.findIndex(item => item.id === userId);

  if (userIndex < 0) {
    return res.status(404).json({ success: false, message: `User not found with id ${userId}` });
  }

  users.splice(userIndex, 1);

  res.status(200).json({ success: true, data: {} });
}
