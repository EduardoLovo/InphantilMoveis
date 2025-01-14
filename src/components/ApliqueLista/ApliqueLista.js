import React, { useEffect, useState } from 'react';
import { ApliqueCard } from '../ApliqueCard/ApliqueCard';
import { Api } from '../../Api/Api';
import './ApliqueLista.css';

export const ApliqueLista = (props) => {
    const tipoDaLista = props.tipoDaLista;

    const [apliques, setApliques] = useState([]);

    const loadData = async () => {
        const response = await Api.buildApiGetRequest(Api.readAllApliquesUrl());
        const results = await response.json();
        // setIsLoading(false)
        setApliques(results);
    };
    useEffect(() => {
        loadData();
    }, []);
    function compare(a, b) {
        if (a.number < b.number) return -1;
        if (a.number > b.number) return 1;
        return 0;
    }
    apliques.sort(compare);

    return (
        <div className="container-lista-de-apliques ">
            {apliques.map((aplique, index) => (
                <div key={index}>
                    {/* CORTE */}
                    {tipoDaLista === 'corte' ? (
                        <div>
                            {aplique.quantidade < 3 &&
                                aplique.estoque === 'Sim' && (
                                    <ApliqueCard aplique={aplique} />
                                )}
                        </div>
                    ) : // COMPRA
                    tipoDaLista === 'compra' ? (
                        <div>
                            {aplique.quantidade <= 5 &&
                            aplique.estoque === 'Nao' ? (
                                <ApliqueCard aplique={aplique} />
                            ) : (
                                ''
                            )}
                        </div>
                    ) : // APLIQUE PARA CABANA
                    tipoDaLista === 'apliques para cabana' ? (
                        <div>
                            {aplique.estoque === 'Sim' && (
                                <ApliqueCard aplique={aplique} />
                            )}
                        </div>
                    ) : (
                        <ApliqueCard aplique={aplique} />
                    )}
                </div>
            ))}
        </div>
    );
};
