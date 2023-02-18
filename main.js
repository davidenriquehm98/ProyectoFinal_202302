
function runProgram () {
  alert(`
    David Enrique Hernández Macajola
    CARNE: 23001604
  `)
}

function setEvent () {
  var buttonElement = document.getElementById('actionButton')
  if (buttonElement != null) {
    buttonElement.onclick = runProgram
  }
}

setEvent()