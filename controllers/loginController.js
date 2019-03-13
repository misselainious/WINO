const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');

module.exports = {
  // INstantiating the express-jwt middleware
  loginPost: function(req, res) {
    const jwtMW = exjwt({
      secret: 'keyboard cat 4 ever'
    });
    let users = [
      {
          id: 1,
          username: 'test',
          password: 'asdf123'
      },
      {
          id: 2,
          username: 'test2',
          password: 'asdf12345'
      }
    ];
    const { username, password } = req.body;
    console.log("user" , username);
    // Use your DB ORM logic here to find user and compare password
    
    // Finds first username and password match in users array (assumes usernames are unique)
    var user = users.find(u => username == u.username && password == u.password);
    if (user) { // User credentials matched (are valid)
        let token = jwt.sign({ id: user.id, username: user.username }, 'keyboard cat 4 ever', { expiresIn: 129600 }); // Sigining the token
        res.json({
            sucess: true,
            err: null,
            token
        });
    } else { // User credentials did not match (are not valid) or no user with this username/password exists
        res.status(401).json({
            sucess: false,
            token: null,
            err: 'Username or password is incorrect'
        });
    }
  }
};