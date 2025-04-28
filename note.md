**HTTP Requests**

- Hypertext transfer protocol. It is typically on port 80
- It is the basic way browsers and servers communicate.
- HTTP is stateless every request is independent.

# HTTP methods:

- There are a lot of HTTP methods out there but in this lecture we are only focusing on GET (Simply retrieving information) and POST (Simply putting information externally).
- HTTP usually has the request and response.
  Method | What it does
  GET /video/123 | Fetch video 123's details
  POST /video | Upload a new video
  PUT /video/123 | Replace video 123 completely
  PATCH /video/123 | Change video 123's title only
  DELETE /video/123 | Delete video 123

# HTTP Requests:

When you visit a website (like youtube.com),
your browser creates an HTTP Request that says:
Method → GET (asking for data)
URL → / (the home page)
Headers → Information like what browser you are using
Body → (None for GET)

- The Method + URL (uniform resource locator - it tells what you are asking for) + Headers (text/html) + Body (for get the body is none).
- are the 4 key pieces the server looks at.

# HTTP Response Body:

- For the request that was sent from the client the server should have a response mist likely in the firm of JSON.
- It is the response sent by the server for the request sent by the client.
- E.g request and response:
  ASK:

  ```js
  GET / video / 123;
  ```

  The response:

  ```js
  {
  "title": "Funny Video",
  "description": "This video is very funny!",
  "likes": 124,
  "comments": []
  }

  ```

# Status Codes:

- A developer should always verify that there is a valid response code and it is dependant on the API you are trying to communicate.

Table With some status codes:
Code | Meaning
200 | OK (Success ✅)
201 | Created (New resource made ✅)
400 | Bad Request (You made a mistake ❌)
401 | Unauthorized (You must log in ❌)
404 | Not Found (Server can't find it ❌)
500 | Server Error (Server crashed ❌)

In addition:

Starts With | Means
2xx | Success ✅
4xx | Client made mistake ❌
5xx | Server problem ❌

# Networking Node Modules

- Networking node modules are libraries that helps you talk to other computers, servers or APIs. Which make it easy to send, request, receive data.

- Examples of common Networking Node modules
  Module | What it does
  http | Native Node.js module to create a basic server (no need to install)
  https | Same as http, but secure with SSL
  axios | Send HTTP requests easily (GET, POST, etc.)
  node-fetch | Lightweight way to send HTTP requests
  express | Framework for building bigger servers easily

- Some are build into Node: http, https
- Some are installed separately: axios, express, request

# Promised based network requests:

- A promise like using fetch and axios is returning a promise saying i will give you the return later not right now but promise to give you the result failure or success later.
- Without promise the user would have to pause and wait because the code would be frozen.

# Fetch

- Built in browser

```js
fetch("https://api.example.com/data")
  .then((response) => response.json()) // first .then() after response arrives
  .then((data) => console.log(data)) // second .then() after parsing JSON
  .catch((error) => console.error("Error:", error)); // catch any errors
```

What's happening step-by-step:

- fetch() starts the network request and returns a Promise immediately.
- .then(response => response.json()) waits for the server to respond, then turns the response into usable JSON.
- .then(data => console.log(data)) waits for the JSON parsing to finish, then prints the data.
- .catch(error => console.error('Error:', error)) will run if something goes wrong at any step.

# Axios

import axios from 'axios';

```js
axios
  .get("https://api.example.com/data")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

What's happening here:

- axios.get() starts the request and returns a Promise.
- .then(response => {...}) runs when the request succeeds.
- .catch(error => {...}) runs if the request fails.
- With axios, the response already has JSON parsed for you!
  (No need for response.json() like in fetch.)

# oAuth and Tokens

- OAuth (Short for Open Authorization) is a system that allows secure access to resources without sharing passwords.So it is like giving a website your password you give it a special permission slip. For instance, google would give a website a token instead of your password to access their website.

- oAuth is the standard for open authorization on the internet.
