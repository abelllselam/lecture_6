fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! ${response.status}`);
    }
    return response.json();
  })
  .then((data) => console.log("Title of the post: ", data.title))
  .catch((error) => console.log(error));
