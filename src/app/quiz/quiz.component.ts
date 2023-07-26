import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit{
  constructor(private quiz: QuizService) {}

  ngOnInit(): void {
      // console.log(this.quiz)
  }
}