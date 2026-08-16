const getUser = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!response.ok) throw new Error(`Status: ${response.status} - Failed to fetch user`);
  return response.json();
};

getUser(99999999).catch((e) => {
  console.error(e);
})
