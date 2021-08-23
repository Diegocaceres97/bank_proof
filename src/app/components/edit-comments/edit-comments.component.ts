import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'app-edit-comments',
  templateUrl: './edit-comments.component.html',
  styleUrls: ['./edit-comments.component.css'],
})
export class EditCommentsComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  public comment: any = [];

  button: string = 'Agregar';
  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      comentario: ['', [Validators.required]],
    });
  }
  ngAfterViewInit(): void {
    this.cargarComentario();
  }

  ngOnInit(): void {}

  cargarComentario() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.button = 'Editar';
      this.appService.getComment(id).subscribe((comments) => {
        this.comment[0] = comments;
      });
    }
  }
  onUpdate() {
    if (this.button === 'Agregar') {
    }
  }
}
