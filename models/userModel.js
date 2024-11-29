const users = [
    { name: 'Farid', age: 30 },
    { name: 'Tai', age: 25 },
  ];
  
  exports.fetchAll = () => {
    return users;
  };
  
  exports.addUser = (newUser) => {
    users.push(newUser);
  };
  