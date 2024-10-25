import React, { useEffect, useState } from 'react';
import { Api } from '../../../Api/Api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ApliquesEdit.css';

export const ApliquesEdit = () => {
    const params = useParams();
    const id = params.id;

    const navigate = useNavigate();

    const [aplique, setAplique] = useState('');

    useEffect(() => {
        const loadProduct = async () => {
            const response = await Api.buildApiGetRequest(
                Api.readByIdUrl(id),
                true
            );
            const results = await response.json();
            setAplique(results);
        };
        loadProduct();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const codigo = e.target.number.value;
        const img = e.target.img.value;
        const quantidade = +e.target.quantidade.value;
        const estoque = e.target.estoque.value;

        const payload = {
            codigo,
            img,
            quantidade,
            estoque,
        };

        const response = await Api.buildApiPatchRequest(
            Api.updateUrl(id),
            payload,
            true
        );
        if (response.status === 200) {
            // Product updated successfully
            toast.success('Atualizado com Sucesso!');
            navigate('/apliques-estoque');
        } else {
            // Error
            toast.error('Erro ao atualizar!');
        }
    };

    return (
        <div>
            <div className="cabecalho">
                <h1>Editar aplique</h1>
            </div>
            <div className="container-editar-aplique">
                <div className="imagem-editar-aplique">
                    <h2>{aplique.codigo}</h2>
                    <img src={aplique.img} alt="foto do aplique" />
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="">Codigo</label>
                        <input
                            id="number"
                            name="number"
                            type="text"
                            defaultValue={aplique.number}
                        />
                    </div>
                    <div>
                        <label>Imagem</label>
                        <input
                            id="img"
                            name="img"
                            type="text"
                            defaultValue={aplique.img}
                        />
                    </div>
                    <div>
                        <label>Quantidade</label>
                        <input
                            id="quantidade"
                            name="quantidade"
                            type="number"
                            defaultValue={aplique.quantidade}
                        />
                    </div>
                    <div>
                        <label>Estoque: </label>
                        <div>
                            <select
                                id="estoque"
                                name="estoque"
                                placeholder="estoque"
                            >
                                <option>{aplique.estoque}</option>
                                <option>Sim</option>
                                <option>Nao</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <button type="submit">Atualizar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
