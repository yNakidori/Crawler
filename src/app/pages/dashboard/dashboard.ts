import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transaction } from '../../models/transaction.model';
import { TransactionForm } from '../../components/transaction-form/transaction-form';
import { TransactionList } from '../../components/transaction-list/transaction-list';

@Component({
  standalone: true,
  imports: [CommonModule, TransactionForm, TransactionList],
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})

export class Dashboard {

  transactions : Transaction[] = [];

  addTransaction(t: Transaction) {
    this.transactions.push(t);
  }
}

