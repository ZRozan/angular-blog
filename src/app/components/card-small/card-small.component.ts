import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-card-small",
  templateUrl: "./card-small.component.html",
  styleUrls: ["./card-small.component.css"],
})
export class CardSmallComponent implements OnInit {
  @Input()
  photoImage: string = "";
  @Input()
  cardTitle: string = "";
  constructor() {}

  ngOnInit(): void {}
}
