import { AGame } from './AGame';
export class Cricket extends AGame {
  protected init(): void {
    console.log("cricket game initialized! start playing...");
  }
  protected startPlay(): void {
    console.log("cricket game started. Enjoy");
  }
  protected endPlay(): void {
    console.log("cricket game finished");
  }
}
