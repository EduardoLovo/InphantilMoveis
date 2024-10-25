import React, { useState } from 'react';
import './Rolos.css';

export const Rolos = () => {
    const [rolos, setRolos] = useState([
        {
            codigo: 'AM1',
            todosRolos: [{ peso: 12.9 }, { peso: 5 }, { peso: 8 }],
        },
        {
            codigo: 'AM2',
            todosRolos: [{ peso: 9 }, { peso: 5.5 }, { peso: 1.2 }],
        },
    ]);

    const addnovo = (e) => {
        e.preventDefault();

        const peso = e.target.peso.value;
        const codigo = e.target.getAttribute('codigo');
        console.log(codigo);

        const novoItem = { peso: parseFloat(peso, 10) };
        const rolosAtualizados = rolos.map((rolo) => {
            if (rolo.codigo === codigo) {
                return {
                    ...rolo,
                    todosRolos: [...rolo.todosRolos, novoItem],
                };
            }
            return rolo;
        });
        // Atualiza o estado com a lista de rolos atualizada
        setRolos(rolosAtualizados);

        // Limpa o campo do formulário (opcional)
        e.target.reset();
        setRolos(rolosAtualizados);
    };

    const editarPeso = (e) => {
        const pesoe = e.target.getAttribute('peso');
        console.log(pesoe);

        console.log('s');
    };

    const deletarPeso = () => {};

    return (
        <div>
            <div>
                {rolos.map((rolo, id) => (
                    <div key={id} className="conteudoRolos">
                        <p className="">{rolo.codigo}</p>
                        <div className="conteudoRolos ">
                            {rolo.todosRolos.map((kkk, indes) => (
                                <div className="m-3">
                                    <p>Rolo {indes + 1}</p>
                                    <p key={indes}>{kkk.peso}</p>
                                    <button
                                        onClick={editarPeso}
                                        peso={kkk.peso}
                                    >
                                        Editar
                                    </button>
                                    <button onClick={deletarPeso}>
                                        excluir
                                    </button>
                                </div>
                            ))}
                            <div>
                                <form onSubmit={addnovo} codigo={rolo.codigo}>
                                    <p>Peso:</p>
                                    <input
                                        id="pesos"
                                        name="peso"
                                        type="number"
                                        step="0.01"
                                        required
                                    />
                                    <button type="submit">Add</button>
                                </form>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
