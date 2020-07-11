const postUserUrl = "http://localhost:5000/api/postUser";
const checkUserUrl = "http://localhost:5000/api/checkUser";

const SendUserData = {
  handleUserData(userData) {
    //Check if email/userdata is a duplicate in the database
    fetch(checkUserUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((checkDuplicate) => {
        if (!checkDuplicate.duplicate) {
          console.log(checkDuplicate);
          fetch(postUserUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          })
            .then((createUser) => createUser.json())
            .then((checkCreated) => {
              return checkCreated.created;
            });
        } else {
          console.log("Duplicate User Exist");
          return false;
        }
      });
  },
};

export default SendUserData;
