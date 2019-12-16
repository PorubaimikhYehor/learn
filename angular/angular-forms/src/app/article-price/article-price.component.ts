import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-article-price',
  templateUrl: './article-price.component.html',
  styleUrls: ['./article-price.component.css']
})
export class ArticlePriceComponent implements OnInit {

  levels = [
    {
      level: 'High School',
      cost: 10
    },
    {
      level: 'Collage',
      cost: 20
    },
    {
      level: 'Univercity',
      cost: 30,
  ];

  paperTypes = [
    {
      type: 'type 1',
      cost: 1
    },
    {
      type: 'type 2',
      cost: 1.2
    },
    {
      type: 'type 3',
      cost: 1.5
    },
    {
      type: 'type 4',
      cost: 2
    },
  ];

  valueForm = {};
  totalPrice: number = 0;

  constructor(
    private fb: FormBuilder
  ) { }
  ngOnInit() {
    this.formInit();
    this.priceForm.valueChanges
      .subscribe((value) => this.price(value)
    );
  }
  formInit() {
    this.priceForm = this.fb.group({
      level: [
        this.levels[0].level,
      ],
      paperType: [
        this.paperTypes[0].type,
      ],
      numberOfPages: [0]
    });
  }
  price(value): void {
    this.valueForm = { ...value };
    // console.log(value);
    const level = this.levels.find((item) => value.level === item.level);
    const type = this.paperTypes.find((item) => value.paperType === item.type);
    this.totalPrice = level.cost * type.cost * value.numberOfPages;
  }

}
