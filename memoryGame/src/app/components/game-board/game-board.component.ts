import { Component, OnInit } from '@angular/core';
import { GameLogicService } from '../../services/game-logic.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-board',
  imports: [CommonModule],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.scss'
})

export class GameBoardComponent implements OnInit {

  constructor(private gameLogicService: GameLogicService) {}
  gameState: any[] = [];
  ngOnInit(): void {
    this.gameLogicService.loadGame();
    this.updateGameState();
  }

  updateGameState(): void {
    this.gameLogicService.updateGame();
    this.gameState = this.gameLogicService.getGameState();
  }

  flipCard(index: number) {
    this.gameLogicService.chooseCard(index)
    this.updateGameState();
  }

  resetBoard(): void {
   this.gameLogicService.resetBoard();
   this.updateGameState();
  }

  isGameComplete(): boolean {
    return this.gameLogicService.isGameComplete();
  }
}
