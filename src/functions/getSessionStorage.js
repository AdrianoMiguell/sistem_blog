function getSessionStorage() {
  const id = sessionStorage.getItem("id");
  const name = sessionStorage.getItem("name");
  const email = sessionStorage.getItem("email");

  return { name, email, id };
}

export default getSessionStorage;
