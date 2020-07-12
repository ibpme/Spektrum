const postUserUrl = "http://localhost:5000/api/postUser";
const checkUserUrl = "http://localhost:5000/api/checkUser";

const SendUserData = {
  handleUserData(userData) {
    //Check if email/userdata is a duplicate in the database
    return fetch(checkUserUrl, {
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
          return fetch(postUserUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          })
            .then((createUser) => createUser.json())
            .then((checkCreated) => {
              console.log(checkCreated);
              return checkCreated;
            })
            .catch((err) => {
              console.log(err);
              return {
                status: "Cannot create user data !",
                created: false,
              };
            });
        } else {
          return {
            status: "User already exist !",
            created: false,
          };
        }
      })
      .catch((err) => {
        console.log(err);
        return {
          status: "Cannot get user information !",
          created: false,
        };
      });
  },
};

export default SendUserData;
