function logout () {
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
}

export default logout