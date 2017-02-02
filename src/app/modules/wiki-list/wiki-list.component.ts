import { Component, ElementRef, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { WikiListService } from './wiki-list.service';
import { Item } from './item';

@Component({
  selector: 'wiki-list',
  templateUrl: './wiki-list.component.html',
  encapsulation: ViewEncapsulation.None
})

export class WikiListComponent {
  private numbertmp: number;
  private selectedItemtmp: Item;
  private selectedItem: Item;
  private name: string = "";
  private id: number;
  private pageNumber: number = 0;
  private loading: Boolean = false;
  private title: string;
  items: Item[] = new Array<Item>();
  private errorMessage: string;
  selectedRow: Number;
  doShowMe: boolean = false;
  private autoDetail: boolean = false
  private page_size: string;


  constructor(
    private itemService: WikiListService,
    private elementRef: ElementRef,
    private service: WikiListService
  ) {
    this.page_size = 'col-sm-12';
    this.numbertmp = null;
  }

  // ngOnInit(): void {
  //   this.title = 'users';
  //   this.getItems();
  // }


  onClickAutoDetail(): void {
    this.autoDetail = !this.autoDetail;
    if (this.autoDetail) {
      this.doShowMe = true;
      this.page_size = 'col-sm-7';
    }
    else {
      this.doShowMe = false;
      this.page_size = 'col-sm-12';
    }
  }

  onSelect(item: Item, index: number): void {
    this.selectedRow = index;
    this.selectedItemtmp = item;
    this.itemService.getItem(item.id)
      .subscribe(
      item => this.selectedItem = item,
      error => {
        this.loading = false,
          this.errorMessage = <any>error
      },
      () => {
        this.loading = false
      }
      );
    this.numbertmp = index;
  }

  ondblclick(): void {
  }

  getItems(): void {
    this.loading = true;
    this.pageNumber = 0;
    this.service.getItems()
      .subscribe(
      items => {
        console.log('4444:' + items[1].id);
        this.items = items
      },
      error => {
        this.loading = false,
          this.errorMessage = <any>error
      },
      () => {
        this.loading = false
      }
      );
    console.log('1111:getItems');
  }


  add(): void {
    console.log('add')
    var name: string;
    name = 'news';
    this.itemService.addItem(name)
      .subscribe(
      item => this.items.push(item),
      error => this.errorMessage = <any>error);
  }

  delete(item: Item) {
    console.log('delete')
    this.items.splice(this.numbertmp, 1);
    var id = item.id;
    this.itemService
      .deleteItem(id)
      .subscribe();
    this.items = this.items
      .filter(item => item.id !== id);
    this.selectedItem = null;
  }

  update(item: Item) {
    console.log('update')
    this.selectedItemtmp.name = item.name;
    this.itemService
      .updateItem(item, item.id)
      .subscribe();
  }






};