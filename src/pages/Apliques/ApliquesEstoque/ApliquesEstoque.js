import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Api } from '../../../Api/Api';
import { Filtro } from '../../../components/Filtro';
import { ApliqueLista } from '../../../components/ApliqueLista/ApliqueLista';
import './ApliquesEstoque.css';

export const ApliquesEstoque = () => {
    const type = localStorage.getItem('user');

    const [apliques, setApliques] = useState([]);
    const [texto, setTexto] = useState('');

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

    const onChange = (e) => {
        setTexto(e.target.value);
    };

    return (
        <div className="contentApliqueEstoque">
            <div className="cabecalho">
                <h1>Estoque de apliques</h1>
                <div className="headerApliqueEstoque">
                    <div>
                        <input
                            type="text"
                            className=""
                            onChange={onChange}
                            value={texto}
                            placeholder="Pesquisar"
                        />
                    </div>
                    {type === 'adm' ? (
                        <Link
                            to={'/apliques-create'}
                            className="add-button"
                            title="Adicionar novo aplique"
                        >
                            +
                        </Link>
                    ) : (
                        ''
                    )}
                </div>
            </div>
            <div>
                {!texto ? (
                    <ApliqueLista />
                ) : (
                    <Filtro texto={texto} apliques={apliques} />
                )}
            </div>
        </div>
    );
};
