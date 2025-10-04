import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AppConfig {
    api: string;
    response: any[];
}

@Injectable({ providedIn: 'root' })
export class ConfigService {

    private mainUrl = '/assets/main.json';
    private configUrl = '/assets/config.json';

    constructor(private http: HttpClient) { }


    loadMain(): Observable<AppConfig> {
        return this.http.get<AppConfig>(this.mainUrl);
    }

    loadConfig(): Observable<AppConfig> {
        return this.http.get<AppConfig>(this.configUrl);
    }
}
