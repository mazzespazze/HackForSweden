import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent {
    @Input() title = "NaN";
    @Input() items: string[];
    @Output() onClicked = new EventEmitter<any>();

    private clicked(item) {
        this.onClicked.emit(item);
    }
}
