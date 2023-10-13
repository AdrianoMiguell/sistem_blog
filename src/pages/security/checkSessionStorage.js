function checkSessionStorage() {
  let id = sessionStorage.getItem("id");
  let name = sessionStorage.getItem("name");
  let email = sessionStorage.getItem("email");

  if (id == undefined || name == undefined || email == undefined) {
    return false;
  } else {
    return true;
  }
}

export default checkSessionStorage;
