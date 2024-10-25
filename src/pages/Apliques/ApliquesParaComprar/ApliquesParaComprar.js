import React from 'react';
import { ApliqueLista } from '../../../components/ApliqueLista/ApliqueLista';

export const ApliquesParaComprar = () => {
    return (
        <div>
            <div className="cabecalho">
                <h1>Apliques para comprar</h1>
            </div>
            <ApliqueLista tipoDaLista="compra" />
        </div>
    );
};
