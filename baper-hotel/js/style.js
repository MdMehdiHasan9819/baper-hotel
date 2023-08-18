// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: ["./src/**/*.{html,js}"],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   }
// step-1:when submit button clicked than my surver add email address and password

document.getElementById('btn-event-hendler').addEventListener('click', function(){
  // step-2;get email address added
  const inputFieldEmail = document.getElementById('input-filed-email');
  const getEmail = inputFieldEmail.value;
  inputFieldEmail.value='';
  // step-3;get password
  const inputFieldPassword = document.getElementById('input-filed-password');
  const getPassWord = inputFieldPassword.value;
  inputFieldPassword.value='';

// email address or password valid or invalid;

if(getEmail === 'abcd@gmail.com' && getPassWord === 'mehdi' ){
  window.location.href='bank.html'
}
else{
  alert("invalid, please submit your email and password");
}

})
