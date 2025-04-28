const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    console.log("Post title: ", response.data.title);
  })
  .catch((error) => console.log("Error: ", error));
