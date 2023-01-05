import { Component } from '@angular/core';
import { Faq } from './faq.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Preguntas Frecuentes';
  icon: string = './assets/img/arrow-right.png';

  faqs: Faq[] = [
    {
      question: '¿Por qué aprender Angular?',
      answer: 'Porque te ayudará a crear proyectos multiplataforma y escalables.'
    },
    {
      question: '¿Cuándo usar string interpolation?',
      answer: 'Cuando quieras renderizar variables o expresiones en elementos de HTML.'
    },
    {
      question: '¿Cuándo usar property binding?',
      answer: 'Es recomendable usar property binding cuando queramos asignar valores a los atributos HTML.'
    },
    {
      question: '¿Cómo manejar eventos en Angular?',
      answer: 'Hay que crear el método donde se desencadenará el evento en el archivo TS, adicionalmente en HTML agegar la sitaxis "(evento)="metodoDeclardo()" al elemento del que queremos escuchar el evento.'
    },
    {
      question: '¿Cómo funciona NgModel y cuándo usarlo?',
      answer: 'Es una directiva de Angular que nos ayuda a inyectar en el atributo value de un input el contenido de alguna variable de nuestro controlador y al mismo tiempo cachar el evento de teclado para hacer algunas validaciones. La sixtaxis de esta directiva se puede pensar con la nalogía de dos bananas dentro de una caja, ya que se requeriere la paalabra reviservaada "ngModel" enceerrada por parentesís y después por corchetes.'
    },
    {
      question: '¿Cómo funciona NgIf?',
      answer: 'NgIf es una directiva que nos ayuda a hacer uso del estructuras de control para mostrar o no elementos en HTML. se declara en el elemento que queremos condicionar de mostrarse o no.'
    },
    {
      question: '¿Cómo hacer bucles For en Angular?',
      answer: 'Para hacer iteraciones, se hace uso de la directiva NgFor con la siguiente sintaxis: "let item of list_items" en el elemnto que queremos que se repita en cada iteración.'
    },
    {
      question: '¿Cómo funciona NgSwitch?',
      answer: 'La directiva NgSwitch, se puede utilizar cuando tenemos multiplés condiciones a evaluar. Para su implementación hay que hacer uso property binding en un elemento padre, asignando la variable o condición que se evaluará [ngSwitch]="valor". Después en cada caso de nuestro Switch, agregar un elemento hijo con el valor que deseamos cachar, ejemplo: *ngSwitchCase="name".'
    }
  ]
}
