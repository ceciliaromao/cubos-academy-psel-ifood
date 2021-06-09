function solucao(tempo, distancia) {
	if (tempo < 5) {
       console.log("600");         
    } else if (tempo >= 5 && tempo <= 60){
        let valor = (100 * tempo) + (50 * distancia);
        console.log(valor);        
    } else {
        if (distancia < 100) {
            let valor = 200 * distancia;
            console.log(valor);
        } else {
            let valor = 150 * distancia;
            console.log(valor);
        }
        
    }

}