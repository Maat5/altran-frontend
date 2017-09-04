import { Component, Inject } from '@angular/core';
import { ApiRequestsService } from './api/requests.service';
import { Config } from  './app.config';
import { ConfigInterface, GnomeInterface } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    @Inject(Config) private config: ConfigInterface,
    private api: ApiRequestsService
  ){}

  ngOnInit() {
    this.api.get(this.config.apiUrl)
      .subscribe(
        data  => console.log('data', data),
        error => console.log('error', error)
      )
  }
}
