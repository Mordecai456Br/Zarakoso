document.addEventListener('DOMContentLoaded', () => {

    // ======== FUNÇÕES AUXILIARES ========
    function getCheckedValues(name) {
        return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`))
            .map(input => input.value);
    }

    // ======== VALIDAÇÃO DE NOME ========
    const nameInput = document.querySelector('#name-input-dinocat');
    const nameRequired = document.querySelector('#required-text-dinocat-name');
    const nameResponse = document.querySelector('#response-text-dinocat-name');

    function validarName() {
        const value = nameInput.value.trim();
        const cardName = document.querySelector('#dinocat-name-pet').textContent = value;
        if (!value || value.length < 3) {
            nameResponse.textContent = "Name must be at least 3 characters";
            nameRequired.classList.remove("hidden");
            return false;
        }

        nameResponse.textContent = "✅";
        nameRequired.classList.add("hidden");
        return true;
    }

    nameInput.addEventListener('input', validarName);

    // ======== VALIDAÇÃO DE CHECKBOXES ========
    const checkboxGroups = [
        { name: 'interests', requiredEl: document.querySelector('#required-text-dinocat-interests') },
        { name: 'personality', requiredEl: document.querySelector('#required-text-dinocat-personality') },
        { name: 'favorite-food', requiredEl: document.querySelector('#required-text-dinocat-favorite-food') }
    ];

    function validarCheckboxGroup(name, min = 1) {
        const selected = getCheckedValues(name);
        const responseEl = document.querySelector(`#response-text-${name}`);
        const requiredEl = checkboxGroups.find(g => g.name === name)?.requiredEl;

        if (!responseEl) {
            console.warn(`Elemento #response-text-${name} não encontrado no DOM.`);
            return false;
        }

        if (selected.length < min) {
            responseEl.textContent = `Selecione pelo menos ${min} opção${min > 1 ? 'es' : ''}.`;
            if (requiredEl) requiredEl.classList.remove("hidden");
            return false;
        }

        responseEl.textContent = "✅";
        if (requiredEl) requiredEl.classList.add("hidden");
        return true;
    }

    // Atualização em tempo real
    checkboxGroups.forEach(group => {
        document.querySelectorAll(`input[name="${group.name}"]`).forEach(input => {
            input.addEventListener('change', () => validarCheckboxGroup(group.name));
        });
    });

    // ======== VALIDAÇÃO DE MAIN SKILL ========
    const mainSkillRequired = document.querySelector('#required-text-dinocat-main-skill');
    function validarMainSkill() {
        const skills = getCheckedValues('main-skill');
        const responseSkill = document.querySelector('#response-text-main-skill');

        if (!responseSkill) {
            console.warn('Elemento #response-text-main-skill não encontrado no DOM.');
            return false;
        }

        if (skills.length !== 1) {
            responseSkill.textContent = "Selecione exatamente 1 habilidade principal.";
            if (mainSkillRequired) mainSkillRequired.classList.remove("hidden");
            return false;
        }

        responseSkill.textContent = "✅";
        if (mainSkillRequired) mainSkillRequired.classList.add("hidden");
        return true;
    }

    document.querySelectorAll(`input[name="main-skill"]`).forEach(input => {
        input.addEventListener('change', validarMainSkill);
    });

    // ======== SUBMIT ========
    const form = document.querySelector('#formPet');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const description = document.querySelector('#description-input-pet').value.trim();
        const interests = getCheckedValues('interests');
        const personality = getCheckedValues('personality');
        const skills = getCheckedValues('main-skill');
        const food = getCheckedValues('favorite-food');

        const isNameValid = validarName();
        const isInterestsValid = validarCheckboxGroup('interests');
        const isPersonalityValid = validarCheckboxGroup('personality');
        const isSkillValid = validarMainSkill();
        const isFoodValid = validarCheckboxGroup('favorite-food');

        if (isNameValid && isInterestsValid && isPersonalityValid && isSkillValid && isFoodValid) {
            const newPet = {
                name: nameInput.value.trim(),
                description,
                interests,
                personality,
                skills,
                food
            };
            console.log('Pet registrado com sucesso:', newPet);
            form.reset();

            // Reset visual dos campos
            nameRequired.classList.remove("hidden");
            nameResponse.textContent = "";

            checkboxGroups.concat([{ name: 'main-skill', requiredEl: mainSkillRequired }]).forEach(group => {
                const responseEl = document.querySelector(`#response-text-${group.name}`);
                if (responseEl) responseEl.textContent = "";
                if (group.requiredEl) group.requiredEl.classList.remove("hidden");
            });
        } else {
            console.log('Formulário inválido. Corrija os erros antes de enviar.');
        }
    });

});
