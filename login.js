(function(){
  const form = document.getElementById('loginForm');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const result = document.getElementById('result');
  const toggle = document.getElementById('togglePwd');

  toggle.addEventListener('click', () => {
    const isPwd = password.type === 'password';
    password.type = isPwd ? 'text' : 'password';
    toggle.textContent = isPwd ? 'Hide' : 'Show';
  });

  function showError(el, msg){ el.textContent = msg || ''; }

  form.addEventListener('submit', function(e){
    e.preventDefault();
    let ok = true;
    showError(emailError, '');
    showError(passwordError, '');
    result.textContent = '';

    if (!email.checkValidity()){
      showError(emailError, 'Please enter a valid email.');
      ok = false;
    }
    if (password.value.trim().length < 6){
      showError(passwordError, 'Password must be at least 6 characters.');
      ok = false;
    }

    if (!ok) return;

    // Simulate a login request (no backend). Replace with real API call.
    const btn = document.getElementById('submitBtn');
    btn.disabled = true;
    btn.textContent = 'Signing in...';

    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = 'Sign in';
      result.textContent = 'Signed in (demo).';
      form.reset();
    }, 900);
  });
})();
