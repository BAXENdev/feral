import { Component } from '@angular/core';
import { FeralApiService } from './services/FeralAPIService/feral-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'feral';

  constructor(private feralAPIService: FeralApiService) {
    feralAPIService.init()
  }
}
