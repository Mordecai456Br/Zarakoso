// Seleciona todos os checkboxes de "interesses"
const checkboxes = document.querySelectorAll('input[name="interesses"]');

// Para seleção múltipla:
function getCheckedValues() {
  return Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);
}

// Para seleção única:
function getSingleValue() {
  const selected = Array.from(checkboxes).find(cb => cb.checked);
  return selected ? selected.value : null;
}
