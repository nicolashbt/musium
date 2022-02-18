import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'minuteSeconds'
})
export class DurationPipe implements PipeTransform {
    transform(value: number): string {
        const minutes: number = Math.floor(value / 60);
        const seconds: number = (value - minutes * 60);
        return minutes + ':' + seconds.toString().padStart(2,"0");;
    }
}