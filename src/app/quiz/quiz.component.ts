import { Component } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  constructor(public quiz: QuizService) { }

  get showSubmitButton() {
    return this.quiz.resultsAllowed
  }

  onSubmit(): void {
    this.quiz.checkAnswers()
  }
}
