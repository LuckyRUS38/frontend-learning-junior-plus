const createPost = async (post) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json',
    },
  });
  if (!response.ok) throw new Error(`Status: ${response.status} - Failed to create post`);
  console.log(response.status);
  return response.json();
}

const putPost = async (post) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
    method: 'PUT',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json',
    },
  });
  if (!response.ok) throw new Error(`Status: ${response.status} - Failed to update post`);
  console.log(response.status);
  return response.json();
}

const deletePost = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error(`Status: ${response.status} - Failed to delete post`);
  console.log(response.status);
  return response.json();
}

async function main() {
  const created = await createPost({ title: '1', id: 1 });
  console.log("POST:", created.id, "(создан)");

  const updated = await putPost({ id: 1, title: '12' });
  console.log("PUT: обновлён");

  await deletePost(1);
  console.log("DELETE: удалён");
}

main().catch((error) => console.error("Ошибка:", error.message));
