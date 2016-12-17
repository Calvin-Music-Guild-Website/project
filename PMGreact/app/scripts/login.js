import React from 'react';

module.exports = React.createClass({
render: function() {
  return (
    <div className="login" >
      <form action="/login" method="post">
          <div className="imgcontainer">
          </div>

          <div className="container">
            <label><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="username" required/>

            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" required/>

            <button type="submit">Login</button>
            <input type="checkbox" checked="checked"/> Remember me
          </div>

          <div className="container" id="back">
            <button type="button" className="cancelbtn">Cancel</button>

          </div>
        </form>
    </div>
  );
}
});
