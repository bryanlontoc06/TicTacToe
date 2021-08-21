// MODAL FOR TIC TAC TOE RULES
class Rules extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="popup center">
            <div class="title">
                Tic Tac Toe
            </div>
            <div class="description">
                <h3>RULES FOR TIC-TAC-TOE</h3>
                <br />
                1. The game is played on a grid that's 3 squares by 3 squares.
                <br />
                2. Choose your checkers. Players take turns putting their marks in empty squares.
                <br />
                3. The first player to get 3 of his/her marks in a row (up, down, across, or diagonally) is the winner.
                <br />
                4. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.
            </div>
            <div class="dismiss-btn">
                <button id="dismiss-popup-btn">Start</button>
                <button class="close-popup-btn">Close</button>
            </div>
        </div>
        `;
    }
}

// MODAL FOR CHOOSING PLAYERS' COLOR  
class Colors extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="popup center choose-color">
            <div class="title">
                Choose your color:
            </div>
            <div class="description">
                <div class="player-btns player1-btn player-color">Player 1 <input class="player1-color-input" type="color" value="#33cc33"/></div>
                <div class="player-btns player2-btn player-color">Player 2 <input class="player2-color-input" type="color" value="#0000FF"/></div>
            </div>
            <div class="dismiss-btn">
                <button id="dismiss-popup-btn" class="start-btn okay-change-color">OK</button>
                <button class="close-popup-btn">Close</button>
            </div>
        </div>
        `;
    }
}

// MODAL FOR CHOOSING A PLAYER 
class Players extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="popup center choose-player">
            <div class="title">
                Enter your names:
            </div>
            <div class="description">
                <div class="player-btns player1-btn player-name-p1">Player 1 <input class="player1-input" placeholder="Player 1 Name" maxlength="15"/></div>
                <div class="player-btns player2-btn player-name-p2">Player 2 <input class="player2-input" placeholder="Player 2 Name" maxlength="15"/></div>
            </div>
            <div class="title">
                <div class="p1-name">Player 1</div> 
                <p class="sub-title">Choose your Checker:</p> 
                <div class="checkers">
                    <div class="x-checker x-checker-p1">X</div>
                    <div class="o-checker o-checker-p1">O</div>
                </div>
            </div>
            <div class="title">
                <div class="p2-name">Player 2</div> 
                <p class="sub-title">Checker:</p> 
                <div class="checkers">
                    <div class="x-checker x-checker-p2">X</div>
                    <div class="o-checker o-checker-p2">O</div>
                </div>
            </div>
            <div class="dismiss-btn">
                <button id="dismiss-popup-btn" class="start-btn okay-change-name">OK</button>
                <button class="close-popup-btn">Close</button>
            </div>
        </div>
        `;
    }
}

// MODAL FOR SETTINGS
class Settings extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="popup center settings">
            <div class="title">
                Settings
            </div>
            <div class="description">
                <div>
                    <button class="btn rules">Rules</button>
                </div>
                <div class="change-btn">
                    <button class="btn change-player-name">Change Players' Details</button>
                    <button class="btn change-player-color">Change Players' Color</button>
                </div>
            </div>
            <div class="dismiss-btn">
                <button class="close-popup-btn">Close</button>
            </div>
        </div>
        `;
    }
}


// MODAL FOR PLAYER 1 WINS
class PlayerWin extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="popup center player-win">
            <div class="title"></div>
            <div class="description">
                <img src="" width="100%" />
            </div>
            <div class="dismiss-btn">
                <button class="close-popup-btn">Close</button>
            </div>
        </div>
        `;
    }
}

customElements.define(`app-rules`, Rules)
customElements.define(`app-colors`, Colors)
customElements.define(`app-players`, Players)
customElements.define(`app-settings`, Settings)
customElements.define(`app-player-win`, PlayerWin)