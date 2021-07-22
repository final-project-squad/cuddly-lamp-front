//function get user to send token, fetch and return user
const getUser = async (setUser,setUserAdmin) => {
  if (localStorage.getItem("MyToken")) {
    const response = await fetch(`https://cuddly-lamp-back.herokuapp.com/user`, {
      method: "GET",
      headers: { Authorization: `bearer ${localStorage.getItem("MyToken")}` },
    });
    const data = response.json();

    data.then(function (result) {
      if (result != null) {
        setUser(result.name);
        setUserAdmin(result.userAdmin);
      }
    });
  }
};

export default getUser;
