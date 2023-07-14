import React, { useEffect } from 'react'
import { useState } from 'react';
import './Teste.css'
import { Api } from '../Api/Api';
import { ApliquesClientes } from './Apliques/ApliquesClientes';
import { TecidosJunior } from './Tecidos/CatalogoTecidos/Junior';

export const Teste2 = () => {

    const [agoraVai, setAgoraVai]= useState('')
    const [imagemInicial, setImagemInicial] = useState('')
    const [maisum, setMaisum] = useState('')

    const [tecidos, setTecidos] = useState([]);
    const [apliques, setApliques] = useState([]);


    const loadData = async () => {
        const response = await Api.buildApiGetRequest(Api.readAllTecidolUrl());
        const results = await response.json();
        const responseAplic = await Api.buildApiGetRequest(Api.readAllApliquesUrl());
        const resultsAplic = await responseAplic.json();
        
        console.log('foi');
        setTecidos(results);
        setApliques(resultsAplic);
      };

    function compare(a, b) {
      if (a.cor < b.cor) return -1;
      if (a.cor > b.cor) return 1;
      return 0;
    }
  
    tecidos.sort(compare)

    const recarregar = () => {
        window.location.reload()
    }

    useEffect(() => {
        loadData();
        
    },[])

    const comecar = () => {
        setImagemInicial(
            <div>
                <div> 
                    <h2 className='ms-5'>Junior</h2>
                    <div className='d-flex flex-wrap justify-content-start'>
                    {tecidos.map((tecido, index) => (
                        <div className={tecido.estoque === "Nao" ? 'display' : ''} key={index} onClick={primeiroClick}>
                        {tecido.tamanho === 'Junior - M' ? 
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
        

        console.log(e);
       const imga = e.target.src
        
        console.log('2');
        setMaisum(
            <img className='imagem1' src={imga} id="one" name="fav_language" value='aaaa' ></img>
        ) 
    
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

        console.log('foi1');  
        const imga2 = e.target.src
        setAgoraVai( <img className='imagem1' src={imga2} id="one" name="fav_language" value='bbbb'></img> )
        console.log('foi2');  
        setImagemInicial('')
    }
  return (
    <div >
        <div>
            <button onClick={recarregar}>refazer</button>
            <button onClick={comecar} >começar / refazer</button>
        </div>

        {imagemInicial}
        
        <div className='d-flex justify-content-start align-items-center teste2'>
            <div className='teste'> 
                {maisum}{agoraVai}{maisum} 
            </div>
        </div>
    </div>
  )
}
