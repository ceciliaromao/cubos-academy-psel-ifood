function solucao(precos) {
    if(precos.length < 5) {
        let total = 0;
        for (let i = 0; i < precos.length; i++) {
            total += precos[i]
        }
        console.log(total);
    } else {
        let total = 0;
        for (let i = 0; i < precos.length; i++) {
            total += precos[i];
        }
        
        Array.min = function(array) {
            return Math.min.apply(Math, array);
        }
        
        let menorPreco = Array.min(precos);
        console.log(total - menorPreco);

    }
    
}