const articles = document.querySelectorAll('article')
const resetBtn = document.querySelector('.reset-btn')

let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

let turn = true // true = cross

resetBtn.addEventListener('click', resetGame)

for (let i = 0; i < articles.length; i++) {
    articles[i].addEventListener('click', onClick)
}

function onClick(data) {
    let row = data.path[1].classList[0].charAt(4)
    let col = data.path[1].classList[1].charAt(4)
        if (board[row][col] == '') {
        if (turn == true) {
            data.target.attributes[0].nodeValue = "img/cross.png"
            turn = false
            board[row][col] = 'x'
            checkWin('x')
        } else {
            data.target.attributes[0].nodeValue = "img/circle.png"
            turn = true
            board[row][col] = 'o'
            checkWin('o')
        }
    }
}

function resetGame() {
    for (let i = 0; i < articles.length; i++) {
        articles[i].children[0].attributes[0].nodeValue = "img/trans.png"
        turn = true
        board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]
    }
}

function checkWin(player) {
    for (let i = 0; i <= 2; i++)
        if (board[i][0] == player && board[i][1] == player && board[i][2] == player) {
            alert(player + ' win')
        } else if (board[0][i] == player && board[1][i] == player && board[2][i] == player) {
            alert(player + ' win')
        }
    if (board[0][0] == player && board[1][1] == player && board[2][2] == player) {
        alert (player + ' win')
    } else if (board [0][2] == player && board[1][1] == player && board[2][0] == player) {
        alert (player + ' win')
    }
}
