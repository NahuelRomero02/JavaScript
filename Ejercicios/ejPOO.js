class Celulares{
    constructor(modelo,color,peso,tamaño,camara,ram,estado){
    this.modelo=modelo;
    this.color=color;
    this.peso=peso;
    this.tamaño=tamaño;
    this.camara=camara;
    this.ram=ram;   
    this.estado=estado;
    }
    botonFuncional(){
        if(this.estado==false){
            
            return `El telefono esta apagado`;
            // this.estado=true;
        }
        // set this.estado='';
        else if (this.estado==true){
            return 'El telefono esta prendido';

        }

    }
    reiniciar(){
        return ` El telefono: ${this.modelo} se esta reiniciando` ;
    }
    toamrFoto(){
        alert(`El telefono ${this.modelo} tomo una foto con una calidad de ${this.camara}`)
    }
    grabar(){
        console.log(`El telefono de color: ${this.color} ha iniciado la grabacion exitosamente.`)
    }
    getDatos(){
        document.write(`Modelo: <b>${this.modelo}</b><br>`) 
        document.write(`Color: <b>${this.color}</b><br>`)
        document.write(`Pulgadas: <b>${this.tamaño}</b><br>`)
        document.write(`Peso: <b>${this.peso}</b><br>`)
        document.write(`Camara: <b>${this.camara}</b><br>`)
        document.write(`RAM: <b>${this.ram}</b><br>`)
    }
}

const celular1= new Celulares('Samsung','Black','150g',"6'",'48mpx','16ram',false)
// document.write(celular1.botonFuncional())
// document.write(celular1.reiniciar())
// celular1.toamrFoto()
// celular1.grabar()
celular1.getDatos()