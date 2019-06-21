import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() resultado = new EventEmitter<number>();
  private _operandoA: number;
  private _operandoB: number;

  constructor() { }

  getOperandoA() {
    return this._operandoA;
  }

  getOperandoB() {
    return this._operandoB;
  }

  setOperandoA(event: Event) {
    this._operandoA = Number((<HTMLInputElement>event.target).value);
  }

  setOperandoB(event: Event) {
    this._operandoB = Number((<HTMLInputElement>event.target).value);
  }

  onSuma() {
    this.resultado.emit(this._operandoA + this._operandoB);
  }

}
