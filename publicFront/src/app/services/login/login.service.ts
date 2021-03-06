import { RoutesService } from './../routes/routes.service';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LoginModel } from 'src/app/Models/LoginModel';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { AngularFireStorage } from '@angular/fire/storage';

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

  collection = 'logins';
  static userSession: Observable<LoginModel[]>;
  static userEmitter: EventEmitter<LoginModel[]> = new EventEmitter();

  // tslint:disable-next-line: member-ordering
  user: Observable<User>;
  private loginsCollections: AngularFirestoreCollection<LoginModel>;
  logins: Observable<LoginModel[]>;

  constructor(private readonly afs: AngularFirestore, private afAuth: AngularFireAuth, private routesService: RoutesService, private storage: AngularFireStorage) {
    this.loginsCollections = afs.collection<LoginModel>('logins');
  }

  private setUserSession(uid: string): Observable<LoginModel[]> {
    const filter = this.afs.collection<LoginModel>(this.collection, ref => ref.where('uid', '==', uid).limit(1));
    return filter.valueChanges();
  }

  async createLogin(user: LoginModel) {
      try {
        return await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      } catch (error) {
        console.log(error);
        return null;
      }
  }

  async login(user: LoginModel) {
    return await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  async signLogin(user: LoginModel): Promise<Observable<LoginModel[]>> {
    const login = await this.login(user);
    LoginService.userSession = await this.setUserSession(login.user.uid);
    await LoginService.userSession.subscribe(s => {
      LoginService.userEmitter.emit(s);
    });
    return await LoginService.userSession;
  }

  async logOut() {
    try {
      const login = await this.afAuth.auth.signOut();
      LoginService.userSession = null;
      LoginService.userEmitter.emit(null);
      return await login;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  loadUser(): Observable<User> {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      }));
  }

  async addLogin(login: LoginModel): Promise<any> {
    const result = await this.createLogin(login);
    login.uid = await result.user.uid;
    const img = await this.uploadImage(login);
    await this.storage.ref(this.getFileURL(login)).getDownloadURL().subscribe(s => {
      return this.loginsCollections.add({
        uid: login.uid,
        email: login.email,
        password: null,
        nome: login.nome,
        sobrenome: login.sobrenome,
        habilidades: login.habilidades,
        image: null,
        imagePath: s
      });
    });
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

  async uploadImage(user: LoginModel) {
    const filePath = this.getFileURL(user);
    const ref = this.storage.ref(filePath);
    return await ref.put(user.image);
  }

  getFileURL(user: LoginModel) {
    return `/images/perfil/${user.uid}/perfil.${this.getFileExtension(user.image.name)}`;
  }

  getFileExtension(fileName) {
    return fileName.substr((fileName.lastIndexOf('.') + 1));
  }
}
