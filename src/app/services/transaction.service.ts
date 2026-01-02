import { Injectable } from "@angular/core";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Transaction } from "../models/transaction.model";

@Injectable({
    providedIn: 'root',
})
export class TransactionService {
    private collectionRef = collection(db, 'transactions');

    async getAll(): Promise<Transaction[]> {
        const snapshot = await getDocs(this.collectionRef);
        return snapshot.docs.map(doc => doc.data() as Transaction);
    }

    async add(transaction: Transaction) {
        await addDoc(this.collectionRef, transaction);
    }
}