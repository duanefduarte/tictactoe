import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  winner: string;
  theresWinner: boolean;
  isTie: boolean;
  seqWinner: Array<number>;
  xVal: string;
  oVal: string;
  isHighlighted: Array<boolean>;
  showModal: boolean = false;
  xScore: number = 0;
  oScore: number = 0;

  constructor() {}

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.isHighlighted = Array(9).fill(false);
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    this.theresWinner = false;
    this.isTie = false;
    this.xScore = 0;
    this.oScore = 0;
    this.toggle()
  }

  anotherRound() {
    this.isHighlighted = Array(9).fill(false);
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    this.theresWinner = false;
    this.isTie = false;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();
    this.isTie = this.verifyTie();
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (this.squares[a] &&
          this.squares[a] === this.squares[b] &&
          this.squares[a] === this.squares[c])
        {
        this.seqWinner = lines[i];
        this.theresWinner = true;
        this.isHighlighted = this.highlightSeq(this.theresWinner,this.seqWinner);

        if(this.squares[a]=='X'){
          this.xScore = ++this.xScore;
        }
        else{
          this.oScore = ++this.oScore;
        }
        return this.squares[a];
      }
    }
    this.theresWinner = false;
    return null;
  }

  verifyTie() {
    this.isTie = true;
    for (let i = 0; i < 9; i++) {
      if(this.squares[i]==null){
        this.isTie = false;
      }
    }
    return this.isTie;
  }

  getPlayers(xPlayer:string,oPlayer:string,){
    if(!xPlayer){
      this.xVal = 'X';
    }
    else{
      this.xVal = xPlayer;
    }
    if(!oPlayer){
      this.oVal = 'O';
    }
    else{
      this.oVal = oPlayer;
    }
    this.toggle()
  }

  highlightSeq(theresWinner:boolean, seqWinner:Array<number>){
    this.isHighlighted = Array(9).fill(false)
    if(theresWinner){
      for (let i of seqWinner) {
        this.isHighlighted[i] = true;
      }
    }
    return this.isHighlighted;
  }

  toggle() {
    this.showModal = !this.showModal;
  }

}