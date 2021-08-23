import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/app.service';
import { comments } from 'src/app/comments.module';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  comments: any[] = [];
  commentsStruct: comments[];
  public comentarios: comments[] = [];

  constructor(private appService: AppService) {}
  filterPost = '';
  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.appService.getAllComments().subscribe((comments) => {
      this.comments.push(comments);
      this.comments.forEach((element) => {
        for (let index = 0; index < element.length; index++) {
          const elemento = element[index];
          this.comentarios.push(elemento);
        }
      });
    });
  }
}
