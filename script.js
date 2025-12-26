let games = [];

function openAdmin() {
    document.getElementById('adminModal').style.display = 'block';
}

function closeAdmin() {
    document.getElementById('adminModal').style.display = 'none';
}

function checkPass() {
    const pass = document.getElementById('adminPass').value;
    if(pass === "8036") {
        document.getElementById('loginArea').style.display = 'none';
        document.getElementById('uploadArea').style.display = 'block';
    } else {
        alert("වැරදි මුරපදයක්!");
    }
}

function addGame() {
    const title = document.getElementById('gameTitle').value;
    const desc = document.getElementById('gameDesc').value;
    const link = document.getElementById('mediafireLink').value;
    const type = document.getElementById('gameType').value;

    const game = { id: Date.now(), title, desc, link, type };
    games.push(game);
    displayGames();
    alert("Game එක සාර්ථකව Upload වුණා!");
}

function displayGames() {
    const container = document.getElementById('gameContainer');
    container.innerHTML = '';

    games.forEach(game => {
        container.innerHTML += `
            <div class="game-card">
                <h3>${game.title}</h3>
                <p>${game.desc}</p>
                <span class="badge">${game.type}</span><br><br>
                <button onclick="window.open('${game.link}', '_blank')">Download Now</button>
                <button style="background:red; margin-top:5px;" onclick="deleteGame(${game.id})">Delete</button>
            </div>
        `;
    });
}

function deleteGame(id) {
    games = games.filter(g => g.id !== id);
    displayGames();
}