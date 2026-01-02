import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../models/transaction.model';
import { TransactionForm } from '../../components/transaction-form/transaction-form';
import { TransactionList } from '../../components/transaction-list/transaction-list';

@Component({
  standalone: true,
  imports: [CommonModule, TransactionForm, TransactionList],
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
})

export class Dashboard implements OnInit {

  transactions : Transaction[] = [];

  constructor(private transactionService: TransactionService) {}

  async ngOnInit() {
    this.transactions = await this.transactionService.getAll();
  }

  async addTransaction(t: Transaction) {
    await this.transactionService.add(t);
    this.transactions.push(t);
  }
}

