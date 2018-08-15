import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';
import { headersToString } from 'selenium-webdriver/http';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor() { }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}


class Person {
  first_name: string;
  last_name: string;
  age: number;

  constructor(first_name: string, last_name: string, age: number) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
  }

  greet() {
    console.log('Hello', this.first_name);
  }

  ageInYears(years: number): number {
    return this.age + years;
  }
}


class Report {
  data: string[];
  age: number;

  constructor(data: string[], age: number) {
    this.data = data;
    this.age = age;
  }

  run() {
    this.data.forEach(
      function(line) { console.log(line); }
    );
    console.log(this.age);
  }
}

class TabbedReport extends Report {
  headers: string[];

  constructor(headers: string[], data: string[], age: number) {
    super(data, age);
    this.headers = headers;
  }

  run() {
    console.log(this.headers);
    super.run();
  }
}
