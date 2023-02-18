
function runProgram (extra = false) {
  //Variables utiles 
  var historicoRecargos = ' ------   RECARGOS   -------'

  //Precio base de la cotización, en quetzales, lo puede cambiar
  var precio_base = 2000

  //Valores de los recargos 
  var edad_18 = 0.1 // 10%
  var edad_25 = 0.2 // 20%
  var edad_50 = 0.3 // 30%

  var casado_18 = 0.1 // 10%
  var casado_25 = 0.2 // 20%
  var casado_50 = 0.3 // 30%

  var hijos_recargo = 0.2 // 20%
  
  var propiedades_recargo = 0.35 // 35%
  var salario_recargo = 0.05 // 35%

  //Recargo
  var recargo = 0
  var recargo_total = 0

  //Precio final 
  var precio_final = 0

  //Mensajes de alerta para ingresar datos 
  var nombre = prompt("Ingrese su nombre, por favor")
  var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")

  //convirtiendo las edades ingresadas a números
  var edad_numero = parseInt(edad)
  if (isNaN(edad_numero) || edad_numero < 18) {
    alert("El valor ingresado no es válido")
    return
  }

  var casado = prompt("¿Está casado actualmente?", "si/no")
  //Comprobamos la edad del cónyuge, solamente si se está casado/a
  var edad_conyuge
  var edad_conyuge_numero = 0
  if("SI" == casado.toUpperCase()){
    edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
    edad_conyuge_numero = parseInt(edad_conyuge)
    if (isNaN(edad_conyuge_numero)) {
      alert("El valor ingresado no es válido")
      return
    }
  }

  var hijos = prompt("¿Tiene hijos o hijas?", "si/no")
  //Comprobamos la cantidad de hijos solamente si los tienen
  /**
   * 1. convierta la cantidad de hijos a numero
   */
  var cantidad_hijos
  var cantidad_hijos_numero = 0
  if("SI" == hijos.toUpperCase()){
    cantidad_hijos = prompt("¿Cuantos hijos tiene? Ingrese solamente números ")
    cantidad_hijos_numero = parseInt(cantidad_hijos)
    if (isNaN(cantidad_hijos_numero)) {
      alert("El valor ingresado no es válido")
      return
    }
  }

  //Aquí debe calcular el recargo total basado en las respuestas ingresadas

  //Aquí es donde debe de calcular los recargos y el valor final
  //Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
  if(edad_numero>=18 && edad_numero<25){
    //Calculamos el recargo en base a la edad 
    recargo = precio_base * edad_18
    //Sumamos todos los recargos que hemos obtenido
    recargo_total = recargo_total + recargo

    historicoRecargos = `${historicoRecargos}
      Recargo por edad Rango 1 (${edad_18}) =     ${recargo}
    `
  //aqui puede colocar un else if() con el siguiente rango
  } else if(edad_numero>=25 && edad_numero<50){
    //Calculamos el recargo en base a la edad 
    recargo = precio_base * edad_25
    //Sumamos todos los recargos que hemos obtenido
    recargo_total = recargo_total + recargo

    historicoRecargos = `${historicoRecargos}
      Recargo por edad Rango 2 (${edad_25}) =     ${recargo}
    `
  } else if(edad_numero>=50){
    //Calculamos el recargo en base a la edad 
    recargo = precio_base * edad_50
    //Sumamos todos los recargos que hemos obtenido
    recargo_total = recargo_total + recargo

    historicoRecargos = `${historicoRecargos}
      Recargo por edad Rango 3 (${edad_50}) =     ${recargo}
    `
  }

  /** 
   * 2. Recargo por la edad del conyuge
   */
  if(edad_conyuge_numero>=18 && edad_conyuge_numero<25){
    //Calculamos el recargo en base a la edad 
    recargo = precio_base * casado_18
    //Sumamos todos los recargos que hemos obtenido
    recargo_total = recargo_total + recargo

    historicoRecargos = `${historicoRecargos}
      Recargo por edad del conyuge Rango 1 (${casado_18}) =     ${recargo}
    `

  //aqui puede colocar un else if() con el siguiente rango
  } else if(edad_conyuge_numero>=25 && edad_conyuge_numero<50){
    //Calculamos el recargo en base a la edad 
    recargo = precio_base * casado_25
    //Sumamos todos los recargos que hemos obtenido
    recargo_total = recargo_total + recargo
    
    historicoRecargos = `${historicoRecargos}
      Recargo por edad del conyuge Rango 2 (${casado_25}) =     ${recargo}
    `
  } else if(edad_conyuge_numero>=50){
    //Calculamos el recargo en base a la edad 
    recargo = precio_base * casado_50
    //Sumamos todos los recargos que hemos obtenido
    recargo_total = recargo_total + recargo
    
    historicoRecargos = `${historicoRecargos}
      Recargo por edad del conyuge Rango 3 (${casado_50}) =     ${recargo}
    `
  }

  /**
   * 3. Recargo por la cantidad de hijos 
   */ 
  if(cantidad_hijos_numero > 0){
    //Calculamos el recargo en base a la cantidad de hijos 
    recargo = precio_base * (cantidad_hijos_numero * hijos_recargo)
    //Sumamos todos los recargos que hemos obtenido
    recargo_total = recargo_total + recargo
    
    historicoRecargos = `${historicoRecargos}
      Recargo por cantidad de hijos (${hijos_recargo} x ${cantidad_hijos_numero} hijos) =     ${recargo}
    `
  } 

  
  /**
   * Extra
   */ 
  if (extra) {
    var propiedades = prompt("¿Tiene propiedades?", "si/no")
    //Comprobamos la cantidad de hijos solamente si los tienen
    /**
     * 1. convierta la cantidad de hijos a numero
     */
    var cantidad_propiedades
    var cantidad_propiedades_numero = 0
    if("SI" == propiedades.toUpperCase()){
      cantidad_propiedades = prompt("¿Cuantas propiedades tiene? Ingrese solamente números ")
      cantidad_propiedades_numero = parseInt(cantidad_propiedades)
      if (isNaN(cantidad_propiedades_numero)) {
        alert("El valor ingresado no es válido")
        return
      }
    }
    
    var cantidad_salario
    var cantidad_salario_numero = 0
    cantidad_salario = prompt("¿Cuál es el salario que recibe mensualmente? Ingrese solamente números ")
    cantidad_salario_numero = parseInt(cantidad_salario)
    if (isNaN(cantidad_salario_numero)) {
      alert("El valor ingresado no es válido")
      return
    }
    
    if(cantidad_propiedades_numero > 0){
      //Calculamos el recargo en base a la cantidad de propiedades 
      recargo = precio_base * (cantidad_propiedades_numero * propiedades_recargo)
      //Sumamos todos los recargos que hemos obtenido
      recargo_total = recargo_total + recargo

      historicoRecargos = `${historicoRecargos}
      Recargo por cantidad de propiedades (${propiedades_recargo} x ${cantidad_propiedades_numero} hijos) =     ${recargo}
      `
    } 
    if(cantidad_salario_numero > 0){
      //Calculamos el recargo en base a la cantidad de salario 
      recargo = cantidad_salario_numero * salario_recargo
      //Sumamos todos los recargos que hemos obtenido
      recargo_total = recargo_total + recargo
      
      historicoRecargos = `${historicoRecargos}
      Recargo por salario percibido (${salario_recargo}) sobre el salario =     ${recargo}
      `
    } 
  }
  historicoRecargos = `${historicoRecargos}---   ---   ---   ---   ---   ---   ---   ---`

  precio_final = precio_base + recargo_total
  //Resultado
  alert (`
    Para el asegurado ${nombre.toUpperCase()}
    El recargo total sera de: ${recargo_total}
    El precio sera de: ${precio_final}

    ${historicoRecargos}
  `)

}

function setEvent () {
  var buttonElement = document.getElementById('actionButton')
  if (buttonElement != null) {
    buttonElement.onclick = function () { runProgram() }
  }
  var buttonElement = document.getElementById('actionButtonExtra')
  if (buttonElement != null) {
    buttonElement.onclick = function () {
      var continuar = ""
      while (continuar.toLowerCase() != "salir") {
        runProgram(true)
        continuar = prompt("¿Desea Salir?", "salir")
      }
    }
  }
}

setEvent()