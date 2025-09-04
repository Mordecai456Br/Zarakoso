const modal = document.querySelector('#modal-1');
const button = document.querySelector('#openModal')
const okButton = document.querySelector('#closeModal');

button.onclick = function () {
    modal.showModal()
}
okButton.onclick = function () {
    modal.close()
}