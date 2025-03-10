const btnElement = document.querySelector('button');
const spanElement = document.getElementById('update');

btnElement.onclick = function() {
  const yourName = prompt("What's your name?");
spanElement.textContent = yourName;
}