import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  valor1: number = 0;
  valor2: number = 0;
  resultado: number | string = '';
  error: string = '';

  operar(operacion: string) {
    switch (operacion) {
      case 'sumar':
        this.resultado = this.valor1 + this.valor2;
        break;
      case 'restar':
        this.resultado = this.valor1 - this.valor2;
        break;
      case 'multiplicar':
        this.resultado = this.valor1 * this.valor2;
        break;
      case 'dividir':
        if (this.valor2 == 0) {
          this.resultado = 'Error: División por cero';
        } else {
          this.resultado = this.valor1 / this.valor2;
        }
        break;
    }
    this.validarResultado();
  }

  validarResultado() {
    if (typeof this.resultado === 'number') {
      if (this.resultado > 10) {
        this.error = 'El resultado es mayor a 10';
      } else if (this.resultado < 10) {
        this.error = 'El resultado es menor a 10';
      } else {
        this.error = 'El resultado es igual a 10';
      }
    } else {
      this.error = '';
    }
  }
}
