
//////////////////////////////////////////////////////////////////////////////////////////////

        // questão 1
        var valor = prompt("Digite um valor");

        if(valor >= 10 ){
    
             alert ("valor maior que 10")
    
        }else if (valor <= 10 && valor >= 1){
    
              alert("Valor menor que 10")
    
        }else{
    
              alert("Valor invalido")
    }
    
    
    
    
///////////////////////////////////////////////////////////////////////////////////////////////
        // questão 2
    
    
        var nota1 = 5;
        var nota2 = 1;
        var nota3  = 6;
        var nota4  = 3;
    
        var media = (nota1 + nota2 + nota3 + nota4)/4 ;
    
        if (media >=6 && media <= 10){
            console.log(media)
            alert('aprovado, parabéns')
    
        }else if (media <= 5 && media >= 0){
             console.log(media)
          alert('reprovado.')


/////////////////////////////////////////////////////////////////////////////////////////////////
    //questão 3

    
    var idade = parseInt (prompt ("Diga sua Idade")); 

    var tempoTrab = parseInt (prompt ("Digite o tempo trabalhado")); 

    var codigoEmp = parseInt (prompt ("Qual cod. empregado")); 
    
    if (idade >= 60 && tempoTrab >= 25) { 

     document.write ("O funcionário " + codigoEmp + " precisa se aposentar, pois tem " 
      + idade + " anos de idade e " + tempoTrab + " anos de trabalho.")

   } else { 

    if (idade < 65) { 

    if (tempoTrab < 30) { 

      document.write ("Não requer aposentadoria"); 

   } else { document.write ("O funcionário " + codigoEmp + " precisa se aposentar, pois tem " 
   + tempoTrab + " anos de trabalho."); 
} 
   } else { document.write ("O funcionário " + codigoEmp + " precisa se aposentar, pois tem " 
   + idade + " anos de idade."); 
   
}

} 

///////////////////////////////////////////////////////////////////////////////////////////////////

      //Questão 4
      
      let productName = "Arroz";
      let unitPrice = 3.00;
      let quantityPurchased = 4;
      let total = quantityPurchased * unitPrice;
      let Total = total.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
      
      if(quantityPurchased <= 5){
        let discount = total * 0.02;
        let totalPrice = total - discount;
        let TotalPrice = totalPrice.toLocaleString("pt-BR", {style:"currency", currency:"BRL"});
        
        console.log(`
        <strong>
        O cliente receberá um desconto de 2% pelo ${productName}.<br>
        valor da compra: ${Total}<br>
        total a pagar(com desconto): ${TotalPrice}
        </strong>
        `)
        
      }else if(quantityPurchased > 5 && quantityPurchased <= 10){
        let discount = total * 0.03;
        let totalPrice = total - discount;
        let TotalPrice = totalPrice.toLocaleString("pt-BR", {style:"currency", currency:"BRL"});
        
        console.log(`
        <strong>
        O cliente receberá um desconto de 3% pelo ${productName}.<br>
        valor da compra: ${Total}<br>
        total a pagar(com desconto): ${TotalPrice}
        </strong>
        `)
        
      }else if(quantityPurchased > 10){
        let discount = total * 0.05;
        let totalPrice = total - discount;
        let TotalPrice = totalPrice.toLocaleString("pt-BR", {style:"currency", currency:"BRL"});
        
        console.log(`
        <strong>
        O cliente receberá um desconto de 5% pelo ${productName}.<br>
        valor da compra: ${Total}<br>
        total a pagar(com desconto): ${TotalPrice}
        </strong>
        `)
        
      }

///////////////////////////////////////////////////////////////////////////////////////////////////
     //questão 5



       var cod = prompt("Digite o código");

       if(cod == 1 ){
    
            alert ("Alimento não-perecível")
    
       }else if (cod >= 2 && cod <= 4){
    
             alert("Alimento perecível")

       }else if (cod >= 5 && cod <= 6){
    
              alert("Vestuário")

       }else if(cod == 7 ){
    
                alert ("Higiene Pessoal")

       }else if (cod >= 8 && cod <= 15){
    
              alert("Limpeza e Utensílios Domésticos")
       
       }else{
  
              alert("Valor invalido")
    }



///////////////////////////////////////////////////////////////////////////////////////////////////
    //questão 6

    var codigo = parseFloat (prompt ("Digite o codigo do produto")); 

    var qtdade = parseFloat (prompt ("Digite a quantidade"));

    var valor = parseFloat (prompt ("Digite o valor"));


    var totaldo100 = (1.70 * qtdade);

        document.write ("O valor do lanche é:"+totaldo100);

    var totaldo101 = (2.30 * qtdade);

       document.write ("O valor do lanche é:"+totaldo101);


    var totaldo102 = (2.60 * qtdade);

       document.write ("O valor do lanche é:"+totaldo102);


    var totaldo103 = (2.40 * qtdade);

       document.write ("O valor do lanche é:"+totaldo103);


    var totaldo104 = (2.50 * qtdade);

        document.write ("O valor do lanche é:"+totaldo104);


    var totaldo105 = (1.00 * qtdade);

       document.write ("O valor do lanche é:"+totaldo105);


/////////////////////////////////////////////////////////////////////////////////////////////////

// Questão 7
let number = 101;

while(number <= 110){
  console.log(`<strong>${number}<strong>`);
  number++; 
}

// Questão 8

let N = 10;

for(let x = 1; x <= N; x++){
  console.log(`<strong>${x}</strong>`)

}

/////////////////////////////////////////////////////////////////////////////////////////////////

// Questão 9
function tabuCalc(){
  let intNumber = window.document.getElementById("intNumber");
  let IntNumber = Number.parseInt(intNumber.value);
  let tabuada = [
      1 * IntNumber,
      2 * IntNumber,
      3 * IntNumber,
      4 * IntNumber,
      5 * IntNumber,
      6 * IntNumber,
      7 * IntNumber,
      8 * IntNumber,
      9 * IntNumber,
      10 * IntNumber
  ];
  let resul = window.document.getElementById("res");
  resul.innerHTML = `
    <strong>
     Tabuada do número: ${IntNumber}<br>
      1 x ${IntNumber} = ${tabuada[0]}<br>
      2 x ${IntNumber} = ${tabuada[1]}<br>
      3 x ${IntNumber} = ${tabuada[2]}<br>
      4 x ${IntNumber} = ${tabuada[3]}<br>
      5 x ${IntNumber} = ${tabuada[4]}<br>
      6 x ${IntNumber} = ${tabuada[5]}<br>
      7 x ${IntNumber} = ${tabuada[6]}<br>
      8 x ${IntNumber} = ${tabuada[7]}<br>
      9 x ${IntNumber} = ${tabuada[8]}<br>
      10 x ${IntNumber} = ${tabuada[9]}
    </strong>
  `;
}

//////////////////////////////////////////////////////////////////////////////////////////////

// Questão 10

console.log("<strong>Ordem crescente:</strong>")
for(let number = 1 ; number <= 10 ; number++){
  console.log(`<strong>${number}</strong>`);
  
}
console.log("<strong>Ordem decrescente:</strong>")
for(let number2 = 10 ; number2 >= 1 ; number2--){
  console.log(`<strong>${number2}</strong>`);
  
}
        }
