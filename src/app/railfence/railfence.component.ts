import { Component, OnInit } from '@angular/core';

import { railfence } from './railfence';


@Component({
  selector: 'app-railfence',
  templateUrl: './railfence.component.html',
  styleUrls: ['./railfence.component.scss']
})
export class RailfenceComponent implements OnInit {

  constructor() { }

  textobj: railfence = new railfence();

  plainTextInput
  cipherTextInput;
  keyInput
  radio;
  isPlaletrue = false;;
  isCipherTrue = false;
  input
  key
  outputT
  rail = []
  output

  ngOnInit() {}

  encrypt(input: any, key: any): any {
    console.log(input)
    console.log(key)
    let result = ''
    for (let i = 0; i < key; i++) {
      this.rail[i] = new Array();
    }
    for (let i = 0; i < key; i++)
      for (let j = 0; j < input.length; j++)
        this.rail[i][j] = '\n';

    let dir_down = false;
    let row = 0, col = 0;

    for (let i = 0; i < input.length; i++) {

      if (row == 0 || row == key - 1)
        dir_down = !dir_down;


      this.rail[row][col++] = input[i];


      dir_down ? row++ : row--;
    }

    for (let i = 0; i < key; i++)
      for (let j = 0; j < input.length; j++)
        if (this.rail[i][j] != '\n')
          result += this.rail[i][j];


    this.textobj.encryptedtext=result
    return this.textobj.encryptedtext

  }
  decrypt(cipher: any, key: any) {
    this.rail = []
    for (let i = 0; i < key; i++) {
      this.rail[i] = new Array();
    }

    let result = '';



    let dir_down;

    let row = 0, col = 0;

    // mark the places with '*' 
    for (let i = 0; i < cipher.length; i++) {
    
      if (row == 0)
        dir_down = true;
      else if (row == key - 1)
        dir_down = false;

      // place the marker 
      this.rail[row][col++] = '*';

      // find the next row using direction flag 
      dir_down ? row++ : row--;
    }

    // now we can construct the fill the rail matrix 
    let index = 0; ``
    for (let i = 0; i < key; i++)
      for (let j = 0; j < cipher.length; j++)
        if (this.rail[i][j] == '*' && index < cipher.length)
          this.rail[i][j] = cipher[index++];


    // now read the matrix in zig-zag manner to construct 
    // the resultant text 


    row = 0, col = 0;
    for (let i = 0; i < cipher.length; i++) {
      // check the direction of flow 
      if (row == 0)
        dir_down = true;
      if (row == key - 1)
        dir_down = false;

      // place the marker 
      if (this.rail[row][col] != '*')
        result += this.rail[row][col++];
        this.textobj.plaintextOutput=result;

      // find the next row using direction flag 
      dir_down ? row++ : row--;
    }
     return (this.textobj.plaintextOutput)

  }



}
  

  ngOnInit() {}
  
}
