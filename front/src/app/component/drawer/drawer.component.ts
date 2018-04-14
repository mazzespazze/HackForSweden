import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent {
    private selected: string;
    private filter: string = "";
    @Input() title = "NaN";
    @Input() items = [];
    @Output() onClicked = new EventEmitter<any>();

    private clicked(item) {
        this.selected = item.name;
        this.onClicked.emit(item);
    }

    private getFiltered() {
        let result = [];
        if(this.items)
            for (var i = 0; i < this.items.length; i++) 
                if(this.items[i].name.toUpperCase().startsWith(this.filter.toUpperCase()))
                    result.push(this.items[i]);
        return result;
    }
}
