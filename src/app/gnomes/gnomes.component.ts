import { Component, Inject, OnInit} from '@angular/core';
import { ApiRequestsService } from '../api/requests.service';
import { Config } from  '../app.config';
import { ConfigInterface, GnomeInterface } from '../interfaces';

@Component({
  selector: 'gnomes',
  templateUrl: './gnomes.component.html',
  styleUrls: ['./gnomes.component.scss']
})
export class GnomesComponent implements OnInit {

  gnomes: Array<GnomeInterface> = [];

  constructor(
    @Inject(Config) private config: ConfigInterface,
    private api: ApiRequestsService
  ){}

  ngOnInit() {
    this.getGnomes();
  }

  getGnomes() {
    this.api.get(this.config.apiUrl)
      .subscribe(
        data  => this.gnomes = data['Brastlewark'] || [],
        error => console.log('error', error)
      )
  }

}
