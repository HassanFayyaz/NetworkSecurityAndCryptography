import { Component, OnInit } from '@angular/core';
import { main } from './main';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {

 arr =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 textobj : main = new main();

  constructor() { }

  ngOnInit() {  
  }

  encryption(){    
    
    var PT = this.textobj.plaintext.replace(/\s*/g,"");
    var KPT = this.textobj.key1.toString().replace(/\s*/g,"");

    // console.log(PT);
    // console.log(KPT);

    var XPT = 0;
    var XplusK = 0;
    var YPT = 0;
    var ET = "";

    for(var i=0;i<PT.length;i++){

      XPT =this.arr.indexOf(PT[i].toUpperCase());

      // console.log(XPT);

      XplusK = XPT + parseInt(KPT);

      // console.log(XplusK);

      YPT = XplusK % 26;
      ET += this.arr[YPT];     
    }
    console.log(ET);
    this.textobj.encryptedtext=ET;
   
  }

  decryption(){
   
    var ET = this.textobj.decryptedtext;
    var KET= this.textobj.key2;

    var XET = 0;
    var YminusK = 0;
    var YET = 0;
    var PT = "";

    for(var i=0;i<ET.length;i++){

      YET= this.arr.indexOf(ET[i].toUpperCase());
      YminusK = YET - KET;
      XET = YminusK % 26;
    
      if(XET < 0){
        XET  = 26 - Math.abs(XET);
      }
      PT += this.arr[XET];
    }

    console.log(PT);
    this.textobj.plaintext2=PT;
  }
}

