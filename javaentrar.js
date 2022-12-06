function Entrar(){
var login = document.getElementById('login').value;
var senha = document.getElementById('senha').value;

if(login == 'shelter' && senha == 'zone'){
  window.location.href='poslogin.html';
}else{
    alert('Usuario ou senha incorretos');
}
}
