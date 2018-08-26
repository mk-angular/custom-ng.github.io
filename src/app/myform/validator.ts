import { AbstractControl } from '@angular/forms';


export const nameLengthCheck = (length: number) => {
    return function(control: AbstractControl) {
        if ( control && ( control.value !== null || control.value !== undefined ) ) {
            if ( control.value.length < length ) {
                return { isError: true };
            }

        }

        return null;
    }
}