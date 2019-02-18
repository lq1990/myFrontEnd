import { AGame } from './AGame';

export class Football extends AGame {
  protected init(): void {
    console.log("football game initialized! start playing...");
  }
  protected startPlay(): void {
    console.log("football game started. Enjoy");
  }
  protected endPlay(): void {
    console.log("football game finished");
  }
}
