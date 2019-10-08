import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-week",
  templateUrl: "./week.component.html",
  styleUrls: ["./week.component.css"]
})
export class WeekComponent implements OnInit {
  days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  dates = ["4", "5", "6", "7", "8", "9", "10"];
  isSelected = [];
  constructor() {
    this.unselectAll();
  }

  unselectAll() {
    for (let i = 0; i < 7; i++) {
      this.isSelected[i] = false;
    }
  }
  ngOnInit() {}

  onSelect(num) {
    this.unselectAll();
    this.isSelected[num] = true;
  }
}
