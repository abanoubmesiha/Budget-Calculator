import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {
  @Input() budgetItems:BudgetItem[];
  @Output() deletedItem: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>()

  constructor() { }

  ngOnInit() {
  }
  deleteItem(deletedItem:BudgetItem){
    this.deletedItem.emit(deletedItem);
  }
}
