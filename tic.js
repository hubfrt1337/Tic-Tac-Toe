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
    
   // activePlayer = switchPlayer(player1, player2);
    board.board[column][row] = player.mark;
    console.log(board)
    console.log(activePlayer);
    getPlayer = player;
    activePlayer = switchPlayer(player1, player2);
    checkWin("O", "player1");
    checkWin("X", "player2");
    
}



function switchPlayer(player1, player2){
    if(num === 0) {
        num = 1;
        return player1;
    } else {
        num = 0;
        return player2;
    }
}
function checkWin(sign, gracz){
    
        if(board.board[0][0] === sign & board.board[0][1] === sign & board.board[0][2] === sign){
            console.log(`Wygrywa ${gracz}`)
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
        } else if(board.board[0][2] === sign & board.board[1][1] === sign & board.board[2][2] === sign){
            console.log(`Wygrywa ${gracz}`);
            return true;
        }
        else if(board.board[0][0] === sign & board.board[1][1] === sign & board.board[2][2] === sign){
            console.log(`Wygrywa ${gracz}`);
            return true;
        } else if(board.board[0][2] === sign & board.board[1][1] === sign & board.board[2][0] === sign){
            console.log(`Wygrywa ${gracz}`);
            return true;
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
                            console.log('loleczek')
                        } else {
                        playGame(activePlayer, i, j)
                        divEl.innerText = getPlayer.mark;
                        }
                    
                })
            }
        }
     }
    //squaresFactory();
    const restart = document.querySelector('.restart');
        restart.addEventListener('click', () => {
            container.innerHTML = '';
            board = gameBoard.displayBoard()
            squaresFactory();
        })
    
