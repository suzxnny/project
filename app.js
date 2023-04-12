const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector('#greeting');

function onLoginSubmit(e) {
  e.preventDefault();

  const username = loginInput.value;
  loginForm.classList.add("hidden");
  greeting.innerText= `안녕하세요, ${username}님!`;
  greeting.classList.remove("hidden");
}

loginForm.addEventListener("submit", onLoginSubmit);
