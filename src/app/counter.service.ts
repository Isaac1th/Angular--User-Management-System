import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToInActiveCounter = 0;

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log("Active to Inactive: " + this.activeToInactiveCounter);
  }

  incrementInactiveToActive() {
    this.inactiveToInActiveCounter++;
    console.log("Inactive to Active: " + this.inactiveToInActiveCounter);
  }

  constructor() {}
}
