import React, { useState } from 'react';
import { ListaDeLoncolProntaEntrega } from '../../components/ListaDeLoncolProntaEntrega/ListaDeLoncolProntaEntrega';
import { Link } from 'react-router-dom';

export const CatalogoProntaEntrega = () => {
    const [tamanho, setTamanho] = useState('');

    const type = localStorage.getItem('user');
    return (
        <div>
            <div className="menuDoCatalogoSintetico">
                <button onClick={() => setTamanho('Berço')}>Berço</button>
                <button onClick={() => setTamanho('Junior')}>Junior</button>
                <button onClick={() => setTamanho('Solteiro')}>Solteiro</button>
                <button onClick={() => setTamanho('Solteirão')}>
                    Solteirão
                </button>
                <button onClick={() => setTamanho('Viuva')}>Viuva</button>
                <button onClick={() => setTamanho('Casal')}>Casal</button>
                <button onClick={() => setTamanho('Queen')}>Queen</button>
                <button onClick={() => setTamanho('King')}>King</button>
                {type === 'adm' && (
                    <button>
                        <Link to={'/lencol-create'}>Adicionar </Link>
                    </button>
                )}
            </div>
            <div>
                <ListaDeLoncolProntaEntrega tamanho={tamanho} />
            </div>
        </div>
    );
};
