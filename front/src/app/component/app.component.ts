import { Component } from '@angular/core';
import { IndexerService } from '../service/indexer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private start: string;
  private tags: string[];
  private connected: any[];
  private path: any[];

  private selectedAPI: any;
  constructor(private service: IndexerService) {
    service.getTags().subscribe(res => this.tags = res);
  }

  private tagSelect(item) {
    this.start = item.name;
    this.service.getReachable(item.name).subscribe(res => this.connected = res);
  }
  private complete(item) {
    this.service.getPath(this.start, item.name).subscribe(res => this.path = res);
  }

  private deselectAPI(item) {
    console.log("abort");
    this.selectedAPI = null;
  }

  private selectAPI(item) {
    console.log("Selected: " + item);
    this.selectedAPI = item;
  }
}
