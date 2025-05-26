const mainContainer = document.querySelector('.main-js');
let score1 = 0;
let score2 = 0;
const scoreEl = document.querySelector('.score-js1');
console.log(scoreEl)
const scoreEl2 = document.querySelector('.score-js2');
const gameBoard = (() => {
    const displayBoard = () => {
    const rows = 3;
    const columns = 3;
    const board = []
    for(let i = 0; i < columns; i++){
        board[i] = [];
        for(let j = 0; j < rows;j++){
            board[i].push(j);
        }
        }
        return {board};
    }

    return{displayBoard};
})();

let board = gameBoard.displayBoard();


const playerFactory = (player, mark) => {
    return {player, mark}
}
let num = 0;
const player1 = playerFactory('marek', 'O');
const player2 = playerFactory('antek', 'X');
let activePlayer = switchPlayer(player1, player2);
let getPlayer;

function playGame(player, column, row){
    if(checkWin("O", 'player1') || checkWin("X", "player2")){
        console.log('lol')
        return;
    }
    
    activePlayer = switchPlayer(player1, player2);
    board.board[column][row] = player.mark;
    getPlayer = player;
    checkWin("O", player1);
    checkWin("X", player2);
    
}




function switchPlayer(player1, player2){
    if(num === 0) {
        num = 1;
        mainContainer.classList.add("main-changep1");
        mainContainer.classList.remove("main-changep2");
        return player1;
    } else {
        num = 0;
        mainContainer.classList.add("main-changep2");
        mainContainer.classList.remove("main-changep1");
        return player2;
    }
}
const result = document.querySelector('.result');
console.log(result)
function showWinner(gracz){
    const inputplayer1 = document.querySelector('.play1-js');
    const inputplayer2 = document.querySelector('.play2-js');
    if(gracz.mark == 'O'){
        score1++;
        scoreEl.innerText = score1;
        result.innerText = `${inputplayer1.value} is a winner`;
    }else{
        score2++;
        scoreEl2.innerText = score2;
        result.innerText = `${inputplayer2.value} is a winner`;
    }
};
function checkWin(sign, gracz){
        if(board.board[0][0] === sign & board.board[0][1] === sign & board.board[0][2] === sign){
            console.log(`Wygrywa ${gracz.player}`);
            showWinner(gracz);
            return true;
        } else if(board.board[1][0] === sign & board.board[1][1] === sign & board.board[1][2] === sign){
            console.log(`Wygrywa ${gracz}`)
            return true;
        } else if(board.board[2][0] === sign & board.board[2][1] === sign & board.board[2][2] === sign){
            console.log(`Wygrywa ${gracz}`);
            return true;
        } 
        else if(board.board[0][0] === sign & board.board[1][0] === sign & board.board[2][0] === sign){
            console.log(`Wygrywa ${gracz}`)
            return true;
        } else if(board.board[0][1] === sign & board.board[1][1] === sign & board.board[2][1] === sign){
            console.log(`Wygrywa  ${gracz}`);
            return true;
        } else if(board.board[0][2] === sign & board.board[1][2] === sign & board.board[2][2] === sign){
            console.log(`Wygrywa ${gracz}`);
            return true;
        }
        else if(board.board[0][0] === sign & board.board[1][1] === sign & board.board[2][2] === sign){
            console.log(`Wygrywa ${gracz}`);
            return true;
        } else if(board.board[0][2] === sign & board.board[1][1] === sign & board.board[2][0] === sign){
            console.log(`Wygrywa ${gracz}`);
            return true;
        } else{
            function checkSquare(si){
                return si == 'X' || si == 'O';
            }
            if(board.board[0].every(checkSquare)){
                console.log('yep')
            }
        }

    }

    const container = document.querySelector(".container");
    
    
    function squaresFactory(){
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                const divEl = document.createElement('div');
                divEl.classList.add('square', `square${i}${j}`);
                container.appendChild(divEl);
                divEl.addEventListener('click', () => {
                        if(divEl.innerText === 'X' || divEl.innerText === 'O'){
                            console.log('square already choosen')
                        } else if(checkWin("O", 'player1') || checkWin("X", "player2")){
                            // - stop koniec gry ktos wygrał,  wys wiadomosc kto wygrał
                        } else {
                        playGame(activePlayer, i, j)
                        divEl.innerText = getPlayer.mark;
                        }
                    
                })
            }
        }
     }
    
    const start = document.querySelector('.start');
    const name1 = document.querySelector('.after-js')
    const name2 = document.querySelector('.after2-js')
    // 
    // START EVENT START EVENT START EVENT START EVENT
    start.addEventListener('click', () => {
        console.log(activePlayer)
        const inputplayer1 = document.querySelector('.play1-js');
        const inputplayer2 = document.querySelector('.play2-js');
        const squares = document.querySelectorAll('.square');
        if(inputplayer1.value !== '' & inputplayer2.value !== ''){
            squares.forEach((box) => {
                box.classList.add('fade-out');
                
            })
            setTimeout(() => {
            if(activePlayer === player1){
            mainContainer.classList.add('main-changep1');
        }else {
            mainContainer.classList.add('main-changep2');
        }
            name1.innerText = inputplayer1.value;
            name2.innerText = inputplayer2.value;
            inputplayer1.classList.add('hide');
            inputplayer2.classList.add('hide');
            container.innerHTML = '';
            board = gameBoard.displayBoard();
            squaresFactory();
        
    }, 1000) 
    } else{
        name1.innerText = 'Enter player name';
        name2.innerText = 'Enter player name';
    }
   })
    //
    // RESTART EVENT
    const restart = document.querySelector('.restart');
        restart.addEventListener('click', (e) => {
            const inputplayer1 = document.querySelector('.play1-js');
            const inputplayer2 = document.querySelector('.play2-js');
            const squares = document.querySelectorAll('.square');
            squares.forEach((box) => {
                box.classList.add('fade-out');
                
            })
            mainContainer.classList.remove('main-changep1', "main-changep2")
            setTimeout(() => {
            inputplayer1.classList.remove('hide');
            inputplayer1.value = '';
            name1.innerText = '';
            inputplayer2.classList.remove('hide');
            inputplayer2.value = '';
            name2.innerText = '';
            container.innerHTML = `
                <div class="square00 square">X</div>
                <div class="square01 square">X</div>
                <div class="square02 square">X</div>
                <div class="square10 square">O</div>
                <div class="square11 square">O</div>
                <div class="square12 square">O</div>
                <div class="square20 square">X</div>
                <div class="square21 square">X</div>
                <div class="square22 square">X</div>
            `;
            // board = gameBoard.displayBoard();
            //squaresFactory()
            name1.innerText = 'Enter player name';
            name2.innerText = 'Enter player name';
                },1000);
                
        })
    
        
mainContainer.classList.remove('main-changep1', "main-changep2")