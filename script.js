function displayAbout(){
  var arrow= document.getElementById('animation');
  arrow.classList.toggle('rotate');
  var display = document.getElementById('texto');
  display.classList.toggle('active');

};
document.getElementById("enviar").addEventListener("click", function() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var mensagem = document.getElementById("mensagem").value;
  
  var link = "mailto:giovannarigolei@outlook.com.br"
             + "?subject=" + encodeURIComponent("Feedback do formulário")
             + "&body=" + encodeURIComponent("Nome: " + nome + "\n\n" + "Email: " + email + "\n\n" + "Mensagem: " + mensagem);
             
  window.location.href = link;
});