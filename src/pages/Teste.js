import React, { useEffect } from 'react'
import { useState } from 'react';
import './Teste.css'

export const Teste = () => {

    const [agoraVai, setAgoraVai]= useState('')
    const [imagemInicial, setImagemInicial] = useState('')
    const [maisum, setMaisum] = useState('')

    const recarregar = () => {
        window.location.reload()
    }

    useEffect(() => {
            setImagemInicial(
                <div>
                    <img className='imagem1' src="https://i.pinimg.com/564x/31/40/4b/31404b15d40a1a5f2923e629c8d7f0a5.jpg" id="one" name="fav_language" value='aaaa' onClick={primeiroClick}></img>
                    <img className='imagem1' src="https://i.pinimg.com/564x/b6/ab/07/b6ab07f466c6ec9de81b1aecb3964885.jpg" id="one" name="fav_language" value='aaaa' onClick={primeiroClick}></img>
                    <img className='imagem1' src="https://i.pinimg.com/564x/a7/08/25/a708255b0ebf2035cf0652910a7ebc76.jpg" id="one" name="fav_language" value='aaaa' onClick={primeiroClick}></img>
                </div>
            )
    },[])

    const primeiroClick = (e) => {
        e.preventDefault();

       const imga = e.target.src
        
        console.log('2');
        setMaisum(
            <img className='imagem1' src={imga} id="one" name="fav_language" value='aaaa' ></img>
        ) 
    
        setImagemInicial( 
        <div>
            <img className='imagem1' src='https://i.pinimg.com/564x/c2/b4/31/c2b43197403f362286f254861b11a501.jpg' id="one" name="fav_language" value='bbbb' onClick={segundo} ></img>
            <img className='imagem1' src='https://i.pinimg.com/564x/b2/a2/8c/b2a28c04810dcad681de2a43c7b25083.jpg' id="one" name="fav_language" value='bbbb' onClick={segundo} ></img>

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
    <div>
        <div>
            <button onClick={recarregar}>refazer</button>
        </div>

        {imagemInicial}
        
        <div>
            {maisum}{agoraVai}{maisum} 
        </div>
    </div>
  )
}
