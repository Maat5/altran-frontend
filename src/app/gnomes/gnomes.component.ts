import { Component, Inject, OnInit} from '@angular/core';
import { ApiRequestsService } from '../api/requests.service';
import { Config } from  '../app.config';
import { ConfigInterface, GnomeInterface } from '../interfaces';
import { GnomesService } from './gnomes.service';

@Component({
  selector: 'gnomes',
  templateUrl: './gnomes.component.html',
  styleUrls: ['./gnomes.component.scss']
})
export class GnomesComponent implements OnInit {

  _gnomes: Array<GnomeInterface> = [];
  gnomes: Array<GnomeInterface> = [];
  filtered: Array<GnomeInterface> = [];
  error: Boolean = false;

  constructor(
    @Inject(Config) private config: ConfigInterface,
    private api: ApiRequestsService,
    private gnomesService: GnomesService
  ){}

  ngOnInit() {
    this.getGnomes();
  }

  // call gnome data
  getGnomes() {
    this.api.get(this.config.apiUrl)
      .subscribe(
        data  => {
          this._gnomes = data['Brastlewark'] || [];
          this.gnomes = data['Brastlewark'] || [];
          this.gnomesService.data = this._gnomes;
          this.error = false;
        },
        error => {
          console.log('error', error);
          this.error = true;
        }
      )
  }

  // update gnomes lookup
  filterUpdated(gnomes: Array<any>) {
    this.gnomes = gnomes;
  }

  // update content on page change
  pageUpdated(content: Array<any>) {
    this.filtered = content;
  }

  selectGnome(gnome: GnomeInterface) {
    this.gnomesService.profile = gnome;
  }

}
