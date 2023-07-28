// Funcion para preguntarle a colfa en que materias se quiere inscribir

let materias={
    'fisica':['Juan','Jose','Jose','Mateo','Juan','Jose'],
    'programacion':['Juan','Jose','Mateo'],
    'Matematicas':['Juan','Jose','Mateo'],
    'BD':['Juan','Jose','Mateo','Venito','Josefa']
}

function question(){
    let materia=prompt('En que materia te gustaria inscribirte: 1-Fisica 2-Programacion 3-Matematicas 4-BD' )
    return materia;
}


function controlador(materia){


            if (materias[materia].length>=5){
                // rta=question()
                
                // document.write(materias.length)
            alert('no es posible inscribirte ya que hay mas de 5 alumos')
            let cantidad=materias[materia].length
            alert(`materia: ${materias[materia]} alumnos: ${cantidad}`)

            // }
            
            }
            else{
                alert(`Materia: ${materia} estudiantes: ${materias[materia]}`)
                let newStudent=prompt('Bienvendio, ingrese su nombre para ser añadido a la lista');
                materias[materia].push(newStudent);
                alert(`Alumnos nueva lista: ${materias[materia]}` )
            }


    }
    
let materia=question()
controlador(materia)




