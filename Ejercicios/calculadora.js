class Calculadora{
    constructor(num1,num2){
        this.num1=num1
        this.num2=num2
        // this.numIn=numeroIngresado
    }
    sumar(){
    let total=this.num1+this.num2;
    return total;
    }
    restar(){
        let total2=this.num1-this.num2;
        return total2
    }
    multiplicar(){
        let total3=this.num1*this.num2;
        return total3;
    }
    dividir(){
        let total4=this.num1/this.num2;
        return total4
    }
    potenciar(){
        let total5=this.num1**this.num2;
        return total5;
    }
    raizCuadrada(){
        let total5= Math.sqrt(this.num1);
        return total5;
    }
    raizCubica(){
        let total6= Math.cbrt(this.num1);
        return total6;
    }
}


let valor=prompt('Que operacion desea realizar: 1-Sumar 2-Restar 3-Multiplicar 4-Dividir 5-Potenciar 6-Raiz Cuadrada 7-Raiz cubica')

if (valor=='1' || valor=='2' || valor=='3'|| valor=='4'){
    var numIn=prompt('ingrese un valor: ')
    var numIn2=prompt('ingrese un valor: ')
    const calculadora=new Calculadora(parseInt(numIn),parseInt(numIn2))

    if (valor=='1'){
        // alert(calculadora.sumar(numIn,numIn2))
        resultado=calculadora.sumar(numIn,numIn2)
        alert(resultado)
    }

    else if(valor=='2'){
        // alert(calculadora.restar(parseInt(numIn),parseInt(numIn2)))
        resultado2=calculadora.restar(numIn,numIn2)
        alert(resultado2)
    }
    else if(valor=='3'){
        resultado3=calculadora.multiplicar(numIn,numIn2);
        alert(resultado3)
    }
    else if(valor='4'){
        resultado4=calculadora.dividir(numIn,numIn2)
        alert(resultado4)
    }
}
else if(valor=='5'|| valor=='6' ||  valor=='7'){
    
    
    if(valor=='5'){
        let number1=prompt('Base: ')
        let number2=prompt('Exponente: ')
        const calculadora=new Calculadora(parseInt(number1),parseInt(number2))
        resultado5=calculadora.potenciar(parseInt(number1),parseInt(number2))
        alert(resultado5)
    }
    else if (valor=='6'){
        raiz=prompt('Raiz cuadrada de: ')
        const calculadora2 = new Calculadora(parseInt(raiz));
        resultado6=calculadora2.raizCuadrada(parseInt(raiz))
        alert(resultado6)
    }
    else if(valor=='7'){
        raizCub=prompt('Raiz cubica de: ')
        const calculadora3= new Calculadora(parseInt(raizCub))
        resultado7=calculadora3.raizCubica()
        alert(resultado7)
    }
}