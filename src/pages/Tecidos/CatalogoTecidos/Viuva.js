import React, { useEffect } from 'react'
import { useState } from 'react';
import './Teste.css'
import { Api } from '../../../Api/Api';

export const TecidosViuva = () => {

    const [aplique, setAplique]= useState('')
    const [imagemInicial, setImagemInicial] = useState('')
    const [cor, setCor] = useState('')

    const [tecidos, setTecidos] = useState([]);
    const [apliques, setApliques] = useState([]);

    const [aaa, setAaa] = useState('')
    
    const loadData = async () => {
        const response = await Api.buildApiGetRequest(Api.readAllTecidolUrl());
        const results = await response.json();
        const responseAplic = await Api.buildApiGetRequest(Api.readAllApliquesUrl());
        const resultsAplic = await responseAplic.json();
        
        
        setTecidos(results);
        setApliques(resultsAplic);
       
      };
      
    useEffect(() => {
        
        loadData();   
    },[])

    function compare(a, b) {
        if (a.cor < b.cor) return -1;
        if (a.cor > b.cor) return 1;
        return 0;
      }
        

    const comecar = () => {
        setAaa('Começar')
        setImagemInicial(
            <div>
                <div> 
                    <h2 className='ms-5'>Viuva</h2>
                    <div className='d-flex flex-wrap justify-content-start'>
                    {tecidos.map((tecido, index) => (
                        <div className={tecido.estoque === "Nao" ? 'display' : ''} key={index} onClick={primeiroClick}>
                        {tecido.tamanho === 'Viuva - GG' ? 
                        <div className="card border-dark mb-3">
                            <img src={tecido.img} className="card-img-top" alt="..."/>
                            <div className="card-body text-success">
                            <p>Cor: {tecido.cor}</p>
                            </div>
                        </div>
                        :''}
                        
                        </div>
                    
                        ))}
                        
                    </div>
                </div>
            </div>
        )
    }
    
    

    const primeiroClick = (e) => {
        e.preventDefault();

        const imga = e.target.src
        
        setCor(
            <img className='imagem1' src={imga} id="one" name="fav_language" value='aaaa' ></img>
        ) 
        function compareApliq(a, b) {
            if (a.number < b.number) return -1;
            if (a.number > b.number) return 1;
            return 0;
          }

        apliques.sort(compareApliq)
   
        setImagemInicial( 
        <div>
            <div className="listAplic apliClient">
                {apliques.map((aplique, index) => (
                
                <div onClick={segundo} className={aplique.estoque === "Nao" && aplique.quantidade === "0" ? "displayApliClien": 'col alingListCards'}>
                    <div className="card border-dark mb-3">
                    <img src={aplique.img} className="card-img-top" alt="..."/>
                    <div className="card-body text-warning">
                        <h5 className="card-title text-center">{aplique.number} </h5>
                    </div>
                    </div>
                </div>   
                ))}
            </div>
        </div>
        )
    }
    
    const segundo = (e) => {
        e.preventDefault();   

        const imga2 = e.target.src
        setAplique( <img className='imagem1' src={imga2} id="one" name="fav_language" value='bbbb'></img> )
        setImagemInicial('')
    }

    tecidos.sort(compare)
  return (
    <div >
        <div className='buttonCaatalogo'>
            <p>Clique no botão abaixo para começar;</p>
            <p>Escolha a cor clicando em cima da cor e depois escolha o aplique</p>
            <p>Pode refazer o processo quantas vezes quiser, é só clicar no botão novamente</p> 
            <button onClick={comecar} >Começar / Refazer</button>
        </div>

        {imagemInicial}

        {aaa === '' ? '' : 
            <div className='d-flex justify-content-start align-items-center teste2'>
                <div className='teste'> 
                    {cor}{aplique}{cor} 
                </div>
            </div>
        }
        
    </div>
  )
}
