import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count = 0;
  history: any = [];
  undoneActions: any = [];

  adjustCount(amount: number) {
    const before = this.count;
    this.count += amount;
    const action = amount >= 0 ? `+${amount}` : `${amount}`
    // console.log("action is: ", action)

    this.addToHistory(action, before, this.count)
    this.undoneActions = [];
  }

  addToHistory(action:string, before:number , after:number) {
    this.history.push({ action, before, after });

    if (this.history.length > 50) {
      this.history.pop();
    }

    // console.log("reversing: ", [...this.history].reverse());
  }

  get displayedHistory() {
    return [...this.history].reverse();
  }

  undo() {
    if (this.history.length === 0) {
      return;
    }

    const lastAction = this.history.pop();
    // console.log(lastAction)

    if (lastAction) {
      this.count = lastAction.before;
      this.undoneActions.push(lastAction)
    }
  }

  redo() {
    if (this.undoneActions.length === 0) {
      return;
    }

    const nextAction = this.undoneActions.pop();
    if (nextAction) {
      this.count = nextAction.after;
      this.history.push(nextAction);
    }
  }

  get canUndo(): boolean {
    return this.history.length > 0;
  }

  get canRedo(): boolean {
    return this.undoneActions.length > 0;
  }
}
