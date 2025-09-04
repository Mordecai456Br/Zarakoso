// Função genérica para capturar checkboxes selecionados
function getCheckedValues(name) {
    return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`))
        .map(cb => cb.value);
}

// Validação Interests (mínimo 1)
export function validarInterests() {
    const required = document.querySelector('#required-text-interests');
    const response = document.querySelector('#response-text-interests');
    const selected = getCheckedValues('interests');

    if (required.classList.contains("hidden")) {
        required.classList.remove("hidden");
        response.textContent = "";
    }

    if (selected.length < 1) {
        response.textContent = "Select at least 1 interest";
        return false;
    }

    response.textContent = "✅";
    required.classList.add("hidden");
    return true;
}

// Validação Personality (mínimo 1)
export function validarPersonality() {
    const required = document.querySelector('#required-text-personality');
    const response = document.querySelector('#response-text-personality');
    const selected = getCheckedValues('personality');

    if (required.classList.contains("hidden")) {
        required.classList.remove("hidden");
        response.textContent = "";
    }

    if (selected.length < 1) {
        response.textContent = "Select at least 1 personality trait";
        return false;
    }

    response.textContent = "✅";
    required.classList.add("hidden");
    return true;
}

// Validação Main Skill (exatamente 1)
export function validarMainSkill() {
    const required = document.querySelector('#required-text-skill');
    const response = document.querySelector('#response-text-skill');
    const selected = getCheckedValues('main-skill');

    if (required.classList.contains("hidden")) {
        required.classList.remove("hidden");
        response.textContent = "";
    }

    if (selected.length !== 1) {
        response.textContent = "Select exactly 1 main skill";
        return false;
    }

    response.textContent = "✅";
    required.classList.add("hidden");
    return true;
}

// Validação Favorite Food (mínimo 1)
export function validarFavoriteFood() {
    const required = document.querySelector('#required-text-food');
    const response = document.querySelector('#response-text-food');
    const selected = getCheckedValues('favorite-food');

    if (required.classList.contains("hidden")) {
        required.classList.remove("hidden");
        response.textContent = "";
    }

    if (selected.length < 1) {
        response.textContent = "Select at least 1 favorite food";
        return false;
    }

    response.textContent = "✅";
    required.classList.add("hidden");
    return true;
}
// Interests
document.querySelectorAll('input[name="interests"]').forEach(cb => {
    cb.addEventListener('change', validarInterests);
});

// Personality
document.querySelectorAll('input[name="personality"]').forEach(cb => {
    cb.addEventListener('change', validarPersonality);
});

// Main Skill
document.querySelectorAll('input[name="main-skill"]').forEach(cb => {
    cb.addEventListener('change', validarMainSkill);
});

// Favorite Food
document.querySelectorAll('input[name="favorite-food"]').forEach(cb => {
    cb.addEventListener('change', validarFavoriteFood);
});
