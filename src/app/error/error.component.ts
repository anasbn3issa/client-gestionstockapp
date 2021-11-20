import { Component, OnInit,SimpleChanges,Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  @Input() myError;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.myError.currentValue.required){
      this.myError="this field is necessary"
    }
    else if (changes.myError.currentValue.minlength){
      this.myError="this field must contain at least "+changes.myError.currentValue.minlength.requiredLength+" characters"
    }
    else if (changes.myError.currentValue.pattern!=null){
      this.myError="this field must follow a certain pattern"
    }
  }

}
