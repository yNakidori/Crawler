export type TransactionType = 'entrada' | 'saida';

export interface Transaction {
    description : string;
    amount : number;
    type : TransactionType;
}