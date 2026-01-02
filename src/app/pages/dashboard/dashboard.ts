import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Transaction } from '../../models/transaction.model';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})

export class Dashboard {

  transactions : Transaction[] = [];

  description = '';
  amount : number | null = null;
  type: 'entrada' | 'saida' = 'entrada';


  addTransaction() {
    if(this.description || this.amount === null) return;

    this.transactions.push({
      description: this.description,
      amount: this.amount,
      type: this.type
    })

    this.description = '';
    this.amount = null;
  }

  get totalEntradas() : number {
    return this.transactions
      .filter(t => t.type === 'entrada')
      .reduce((total, t) => total + t.amount, 0)
  }

  get totalSaidas() : number {
    return this.transactions
      .filter(t => t.type === 'saida')
      .reduce((total, t )=> total + t.amount, -0)
  }

  get saldo() : number {
    return this.totalEntradas - this.totalSaidas;
  }

}

