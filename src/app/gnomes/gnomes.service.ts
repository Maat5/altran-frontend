import { Injectable } from '@angular/core';
import { GnomeInterface } from '../interfaces/gnome';

@Injectable()
export class GnomesService {
  private _profile: any = {};
  private _data: Array<GnomeInterface> = [];

  constructor() { }

  set data(items: Array<GnomeInterface>) {
    this._data = items;
  }

  get data(): Array<GnomeInterface> {
    return this._data;
  }

  set profile(profile: GnomeInterface) {
    this._profile = profile;
    localStorage.setItem('gnome', JSON.stringify(profile));
  }

  get profile(): GnomeInterface {
    let profile = localStorage.getItem('gnome');
    return JSON.parse(profile);
  }
}
