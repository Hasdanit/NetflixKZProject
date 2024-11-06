let users = [
    { username: "Nurzhan", email: "nurzhan@gmail.com", password: "FCBarcelona11" },
    { username: "Alimkhan", email: "alimkhan@gmail.com", password: "Hasdanchik" },
    { username: "Almas", email: "almas@gmail.com", password: "Megumi" }
];

function loadUserTable() {
    const tableBody = document.getElementById("userTable").querySelector("tbody");
    tableBody.innerHTML = ""; 

    users.forEach((user, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td contenteditable="true">${user.username}</td>
            <td contenteditable="true">${user.email}</td>
            <td contenteditable="true">${user.password}</td>
            <td>
                <button onclick="saveUser(${index})">Save</button>
                <button onclick="deleteUser(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function saveUser(index) {
    const row = document.getElementById("userTable").rows[index + 1];
    const username = row.cells[0].innerText;
    const email = row.cells[1].innerText;
    const password = row.cells[2].innerText;

    users[index] = { username, email, password };
    alert("User updated successfully!");
}

function deleteUser(index) {
    if (confirm("Are you sure you want to delete this user?")) {
        users.splice(index, 1); 
        loadUserTable(); 
    }
}

window.onload = loadUserTable;



