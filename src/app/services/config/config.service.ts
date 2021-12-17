import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ConfigService {

  constructor(
  ) {}

  public getConfigData(){
    return {
      apiBaseUrl: "https://citas.api.greenborn.com.ar/",//"http://localhost:8000/"
      appName: "app_lige_dev_"
    };
  }

}
