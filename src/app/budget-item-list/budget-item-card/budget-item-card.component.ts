import { Component,OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
// import { MatDialog } from '@angular/material/dialog';
// import { EditItemModalComponent } from 'src/app/edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item:BudgetItem;
  @Output() deletedItem: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();
  
  // constructor(public dialog: MatDialog) { }
  constructor() { }

  ngOnInit() {
  }
  
  deleteItem(){
    this.deletedItem.emit();
  }
  // openDialog(item:BudgetItem){
  //   const dialogRef = this.dialog.open(EditItemModalComponent, {
  //     width: '600px',
  //     data: item
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }
  onCardClick(){
    this.cardClick.emit();
  }
}

