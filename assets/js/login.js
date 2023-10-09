document.getElementById('submit-btn').addEventListener('click',function(){
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    // emailField.value =('')
    const passwordField = document.getElementById('password-field')
    const password = passwordField.value;
    // passwordField.value =('')
   if(email == 'karim@.com' && password == 'karim'){
  window.location.href ='index.html';
   }
   else{
    alert('Pleas enter your valid password');
   }
})