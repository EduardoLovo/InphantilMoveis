import React, { useEffect } from 'react'
import { useState } from 'react';
import './Catalogo.css'
import { Api } from '../../Api/Api';
import CapsLock from '../../components/CapsLock'


export const TecidosJunior = () => {
    const [aplique, setAplique]= useState('')
    const [cor, setCor] = useState('')
    const [tecidos, setTecidos] = useState([]);
    const [apliques, setApliques] = useState([]);
    const [resultado, setResultado] = useState('')
    const [click, setClick] = useState('3')
    
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

    const primeiroClick = (e) => {
        e.preventDefault();
        const imga = e.target.src
        setClick('1')
        setCor(
            <img className='imagem1' src={imga} id="one" name="fav_language" value='aaaa' alt='...'></img>
        ) 
    }
    
    const segundo = (e) => {
        e.preventDefault();   
        const imga2 = e.target.src
        setAplique( <img className='imagem1' src={imga2} id="one" name="fav_language" value='bbbb' alt='...'></img> )
        setResultado('q')
        if(window.screen.width < 700){
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    const escolherTecido = () => {
        setClick('3')
    }

    tecidos.sort(compare)

  return (
    <div >
        <div className='fixed'>
            <div className='buttonCaatalogo '>
                <p>Escolha a cor clicando em cima da cor e depois escolha o aplique clicando no aplique.</p>
                <h5><CapsLock>Muito importante! O tom da cor do tecido, pode mudar de acordo com a tela do seu dispositivo.</CapsLock> </h5>
            </div>
            <hr className='hr'/>
            {resultado === '' ? '' : 
            <div className='backgroundTransparente' >
                <div className='imagemFinal' > 
                    {cor}{aplique}{cor} 
                </div>
            </div>
            }
        </div>
        {click === '3' ? 
        <div className='container'>
        {tecidos.map((tecido, index) => (
            <div className={window.screen.width > 700 ? ' marginDesktop' : 'marginmobile'}>
                <div className={tecido.estoque === "Nao" ? 'display' : ''} key={index} >
                {tecido.tamanho === 'Junior - M' ? 
                <div className="card border-dark mb-3">
                    <img src={tecido.img} className="card-img-top" alt="..." onClick={primeiroClick}/>
                    <div className="card-body text-success">
                    <p>Cor: {tecido.cor}</p>
                    </div>
                </div>
                :''}
                </div>
                
            </div>
            ))}    
        </div>
        :
        <div  >
            <div className="container">
                <button onClick={escolherTecido} className='btnFixado'>Escolher outra cor de tecido</button>
                    <div className={window.screen.width > 700 ? ' marginDesktop' : 'marginmobile'}>
                        <div className='container containerMargin'>
                        {apliques.map((aplique, index) => (
                            <div  key={index} className={aplique.estoque === "Nao" && aplique.quantidade === "0" ? "display": 'col '}>
                                <div className="card border-dark mb-3" >
                                <img src={aplique.img} className="card-img-top" alt="..." onClick={segundo}/>
                                <div className="card-body text-warning">
                                    <h5 className="card-title text-center">{aplique.number} </h5>
                                </div>
                                </div>
                            </div>   
                        ))}
                    </div>
                </div>
            </div>
        </div>
        }            
    </div>
  )
}
