import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  _resultado: number;

  onObtenerResultado(resultado: number) {
    this._resultado = resultado;
  }
}
