import { Component } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'has-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello world';
  foto = 'favicon.ico';
  peso = 0;
  altura = 0;

  exibir(){

    alert(this.title);
  }

  enviar(){
    let calculo = this.peso / (this.altura * this.altura);
    alert (calculo);
    //alert (this.peso/(this.altura * this.altura));

  }
}
