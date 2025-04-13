import { Injectable } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


interface Card {
  emoji: string,
  faceUp: boolean;
  matched: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class GameLogicService {

  private _gameState: Card[] = [];
  private _lastTwoCards: number[] = [];
  private _resetTimer = new Subject<void>();

  constructor() { }

  emojis = [ '🐵', '🐶', '🦊', '🐱', '🦁',
    '🐯', '🐴', '🦄', '🦓', '🦌',
    '🐮', '🐷', '🐭', '🐹', '🐻',
    '🐨', '🐼', '🐽', '🐸', '🐰', '🐙' ];

  loadGame(): void {
    const emojis_copy: string[] = [...this.emojis];
    const game_state_copy: Card[] = [];
    const chosen_cards : Card[] = [];
    for (let i = 0; i < 8; i++) {
      let card = {
        emoji : this.pickRandomEmoji(emojis_copy),
        faceUp: false,
        matched: false
      }
      game_state_copy.push(card)
      chosen_cards.push(card)
    }

    for (let i =0; i < 8; i++) {
      let copy = chosen_cards.splice(Math.floor(Math.random()*chosen_cards.length), 1)[0]
      let copy_card = {
        emoji : copy.emoji,
        faceUp : false,
        matched: false
      }
      game_state_copy.push(copy_card)
    }
    // console.log(game_state_copy)
    this._gameState = game_state_copy
  }

  updateGame(): void {
    if (this._lastTwoCards.length === 2) {
      this._resetTimer.next();
      if (!this.checkPair()) {
        setTimeout(() => this.resetPair(), 1000);
      } else {
        this.confirmPair();
      }
    }
  }

  pickRandomEmoji(array: string[]): string {
    return array.splice(Math.floor(Math.random()*array.length), 1)[0];
  }

  getGameState(): Card[] {
    return this._gameState;
  }

  chooseCard(input: number): void {
    if (this._lastTwoCards.length != 2) {
      this._gameState[input]["faceUp"] = true;
      this._lastTwoCards.push(input)
    }

    if (this._lastTwoCards.length === 1) {
      timer(1500)
      .pipe(takeUntil(this._resetTimer))
      .subscribe(() => {
        this._gameState[this._lastTwoCards[0]].faceUp = false;
      });
    }
  }

  checkPair(): boolean {
    console.log(this._gameState[this._lastTwoCards[0]].emoji == this._gameState[this._lastTwoCards[1]].emoji)
    return this._gameState[this._lastTwoCards[0]].emoji == this._gameState[this._lastTwoCards[1]].emoji
  }

  resetPair(): void {
    let first_card = this._lastTwoCards[0];
    let second_card = this._lastTwoCards[1];
    
    this._gameState[first_card].faceUp = false;
    this._gameState[second_card].faceUp = false;
    this._lastTwoCards = [];
  }

  confirmPair(): void {

    let first_card = this._lastTwoCards[0];
    let second_card = this._lastTwoCards[1];
    
    this._gameState[first_card].matched = true;
    this._gameState[second_card].matched = true;
    this._lastTwoCards = [];
  }

  resetBoard(): void {
    this.loadGame();
    this._lastTwoCards = [];
  }

  isGameComplete() {
    for (let i = 0; i < this._gameState.length; i++) {
      if (!this._gameState[i].matched) {
        return false;
      }
    }
    return true;
  }

}
