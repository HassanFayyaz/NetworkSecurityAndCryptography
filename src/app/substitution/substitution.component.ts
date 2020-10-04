import { Component, OnInit } from '@angular/core';
import { substitution } from './substitution';

@Component({
  selector: 'app-substitution',
  templateUrl: './substitution.component.html',
  styleUrls: ['./substitution.component.scss']
})
export class SubstitutionComponent implements OnInit {

  constructor() { }

  textobj : substitution = new substitution();

   alphabets = "abcdefghijklmnopqrstuvwxyz"
   substitute = "nopqrstuvwxyzabcdefghijklm"

  ngOnInit() {
  }

  encrypt(){

    var PT = this.textobj.plaintext.replace(/\s*/g,"").toLowerCase();
    
    this.textobj.encryptedtext="";

    for(var i=0;i<PT.length;i++){
      var c= PT.charAt(i);
      var j = this.alphabets.indexOf(c);
      this.textobj.encryptedtext = this.textobj.encryptedtext+ this.substitute.charAt(j);
    }
    console.log(this.textobj.encryptedtext);
  }
   decrypt(){

    var ET = this.textobj.decryptedtext.replace(/\s*/g,"").toLowerCase();

    this.textobj.plaintext2="";

    for(var i=0;i<ET.length;i++){
      var c= ET.charAt(i);
      var j = this.substitute.indexOf(c);
      this.textobj.plaintext2= this.textobj.plaintext2+ this.alphabets.charAt(j);
    }
    console.log(this.textobj.plaintext2);

    
   }

}
