import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'summary'
})
export class StringReducer implements PipeTransform {
    transform(value : any, limit?: any) {

        if(!value) {
            return null;
        }

        return value.substr(0, limit) + '...';
    }
}