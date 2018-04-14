import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent {
    private hide: boolean = false;

    @Input() api: any;

    @Output() onExit = new EventEmitter<any>();

    private exit(item) {
        this.hide = true;
        setTimeout(()=> { this.onExit.emit(item); }, 500);
        //this.onExit.emit(item);
    }
}
