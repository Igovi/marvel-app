import { Observable } from "rxjs";
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from "src/environments/environment";
import { Inject, Injectable } from "@angular/core";

const API_URL = environment.apiUrl
const PUBLIC_KEY = environment.publicKey
const TS = environment.ts
const HASH = environment.hash

@Injectable()
export class GenericRequest<T> {
    constructor(
        @Inject(String) private path: string,
        private http: HttpClient,

    ) {}

    getGeneric(offset?:number,limit?:number): Observable<T[]> {
        const URL = this.getUrl(offset,limit);
        return this.http.get<T[]>(URL);
    }

    getUrl(offset?:number,limit?:number) {
        (limit !== undefined) ? null : limit = 8;
        return (offset !== undefined) ? `${API_URL}/${this.path}?limit=${limit}&offset=${offset}&ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}` : `${API_URL}/${this.path}?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`;
    }
}