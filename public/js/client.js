'use strict';

$(function () {
  var $main = $('main');
  $('.register').on('click', showRegisterForm);

  function showRegisterForm(e) {
    if (event) event.preventDefault();
    $main.html('\n      <h2>Register</h2>\n      <form method="post" action="/api/register">\n      <div class="form-group">\n      <input class="form-control" name="username" placeholder="Username">\n      </div>\n      <div class="form-group">\n      <input class="form-control" name="email" placeholder="Email">\n      </div>\n      <div class="form-group">\n      <input class="form-control" type="password" name="password" placeholder="Password">\n      </div>\n      <div class="form-group">\n      <input class="form-control" type="password" name="passwordConfirmation" placeholder="Password Confirmation">\n      </div>\n      <button class="btn btn-primary">Register</button>\n      </form>\n      ');
  }
});
