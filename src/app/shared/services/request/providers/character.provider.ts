import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericRequest } from '../genericRequest/generic.request';
@Injectable({
    providedIn : 'root'
})
export class CharacterProvider extends GenericRequest<any> {
    constructor(http: HttpClient) {
        super('characters', http);
    }
}
