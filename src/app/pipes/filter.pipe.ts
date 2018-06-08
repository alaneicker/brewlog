import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterPipe',
    pure: false
})

export class FilterPipe implements PipeTransform {
    transform(items: any[], args: string): any {
        return items.filter(item => item.beerName.toLowerCase().match(args.toLowerCase()));
    }
}
