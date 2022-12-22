import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  textArray: string[] = ['Профессиональное техническое обслуживание',
  'и ремонт автомобилей марки',
  'Hyundai и Kia в Молдове. '];
  displayText: string = '';
  delay: number = 40;
  index: number = 0;
  arrLength: number = this.textArray[0].length;
  textPos: number = 0;
  contents: string = '';
  scrollAt: number = 20;
  row: number = 0;

  ngOnInit(): void {
    this.typeWriter();
  }

  typeWriter() {
    this.contents = ' ';
    this.row = Math.max(0, this.index - this.scrollAt);
    while (this.row < this.index) {
      this.contents += this.textArray[this.row++] + '\n';
    }
    this.displayText = this.contents + this.textArray[this.index].substring(0, this.textPos);
    if (this.textPos++ == this.arrLength) {
      this.textPos = 0;
      this.index++;
      if (this.index != this.arrLength) {
        this.arrLength = this.textArray[this.index].length;
        setTimeout(() => {
          this.typeWriter()
        }, this.delay);
      }
    } else {
      setTimeout(() => {
        this.typeWriter()
      }, this.delay);
    }
  }
}
