

var contacts = [];

function addContact() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;

    if (name && phone) {
        contacts.push({ name: name, phone: phone });
        updateContactList();
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function updateContactList() {
    var table = document.getElementById('contact-list');
    table.innerHTML = '';

    contacts.sort(function(a, b) {
        return a.name.localeCompare(b.name);
    });

    for (var i = 0; i < contacts.length; i++) {
        var newRow = table.insertRow(-1);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        cell1.innerHTML = contacts[i].name;
        cell2.innerHTML = contacts[i].phone;
    }
}
