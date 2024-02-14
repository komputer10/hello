import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Output() prev = new EventEmitter<boolean>();
  @Output() next = new EventEmitter<boolean>();
  
  onPrev(){
    this.prev.emit(true)
  }

  onNext(){
    this.next.emit(true)
  }
  
}
