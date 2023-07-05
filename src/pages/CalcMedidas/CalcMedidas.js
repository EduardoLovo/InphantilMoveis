import React from 'react'
import { useState } from 'react';

export const CalcMedidas = () => {

    const [resultadoPhant, setResultadoPhant] = useState("");
    const [resultado, setResultado] = useState("");


    const calcularPhant = (e) => {
        e.preventDefault();

        const lar = +e.target.largura.value
        const comp = +e.target.comprimento.value
        const acessorio = e.target.acessorio.value


        //Externo
        const exlar = lar + 2 
        const excomp = comp + 2        

        //Interno
        const inlar = exlar - 14
        const incomp = excomp - 14

        //Colcão
        const collar = inlar - 3
        const colcomp = incomp - 3

        const lenlar = collar + 40        
        
        const lencomp = () => {
            if (acessorio === 'lencol') {
                const lencomp = colcomp + 40
                return lencomp
            } else {
                const lencomp = colcomp + 70
                return lencomp
            }
        }
       

        setResultadoPhant(<div className='fs-5 text'>
            <div>
                <label>Externo: </label>
                <span> {exlar} x {excomp}</span>
            </div>
            <div className='mt-2'>
                <label>Interno: </label>
                <span> {inlar} x {incomp}</span>
            </div>
            <div className='mt-2'>
                <label>Colchão: </label>
                <span> {collar} x {colcomp}</span>
            </div>
            <div className='mt-2'>
                {acessorio === 'lencol'? <label>Lençol: </label>: <label>Virol:</label>}
                
                <span> {lenlar} x {lencomp()}</span>
            </div>
            {acessorio === 'lencol'? 
            <div>
                <label>Quadrado: </label>
                <span> Padrão</span>
            </div>
            : ''
            }
        </div>)
    }

    const calcular = (e) => {
        e.preventDefault();

        const lar = +e.target.largura.value
        const comp = +e.target.comprimento.value
        const alt = +e.target.altura.value
        const acessorio = e.target.acessorio.value

        //Interno
        const inlar = lar + 3
        const incomp = comp + 3

        //Externo
        const exlar = inlar + 14
        const excomp = incomp + 14

        //Altura 
        const dif = alt - 10
        const exalt = dif + 23
        const inalt = dif + 21

        //Lençol
        const lenlar = lar + 40

        const lencomp = () => {
            if (acessorio === 'lencol') {
                const lencomp = comp + 40
                return lencomp
            } else {
                const lencomp = comp + 70
                return lencomp
            }
        }

        // const lencomp = colcomp + 40

        setResultado(
        <div className='fs-5 text'>
            <div>
                <label>Externo: </label>
                <span> {exlar} x {excomp} x {exalt}</span>
            </div>

            <div className='mt-2'>
                <label>Interno: </label>
                <span> {inlar} x {incomp} x {inalt}</span>
            </div>

            <div className='mt-2'>
                {acessorio === 'lencol'? <label>Lençol: </label>: <label>Virol:</label>}
                
                <span> {lenlar} x {lencomp()}</span>
            </div>
            {acessorio === 'lencol'? 
            <div>
                <label>Quadrado: </label>
                <span> {alt + 10} x {alt + 10}</span>
            </div>
            : ''
            }
            {acessorio === 'virolLiso'?
            <div>
                <label>Retangulo: </label>
                <span> {lenlar} x 50</span>
            </div>: ''}
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
                        <div class="form-check">
                            <input type="radio" class="form-check-input" id="acessorio" value='lencol' name="radio-stacked" />
                            <label class="form-check-label" for="acessorio">Lençol</label>
                        </div>
                        <div class="form-check mb-3">
                            <input type="radio" class="form-check-input" id="acessorio" value='viral' name="radio-stacked" />
                            <label class="form-check-label" for="acessorio">Virol</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div class="col ms-5">
                    <h3>Resultado:</h3>
                    {resultadoPhant}
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
                        <div class="form-check">
                            <input type="radio" class="form-check-input" id="acessorio" value='lencol' name="radio-stacked" />
                            <label class="form-check-label" for="acessorio">Lençol</label>
                        </div>
                        <div class="form-check ">
                            <input type="radio" class="form-check-input" id="acessorio" value='virolLiso' name="radio-stacked" />
                            <label class="form-check-label" for="acessorio">Virol Liso</label>
                        </div>
                        <div class="form-check mb-3">
                            <input type="radio" class="form-check-input" id="acessorio" value='virol' name="radio-stacked" />
                            <label class="form-check-label" for="acessorio">Virol com Aplique</label>
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