var button = document.getElementById('button')
var label = document.getElementById('label')
var namex = document.getElementById('namex')

button.addEventListener('click', function (e) {
  label.textContent = namex.value.trim()
})
