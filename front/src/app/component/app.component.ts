import { Component } from '@angular/core';
import { IndexerService } from '../service/indexer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private tags: string[];
  private apis: any[];
  constructor(private service: IndexerService) {
    service.getTags().subscribe(res => this.tags = res);
  }

  private tagSelect() {

  }
}
