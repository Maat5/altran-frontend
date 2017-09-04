import { InjectionToken } from '@angular/core';
import { _Config } from './config';
export let Config = new InjectionToken('app.config');

export let InjectionTokenProvider = {
  provider: Config,
  useValue: _Config
};
