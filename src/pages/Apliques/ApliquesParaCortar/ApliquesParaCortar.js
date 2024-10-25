import React from 'react';
import { ApliqueLista } from '../../../components/ApliqueLista/ApliqueLista';

export const ApliquesParaCortar = () => {
    return (
        <div>
            <div className="cabecalho">
                <h1>Apliques para cortar</h1>
            </div>
            <div className="container">
                <ApliqueLista tipoDaLista="corte" />
            </div>
        </div>
    );
};
