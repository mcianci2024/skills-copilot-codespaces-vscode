
// Create web Server with express
const express = require('express');
const app = express();
const port = 3000;

// Import the comment module
const comment = require('./comment');

// Create a new comment
app.get('/comment', (req, res) => {
  res.send(comment.create(req.query.message));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Path: comment.js
// Create a new comment
function create(message) {
  return `New comment: ${message}`;
}

// Export the create function
module.exports.create = create;
```
Run the server and access it with the following command:
```bash
node comment.js
```
```bash
curl http://localhost:3000/comment?message=Hello
```
You should see the following output:
```bash
New comment: Hello
```
### 4.2.3. Exporting Multiple Functions
You can export multiple functions from a module by adding them to the `module.exports` object. Here's an example:
```javascript
// Path: math.js
// Export multiple functions
module.exports = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  }
};
```
You can import multiple functions from the module by using the `require` function. Here's an example:
```javascript
// Path: app.js
// Import the math module
const math = require('./math');

// Use the functions from the math module
console.log(math.add(2, 3));
console.log(math.subtract(5, 2));
```
Run the server and access it with the following command:
```bash
node app.js
```
You should see the following output:
```bash
5
3
```
### 4.2.4. Exporting an Object
You can export an object from a module by assigning it to `module.exports`. Here's an example:
```javascript
// Path: person.js
// Export an object
module.exports = {
  name: 'John',
  age: 30,









