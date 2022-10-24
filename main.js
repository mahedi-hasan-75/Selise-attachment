function inputChange() {
    inputValue = document.querySelector('input[type="text"]')
    var note = document.getElementById('note')
    note.textContent = inputValue.value
    inputValue.value = ''
}
