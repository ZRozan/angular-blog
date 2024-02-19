import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-big',
  templateUrl: './card-big.component.html',
  styleUrls: ['./card-big.component.css'],
})
export class CardBigComponent implements OnInit {
  @Input()
  photoImage: string = '';
  @Input()
  cardTitle: string = '';
  @Input()
  cardDescription: string = ``;
  constructor() {}

  ngOnInit(): void {}
}
