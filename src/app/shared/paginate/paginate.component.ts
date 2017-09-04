import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.scss']
})
export class PaginateComponent implements OnInit {
  
  @Input() items: Array<any> = [];
  @Input() perPage: number = 10;
  @Output() pageUpdated: EventEmitter<any[]> = new EventEmitter<any[]>();
  
  total: number = 1;
  pages: Array<any> = [];
  page: number = 1;

  constructor() { }

  ngOnInit() {
    this._getPages()
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if(changes.items) 
      this._getPages();
  }

  // go to next page
  next() {
    if(this.perPage > this.pages.length) return
    this.page++;
    this.changePage(this.page);
  }

  // go to previous page
  previous() {
    if(this.perPage > this.pages.length) return
    
    this.page = this.page === 1 ? 1 : this.page - 1;
    this.changePage(this.page);
  }
  
  /**
   * Change pagination to desired page
   * @param page number of new page
   */
  changePage(page: number) {
    let portion = ((page - 1)) * this.perPage;
    let end = portion + this.perPage
    this.pages = this.items;
    this.pages = this.pages.slice(portion, end);
    this.pageUpdated.emit(this.pages);
  }

  /**
   * Init Paination
   */
  private _getPages() {
    this.page = 1;
    this.total = Math.ceil(this.items.length / this.perPage) || 1;
    this.pages = this.items;

    this.pages = this.pages.slice(0, this.perPage);
    this.pageUpdated.emit(this.pages);
  }
}
