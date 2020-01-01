import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {
  @Input() budgetItems:BudgetItem[];
  @Output() deletedItem: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>()
  @Output() update:EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
  deleteItem(deletedItem:BudgetItem){
    this.deletedItem.emit(deletedItem);
  }
  onCardClicked(item:BudgetItem){
    const dialogRef = this.dialog.open(EditItemModalComponent, {
          width: '600px',
          data: item
        });
    
        dialogRef.afterClosed().subscribe(result => {
          if (result){
            // this.budgetItems[this.budgetItems.indexOf(item)] = result;
            this.update.emit({
              old:item,
              new:result
            });
          }
        });
      }
  }
export interface UpdateEvent {
  old:BudgetItem,
  new:BudgetItem
}