
export class Pelicula{
    /*public titulo:string; // prpiedades de la clase
    public year:number;
    public image:string;

    constructor(titulo,year,image){
        this.titulo=titulo;
        this.year=year;
        this.image=image;
    }*/
    constructor( // esto es lo mismo que la parte de arriab que esta comentada
                // esto permite hacer las 3 cosas: definir la propiedad, pasarla como parametro y luego asignarle un valor
        public titulo:string,
        public year:number,
        public image:string //son parametros del objeto
    ){}
}


//public: se pueden utilizar tanto fuera como dentro de la clase
//protected: dentro de la clase y en las clases que se hereden 
//privade:solo se pueden utilizar dentro de la misma clase