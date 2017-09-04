import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'input-filter',
  templateUrl: './input-filter.component.html',
  styleUrls: ['./input-filter.component.scss']
})
export class InputFilterComponent implements OnInit {

  private _minChars: number = 2;

  @Input() items: Array<any> = [];
  @Input() search: string;
  @Input() placeholder: string = 'Search ...'
  @Output() filtered: EventEmitter<any[]> = new EventEmitter<any[]>();

  term = new FormControl();
  list: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    this.term.valueChanges.debounce(e => {
      return Observable.timer(300);
    })
    .filter(content => content !== undefined)
    .subscribe((content: string) => {
      let trimContent = content.trim();
      if (trimContent && trimContent.length >= this._minChars) {
        this.list = this.findMatches(trimContent);
        this.filtered.emit(this.list);
      }
      else
        this.filtered.emit(this.items);
    });
  }

  /**
   * Find matches of a given string
   * @param {string} term [description]
   */
  private findMatches(term: string) {
    let search = this.items.filter(e => {
      let item = e[this.search];
      if (item)
        return item.toLowerCase().indexOf(term.toLowerCase()) !== -1;
    });

    return search;
  }
}
