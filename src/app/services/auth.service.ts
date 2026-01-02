import { Injectable } from "@angular/core";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, User } from "firebase/auth";
import { firebaseApp } from "../firebase";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private auth = getAuth(firebaseApp);
    user: User | null = null;
    
    constructor() {
        onAuthStateChanged(this.auth, (user) => {
            this.user = user;
        })
    }

    login(email: string, password : string) {
        return signInWithEmailAndPassword(this.auth, email, password);
    }

    register(email: string, password: string) {
        return createUserWithEmailAndPassword(this.auth, email, password);
    }

    logout() {
        return signOut(this.auth);
    }

    isLoggedIn() {
        return !!this.user;
    }

}
