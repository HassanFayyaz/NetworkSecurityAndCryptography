import { Component, OnInit } from '@angular/core';
import { vigenere } from './vigenere';

@Component({
  selector: 'app-vigenere',
  templateUrl: './vigenere.component.html',
  styleUrls: ['./vigenere.component.scss']
})
export class VigenereComponent implements OnInit {

  textobj : vigenere = new vigenere();

  arr =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  constructor() { }

  ngOnInit() {
  }
   encrypt() {
     var word = this.textobj.plaintext.replace(/\s*/g,"").toLowerCase();
     var keyword = this.textobj.key1.toString().replace(/\s*/g,"").toLowerCase();
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var encryptWord = "";
    for (var i = 0;i < word.length;i++) {
      encryptWord += alphabet.charAt((alphabet.indexOf(word.charAt(i)) + alphabet.indexOf(keyword.charAt(i % keyword.length))) % alphabet.length);
    }
    console.log(encryptWord);
    this.textobj.encryptedtext=encryptWord;
  }

  decrypt() {
    var word = this.textobj.decryptedtext.replace(/\s*/g,"").toLowerCase();
    var keyword= this.textobj.key2.toString().replace(/\s*/g,"").toLowerCase();

    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var decryptWord = "";
    for (var i = 0;i < word.length;i++) {
      decryptWord += alphabet.charAt(((alphabet.indexOf(word.charAt(i)) + alphabet.length) - alphabet.indexOf(keyword.charAt(i % keyword.length))) % alphabet.length);
    }
    console.log(decryptWord);
    this.textobj.plaintext2=decryptWord;
  }

}
