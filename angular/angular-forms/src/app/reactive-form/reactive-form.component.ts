import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  // modelId = 1;
  // model = new Hero(this.modelId, '', '');

  submitted = false;
  heroForm: FormGroup;

  onSubmit() { this.submitted = true; }

  newHero() {
  }
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.heroForm.valueChanges
      .subscribe((value: any) => {
        console.log(value);
      });
  }
  formInit(): void {
    this.heroForm = this.fb.group({
      name: [
        'brain',
        Validators.required
      ],
      power: [
        this.powers[0],
        Validators.required
      ],
      alterEgo: [],
    });
  }
}
