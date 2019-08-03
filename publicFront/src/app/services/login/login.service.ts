import { RoutesService } from './../routes/routes.service';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LoginModel } from 'src/app/Models/LoginModel';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favoriteColor?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: Observable<User>;

  private loginsCollections: AngularFirestoreCollection<LoginModel>;
  logins: Observable< LoginModel[]>;

  constructor(private readonly afs: AngularFirestore, private afAuth: AngularFireAuth, private routesService: RoutesService) {
    this.loginsCollections = afs.collection<LoginModel>('logins');
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  addLogin(login: LoginModel): Promise<any> {
    return this.loginsCollections.add(login);
  }

  googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then(credential => this.updateUserData(credential.user))
    .catch(error => console.log(error));
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };
    return userRef.set(data, { merge: true });
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
        this.routesService.goToHome(null);
    });
  }
}
