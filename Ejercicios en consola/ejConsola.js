const materias ={
    'fisica': [92,6,3],
    'programacion': [67,1,2],
    'BD': [53,1,4],
    'sistemas operativos': [91,9,1],
}

class Notas{
    constructor(materias){
        this.materias=materias;
        this.materia=this.materia;
        this.count=0;
    }

verificar(){  
    
for (let m in this.materias) {
   

    this.materia=this.materias[m]
    console.log(this.materia)

    let asistencias=this.materia[0];
    let promedioNotas=this.materia[1];
    let trabajosPracticos=this.materia[2];
    

    if (90<asistencias){
        console.log('%c aprobado ','color:green')

    }
    else{
        console.log(asistencias)
        console.log('%c desaprobado','color:red')
      
    }
    if (promedioNotas>7){
        this.count++;
        console.log('%c aprobado ','color: green')
    }
    else{
        console.log('%c desaprobado','color:red')
        
    }
    if(trabajosPracticos>=3){
        this.count++;
        console.log('%c aprobado','color:green')

    }
    else{
        console.log('%c desaprobado','color: red')
 
    }
    alert(this.count)
    if (this.count<=3){
        console.log('situacion final: regular')
    }
    else{
        console.log('situacion final: libre')
    }
        }
    }
}

let nota=new Notas(materias)
nota.verificar()