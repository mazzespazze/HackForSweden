import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent {
    private selected: string;
    @Input() title = "NaN";
    @Input() items: string[];
    @Output() onClicked = new EventEmitter<any>();

    private clicked(item) {
        this.selected = item.name;
        this.onClicked.emit(item);
    }
}
