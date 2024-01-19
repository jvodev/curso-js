// Produto -> aumento, desconto
// Camiseta = cor, caneca = material, lapis
// function Produto(nome, preco) {
//     this.nome = nome
//     this.preco = preco
// }

// Produto.prototype.aumento = function(quantia) {
//     this.preco += quantia;
// }

// Produto.prototype.desconto = function(quantia) {
//     this.preco -= quantia;
// }

// function Camiseta(nome, preco, cor) {
//     Produto.call(this, nome, preco);
// }
// Camiseta.prototype = Object.create(Produto.prototype);

// const camiseta = new Camiseta('regata', 7.5, 'preta')
// camiseta.aumento(10)
// console.log(camiseta)

        // object person 
        let person = { 
            talk: true, 
            Canfly() { 
                return "Sorry, Can't fly"; 
            }, 
        }; 
        // Object GFGuser 
        let GFGuser = { 
            CanCode: true, 
            CanCook() { 
                return "Can't say"; 
            }, 
            
          //  Inheriting the properties and methods of person 
            __proto__: person,  
        }; 

        // Printing on console 
        // Property of person 
        console.log("Can a GFG User talk: " + GFGuser.talk);  
        
        // Method of person 
        console.log("Can a GFG User fly: " + GFGuser.Canfly());  
        
        // Property of GFGuser 
        console.log("Can a GFG User code: " + GFGuser.CanCode);  
        
        // Method of GFGuser 
        console.log("Can a GFG User cook: " + GFGuser.CanCook());  
