function calcular(tipo, valor){
        if(tipo === 'valor'){
            valor = document.getElementById('tela').value += valor
        }
        
        if(valor === 'c'){
            valor = document.getElementById('tela').value = ''
        }

        if(tipo === 'acao'){
        
            if('valor' === '+' || 'valor' === '-' || 'valor' === '/' || 'valor' === '*' || 'valor' === '.'){
                document.getElementById('tela').value += valor
            }
        
            if(valor === '='){
                var valor_campo = eval(document.getElementById('tela').value)
                document.getElementById('tela').value = valor_campo     
            }
        
        } else if (valor === 'valor'){
            document.getElementById('tela').value += valor
        }
}