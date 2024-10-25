import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Api } from '../../../Api/Api';
import { toast } from 'react-toastify';
import './SinteticoCreate.css';

export const SinteticoCreate = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const codigo = e.target.codigo.value;
        const cor = e.target.cor.value;
        const img = e.target.img.value;
        const estoque = e.target.estoque.value;

        const payload = {
            codigo: codigo,
            cor: cor,
            img: img,
            estoque: estoque,
        };

        console.log(payload);

        const response = await Api.buildApiPostRequest(
            Api.addMaterialUrl(),
            payload,
            true
        );

        if (response.status === 200) {
            // Product created successfully
            toast.success('Aplique adicionada com sucesso!');
            navigate('/sintetico-estoque');
        } else {
            // Error
            toast.error('Erro ao adicionar Aplique!');
        }
    };

    return (
        <div>
            <div className="cabecalho">
                <h1>Adicionar novo sintético</h1>
            </div>
            <div className="contentSinteticoCreate">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label id="codigo">Codigo</label>
                        <input id="codigo" name="codigo" type="text" />
                    </div>
                    <div>
                        <label id="img">Imagem</label>
                        <input id="img" name="img" type="text" />
                    </div>

                    <div>
                        <label>Cor</label>
                        <select id="cor" name="cor" placeholder="Cor">
                            <option></option>
                            <option>Amarelo</option>
                            <option>Azul</option>
                            <option>Bege</option>
                            <option>Branco</option>
                            <option>Cinza</option>
                            <option>Laranja</option>
                            <option>Lilas</option>
                            <option>Mostarda</option>
                            <option>Preto</option>
                            <option>Rosa</option>
                            <option>Tiffany</option>
                            <option>Verde</option>
                            <option>Vermelho</option>
                            <option>Externo</option>
                        </select>
                    </div>

                    <div>
                        <label>Estoque</label>
                        <select
                            id="estoque"
                            name="estoque"
                            placeholder="Estoque"
                        >
                            <option>Sim</option>
                            <option>Nao</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit">Adicionar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
