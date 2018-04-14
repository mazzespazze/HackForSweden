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

    private joinItems(): any[] {
        let result = [];
        if(this.items.length > 0 && !this.items[0].url)
            return this.items;
        for (var i = 0; i < this.items.length-1; i++) {
            let elem = this.items[i];
            elem.tag = this.items[i+1].name;
            result.push(elem);
        }
        return result;
    }

    private getFiltered() {
        let result = [];
        let items = this.joinItems();
        if(items)
            for (var i = 0; i < items.length; i++) 
                if(items[i].name.toUpperCase().startsWith(this.filter.toUpperCase()))
                    result.push(items[i]);
        return result;
    }
}
