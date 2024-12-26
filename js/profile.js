function editInfo() {
    document.querySelectorAll('span').forEach(span => span.style.display = 'none');
    document.querySelectorAll('input, select').forEach(input => input.style.display = 'block');
    document.querySelector('.edit-btn').style.display = 'none';
    document.querySelectorAll('.save-btn, .cancel-btn').forEach(btn => btn.style.display = 'inline-block');
}

function saveInfo() {
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const gender = document.getElementById('gender-input').value;
    const address = document.getElementById('address-input').value;
    const dob = document.getElementById('dob-input').value;

    document.getElementById('name-display').textContent = name;
    document.getElementById('email-display').textContent = email;
    document.getElementById('gender-display').textContent = gender;
    document.getElementById('address-display').textContent = address;
    document.getElementById('dob-display').textContent = dob;

    cancelEdit();
}

function cancelEdit() {
    document.querySelectorAll('span').forEach(span => span.style.display = 'block');
    document.querySelectorAll('input, select').forEach(input => input.style.display = 'none');
    document.querySelector('.edit-btn').style.display = 'inline-block';
    document.querySelectorAll('.save-btn, .cancel-btn').forEach(btn => btn.style.display = 'none');
}