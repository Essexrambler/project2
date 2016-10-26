
$(() => {
  let $main = $('main');
  $('.register').on('click', showRegisterForm);


  function showRegisterForm(e) {
    if (event) event.preventDefault();
    $main.html(`
      <h2>Register</h2>
      <form method="post" action="/api/register">
      <div class="form-group">
      <input class="form-control" name="username" placeholder="Username">
      </div>
      <div class="form-group">
      <input class="form-control" name="email" placeholder="Email">
      </div>
      <div class="form-group">
      <input class="form-control" type="password" name="password" placeholder="Password">
      </div>
      <div class="form-group">
      <input class="form-control" type="password" name="passwordConfirmation" placeholder="Password Confirmation">
      </div>
      <button class="btn btn-primary">Register</button>
      </form>
      `);


    }
  });
