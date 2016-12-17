import React from 'react';

module.exports = React.createClass({
          render: function() {
              return (
                <div >
                  <form action="/signup" method="post">
                      <div className="container">
                        <label><b>Username</b></label>
                         <input type="text" placeholder="Enter Username" name="username" required/>

                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" required/>
                          
                        <label><b>Password Confirmation</b></label>
                        <input type="password" placeholder="Confirm Password" name="confirm_password" required/>

                        <button type="submit">Register</button>
                      </div>

                    </form>
                </div>
              );
            }
        });