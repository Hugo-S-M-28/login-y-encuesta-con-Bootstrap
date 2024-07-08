import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('dataForm') form!: ElementRef;  // Usando '!' para indicar que será inicializada más tarde

  showPopup: boolean = false;
  responseData: any = {};

  constructor() {}

  ngOnInit(): void {}

  onSubmit(event: Event) {
    event.preventDefault();

    const form = this.form.nativeElement;
    const formData = new FormData(form);

    const interests: string[] = [];
    formData.forEach((value, key) => {
      if (key === 'academicInterests') {
        interests.push(value as string);
      }
    });

    this.responseData = {
      name: formData.get('name'),
      generation: formData.get('generation'),
      career: formData.get('career'),
      message: formData.get('message'),
      academicInterests: interests,
      birthdate: formData.get('birthdate')
    };

    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }
}
