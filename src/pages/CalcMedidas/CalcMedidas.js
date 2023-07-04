import React from 'react'
import { useState } from 'react';

export const CalcMedidas = () => {

    const [resultado, setResultado] = useState("");


    const calcularPhant = (e) => {
        e.preventDefault();

        const lar = +e.target.largura.value
        const comp = +e.target.comprimento.value

        //Externo
        const exlar = lar + 2 
        const excomp = comp + 2
        var externo = ('ex:', exlar, 'x', excomp) 
        console.log(externo);

        //Interno
        const inlar = exlar - 14
        const incomp = excomp - 14
        console.log('in:', inlar, 'x', incomp);

        //Colcão
        const collar = inlar - 3
        const colcomp = incomp - 3
        console.log('colchão:', collar, 'x', colcomp);

        //Lençol
        const lenlar = collar + 40
        const lencomp = colcomp + 40
        console.log('lençol:', lenlar, 'x', lencomp);

        setResultado(<div>
            <div>
                <label>Externo: </label>
                <span>{exlar} x {excomp}</span>
            </div>
            <div>
                <label>Interno: </label>
                <span>{inlar} x {incomp}</span>
            </div>
            <div>
                <label>Colchão: </label>
                <span>{collar} x {colcomp}</span>
            </div>
            <div>
                <label>Lençol: </label>
                <span>{lenlar} x {lencomp}</span>
            </div>
        </div>)
    }

    const calcular = (e) => {
        e.preventDefault();

        const lar = +e.target.largura.value
        const comp = +e.target.comprimento.value
        const alt = +e.target.altura.value

        //Externo
        const exlar = lar + 2 
        const excomp = comp + 2
        var externo = ('ex:', exlar, 'x', excomp) 
        console.log(externo);

        //Altura 
        const dif = alt + 11
        const exalt = dif + 23
        const inalt = dif + 21


        //Interno
        const inlar = exlar - 14
        const incomp = excomp - 14
        console.log('in:', inlar, 'x', incomp);

        //Colcão
        const collar = inlar - 3
        const colcomp = incomp - 3
        console.log('colchão:', collar, 'x', colcomp);

        //Lençol
        const lenlar = collar + 40
        const lencomp = colcomp + 40
        console.log('lençol:', lenlar, 'x', lencomp);

        setResultado(
        <div>
            <div>
                <label>Externo: </label>
                <span> {exlar} x {excomp}</span>
            </div>
            <div>
                <label>Altura Externo: </label>
                <span> {exalt}</span>
            </div>

            <div className='mt-2'>
                <label>Interno: </label>
                <span> {inlar} x {incomp}</span>
            </div>
            <div>
                <label>Altura Interno: </label>
                <span> {inalt}</span>
            </div>
            <div className='mt-2'>
                <label>Colchão: </label>
                <span> {collar} x {colcomp}</span>
            </div>
            <div className='mt-2'>
                <label>Lençol: </label>
                <span> {lenlar} x {lencomp}</span>
            </div>
            <div>
                <label>Quadrado: </label>
                <span> {alt + 10}</span>
            </div>
        </div>
        )

    }
  return (
    <div>
        <div className='p-5 glass2'>
            <h2>Sob Medida com colchão Phant:</h2>
            <div class="row align-items-center ">
                <div class="col">
                    <form onSubmit={calcularPhant}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Largura</label>
                            <input type="number" class="form-control" id="largura" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Comprimento</label>
                            <input type="number" class="form-control" id="comprimento"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div class="col ms-5">
                    <h3>Resultado:</h3>
                    {resultado}
                    <p>Quadrado: Padrão</p>
                </div>
            </div>
        </div>
        <div className='p-5 glass2 mt-4'>
            <h2>Sob Medida com colchão do cliente:</h2>
            <div class="row align-items-center ">
                <div class="col">
                    <form onSubmit={calcular}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Largura</label>
                            <input type="number" class="form-control" id="largura" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Comprimento</label>
                            <input type="number" class="form-control" id="comprimento"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Altura</label>
                            <input type="number" class="form-control" id="altura"/>
                        </div>
            
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div class="col ms-5">
                    <h3>Resultado:</h3>
                    {resultado}   
                </div>
            </div>
        </div>
    </div>
  )
}
