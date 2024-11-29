const users = [
    { name: 'Shalala', age: 30 },
    { name: 'Raqsana', age: 25 },
  ];
  
  exports.fetchAll = () => {
    return users;
  };
  
  exports.addUser = (newUser) => {
    users.push(newUser);
  };
  
