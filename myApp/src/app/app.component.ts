import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  key = CryptoJS.enc.Utf8.parse('7061737323313233');
  iv = CryptoJS.enc.Utf8.parse('7061737323313233');
  encrypted: any;
  decrypted: any;
  finalValue: any;
  constructor() {
    this.encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse("It works"), this.key,
    {
        keySize: 128 / 8,
        iv: this.iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

     this.decrypted = CryptoJS.AES.decrypt(this.encrypted, this.key, {
      keySize: 128 / 8,
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
  });
  
  this.finalValue = this.decrypted.toString(CryptoJS.enc.Utf8);
  console.log('Encrypted :' + this.encrypted);
  console.log('Key :' + this.encrypted.key);
  console.log('Salt :' + this.encrypted.salt);
  console.log('iv :' + this.encrypted.iv);
  console.log('Decrypted : ' + this.decrypted);
  console.log('utf8 = ' + this.decrypted.toString(CryptoJS.enc.Utf8));
  }
  
}
