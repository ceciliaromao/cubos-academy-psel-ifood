function solucao(obj) {
	if (obj.temIngresso == true) {
        if (obj.idade > obj.censura) {
            if (obj.temCarteirinha == true || obj.idade < 18) {
                console.log("MEIA");
            } else {
                console.log("INTEIRA");
            }            
        } else {
            if(obj.estaComPais == false) {
                console.log("ACESSO NEGADO");
            } else {
               if (obj.temCarteirinha == true || obj.idade < 18) {
                console.log("MEIA");
            } else {
                console.log("INTEIRA");
            }  
            }            
        }
    } else {
        console.log("ACESSO NEGADO");
    }
}