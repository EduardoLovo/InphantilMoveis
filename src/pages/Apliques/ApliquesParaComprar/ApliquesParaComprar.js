import React, { useEffect, useState } from 'react';
import { Api } from '../../../Api/Api';
import { ApliqueCard } from '../../../components/ApliqueCard/ApliqueCard';

export const ApliquesParaComprar = () => {
    const [apliques, setApliques] = useState([]);

    const loadData = async () => {
        const response = await Api.buildApiGetRequest(Api.readAllApliquesUrl());
        const results = await response.json();
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
        <div className="">
            <div className="container">
                {apliques.map((aplique, index) => (
                    <div key={index}>
                        {aplique.quantidade <= 5 ? (
                            <ApliqueCard aplique={aplique} />
                        ) : (
                            ''
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
