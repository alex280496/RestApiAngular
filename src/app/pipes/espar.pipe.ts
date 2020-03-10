import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'espar'
})
export class EsParPipe implements PipeTransform{
    transform(value:any){ //el value es el valor que me llega desde la vista al invocar el pipe 'espar'
        var espar="no es un numero par ";
        if (value %2 == 0){
            espar="es un numero par";
        }
        return "El anio es: "+ value +" y " +espar;
    }
}
