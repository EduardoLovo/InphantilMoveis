import React from 'react';
import { ApliqueLista } from '../../../components/ApliqueLista/ApliqueLista';

export const ApliquesParaCabana = () => {
    return (
        <div>
            <div className="cabecalho">
                <h1>Apliques para cabana</h1>
            </div>
            <div>
                <ApliqueLista tipoDaLista="apliques para cabana" />
            </div>
        </div>
    );
};
