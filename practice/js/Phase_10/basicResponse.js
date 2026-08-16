const getUser = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await response.json();
  return data;
};

Promise.all([getUser(1), getUser(2), getUser(3)])
  .then((users) => {
    users.forEach((user, index) => {
      console.log(`User ${index + 1}: ${user.name}, ${user.email}`)
    });
    console.table(users.map((user) => ({ name: user.name, email: user.email })));
  });
