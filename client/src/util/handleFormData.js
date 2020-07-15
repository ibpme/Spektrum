const postFormUrl = "/api/postForm";

const SendFormData = {
  handleFormData(formData) {
    console.log(formData);
    return fetch(postFormUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .catch((error) => {
        console.log(error);
        return {
          status: false,
        };
      });
  },
};

export default SendFormData;
