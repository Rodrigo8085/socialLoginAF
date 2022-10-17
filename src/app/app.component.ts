import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'socialLoginAF';

// TODO: Replace the following with your app's Firebase project configuration
 firebaseConfig: {
  apiKey: "AIzaSyBtaVyaWNv8EH0lGYQWD6pAw2PNcRSt5-4",
  authDomain: "socialloginaf.firebaseapp.com",
  databaseURL: "https://socialloginaf-default-rtdb.firebaseio.com",
  projectId: "socialloginaf",
  storageBucket: "socialloginaf.appspot.com",
  messagingSenderId: "383331885140",
  appId: "1:383331885140:web:c9aa926b968ce5b1684dc1"
};

const app = initializeApp(firebaseConfig);
}
