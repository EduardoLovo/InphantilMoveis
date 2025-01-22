import React, { useEffect } from 'react';
import { useState } from 'react';
import './Catalogo.css';
import { Api } from '../../Api/Api';
import CapsLock from '../../components/CapsLock';
import TecidoCard from '../TecidosParaLencol/TecidoCard/TecidoCard';
import { ApliqueCard } from '../../components/ApliqueCard/ApliqueCard';

export const TecidosJunior = () => {
    const [aplique, setAplique] = useState('');
    const [cor, setCor] = useState('');
    const [tecidos, setTecidos] = useState([]);
    const [apliques, setApliques] = useState([]);
    const [resultado, setResultado] = useState('');
    const [click, setClick] = useState('3');

    const loadData = async () => {
        const response = await Api.buildApiGetRequest(Api.readAllTecidolUrl());
        const results = await response.json();
        const responseAplic = await Api.buildApiGetRequest(
            Api.readAllApliquesUrl()
        );
        const resultsAplic = await responseAplic.json();

        setTecidos(results);
        setApliques(resultsAplic);
    };
    useEffect(() => {
        loadData();
    }, []);
    function compare(a, b) {
        if (a.cor < b.cor) return -1;
        if (a.cor > b.cor) return 1;
        return 0;
    }
    tecidos.sort(compare);
    function compareApliques(a, b) {
        if (a.number < b.number) return -1;
        if (a.number > b.number) return 1;
        return 0;
    }
    apliques.sort(compareApliques);

    const primeiroClick = (e) => {
        e.preventDefault();
        const imga = e.target.src;
        setClick('1');
        setCor(
            <img
                className="imagem1"
                src={imga}
                id="one"
                name="fav_language"
                value="aaaa"
                alt="..."
            ></img>
        );
    };

    const segundo = (e) => {
        e.preventDefault();
        const imga2 = e.target.src;
        const codigo = e.target.alt;

        setAplique(
            <div>
                <img
                    className="imagem2"
                    src={imga2}
                    id="one"
                    name="fav_language"
                    value="bbbb"
                    alt="..."
                ></img>
                <div className="codigoApliqueEscolha">{codigo}</div>
            </div>
        );
        setResultado('q');
        if (window.screen.width < 700) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const escolherTecido = () => {
        setClick('3');
    };

    console.log(apliques);

    return (
        <div>
            <div className="fixed">
                <div className="buttonCaatalogo ">
                    <p>
                        Escolha a cor clicando em cima da cor e depois escolha o
                        aplique clicando no aplique.
                    </p>
                    <h5>
                        <CapsLock>
                            Muito importante! O tom da cor do tecido, pode mudar
                            de acordo com a tela do seu dispositivo.
                        </CapsLock>{' '}
                    </h5>
                </div>
                <button onClick={escolherTecido} className="btnFixado">
                    Escolher outra cor de tecido
                </button>
                {resultado && (
                    <div className="backgroundTransparente">
                        <div className="imagemFinal">
                            {cor}
                            {aplique}
                            {cor}
                        </div>
                    </div>
                )}
                <hr className="hr" />
            </div>
            {click === '3' ? (
                <div className="container">
                    <div
                        className={
                            window.screen.width > 700
                                ? 'marginDesktop container'
                                : ''
                        }
                    >
                        {tecidos.map((tecido, index) => (
                            <div key={index}>
                                <div
                                    className={
                                        tecido.estoque === 'Nao'
                                            ? 'display'
                                            : ''
                                    }
                                    key={index}
                                >
                                    <div onClick={primeiroClick} className="">
                                        <TecidoCard tecido={tecido} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    <div className="container">
                        <div
                            className={
                                window.screen.width > 700
                                    ? ' marginDesktop'
                                    : 'marginmobile'
                            }
                        >
                            <div className="container">
                                {apliques.map((aplique, index) => (
                                    <div key={index}>
                                        {aplique.estoque === 'Nao' &&
                                        aplique.quantidade === '0' ? (
                                            ''
                                        ) : (
                                            <div onClick={segundo}>
                                                <ApliqueCard
                                                    aplique={aplique}
                                                />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
