import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { isNgTemplate } from '@angular/compiler';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  Total:number = 0;
  constructor() { }

  ngOnInit() {
  }
  addItems(newItem:BudgetItem){
    this.budgetItems.push(newItem);
    this.Total += newItem.amount;
  }
  deleteItem(item:BudgetItem){
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index,1);
    this.Total -= item.amount;
  }
  updateItem(updateEvent:UpdateEvent){
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)]=updateEvent.new;
    this.Total -= updateEvent.old.amount;
    this.Total += updateEvent.new.amount;
  }
}
