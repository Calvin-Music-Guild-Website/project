import React from 'react';

module.exports = React.createClass({
render: function() {
  return (
    <div className="register" id="reg" >
      <form action="/signup" method="post">
          <div className="container">
            <label><b>Username</b></label>
             <input type="text" placeholder="Enter Username" name="username" required/>

            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" id="password" name="password" required/>

            <label><b>Password Confirmation</b></label>
            <input type="password" placeholder="Confirm Password" id="password_confirmation" onKeyUp="checkPass(); return false;"  name="password_confirmation" required/>
              <br/><span id="confirmMessage" className="confirmMessage"></span>


            <button type="submit">Register</button>
          </div>


        </form>
    </div>
  );
}
});

