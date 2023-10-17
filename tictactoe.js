let currentPlayer = "X";
function mark(id) {
    var button = document.getElementById(id);
    if (button.innerText === "") { 
        button.innerText = currentPlayer;
        if (checkWin(currentPlayer)) {
            if (currentPlayer === "O") alert("Player 2 won!");
            else alert("Player 1 won!");
            res();
        }
        currentPlayer = (currentPlayer === "X") ? "O" : "X";
        let c=0;
        for (let i=1;i<=9;i++){
            if (document.getElementById("box"+i).innerText!=="") c++;
        }
        if (c===9) {
            alert("Game will be reset.");
            res();
        }
    }
}
function res() {
    for (let i = 1; i <= 9; i++) {
        var box = document.getElementById('box' + i);
        box.innerText = "";
    }
    currentPlayer = "X";
}
function checkWin(player) {
    const b = [
        ['box1', 'box2', 'box3'],
        ['box4', 'box5', 'box6'],
        ['box7', 'box8', 'box9'],
        ['box1', 'box4', 'box7'],
        ['box2', 'box5', 'box8'],
        ['box3', 'box6', 'box9'],
        ['box1', 'box5', 'box9'],
        ['box3', 'box5', 'box7']
    ];
    for (let i = 0; i < 8; i++) {
        var box1 = document.getElementById(b[i][0]);
        var box2 = document.getElementById(b[i][1]);
        var box3 = document.getElementById(b[i][2]);
        if (box1.innerText === player && box2.innerText === player && box3.innerText === player) {
            return true;
        }
    }
    return false;
}
