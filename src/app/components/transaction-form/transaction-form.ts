import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransactionType, Transaction } from '../../models/transaction.model';

@Component({
  standalone: true,
  selector: 'app-transaction-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './transaction-form.html',
})

export class TransactionForm {

  description = '';
  amount : number | null = null;
  type : TransactionType = "entrada";

  @Output() submitTransaction = new EventEmitter<Transaction>();

  submit() {
    if (!this.description || this.amount === null) return;

      this.submitTransaction.emit({
        description: this.description,
        amount: this.amount,
        type: this.type,
      });

      this.description = '';
      this.amount = null;
      this.type = 'entrada';
  }
}
