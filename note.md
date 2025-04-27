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
