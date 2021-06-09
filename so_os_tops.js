function solucao(produtos) {
	
    function criarRelatorio(lista){
        let top = 0;
        let total = 0;
        let perc = 0;
        
        for(let item of lista){
            const preco = item.preco;
            total += preco;
            
            if (preco > 10000) {
                top += preco;
            }
        }
            perc = top/total;
            
            const resposta = {
                totalTop: top,
                percentual: perc
            };
            
            console.log(resposta);
    
    
    }      
    criarRelatorio(produtos);
    
}