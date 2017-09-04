import { Component, OnInit, Input } from '@angular/core';
import { GnomeInterface } from '../../interfaces';

@Component({
  selector: 'gnome-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() gnome: GnomeInterface;

  constructor() { }

  ngOnInit() {
  }

}
