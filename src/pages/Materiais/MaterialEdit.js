import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Api } from '../../Api/Api';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import '../../Style/style.css'


export const MaterialEdit = () => {
    const params = useParams();
    const id = params.id;
    const navigate = useNavigate();


    const [material, setMaterial] = useState("");
    
    const loadProduct = async () => {
    const response = await Api.buildApiGetRequest(Api.readByIdMaterialUrl(id), true);
    const results = await response.json();
    setMaterial(results);
    };

    useEffect(() => {
        loadProduct();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const codigo = e.target.codigo.value;
        const img = e.target.img.value;
        const estoque = e.target.estoque.value;
        const cor = e.target.cor.value;

        const payload = {
            codigo,
            cor,
            img,
            estoque
        }

        const response = await Api.buildApiPatchRequest(
            Api.updateMaterialUrl(id),
            payload,
            true
          );

          if (response.status === 200) {
            // Product updated successfully
            toast.success("Atualizado com Sucesso!")
            navigate("/material-estoque");
      
          } else {
            // Error
            toast.error("Erro ao atualizar!")
          }
    };


    const handleDelete = async (e) => {
        e.preventDefault();
        const response = await Api.buildApiDeleteRequest(
          Api.deleteMaterialUrl(id),
          true
        );
    
        if (response.status === 200) {
          // Product updated successfully
          toast.success("Deletado com Sucesso!")
          navigate("/material-estoque");
        } else {
          // Error
          toast.error("Erro ao deletar!")
        }
      };
    
    
    
  return (
    <div>
        Editar
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-3 w-50">
                <span className="input-group-text" id="inputGroup-sizing-default">Codigo</span>
                <input 
                    id="codigo"
                    name="codigo"
                    defaultValue={material.codigo} 
                    type="text" 
                    className="form-control" 
                    aria-label="Sizing example input" 
                    aria-describedby="inputGroup-sizing-default"
                    />
            </div>
            <div className="input-group mb-3 w-50">
                <span className="input-group-text" id="inputGroup-sizing-default">Imagem</span>
                <input 
                    id="img"
                    name="img"
                    defaultValue={material.img} 
                    type="text" 
                    className="form-control" 
                    aria-label="Sizing example input" 
                    aria-describedby="inputGroup-sizing-default"
                    />
            </div>
            <label>Estoque: </label>
            <div className="input-group mb-3 w-50">
            <select id="estoque" name="estoque" className="form-control"  placeholder="Estoque">
                <option>Sim</option>
                <option>Nao</option>
            </select> 

            </div>

            <label>Cor: </label>
            <div className="input-group mb-3 w-50">
            <select id="cor" name="cor" className="form-control"  placeholder="Cor">
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
              <option>Verde</option>
              <option>Vermelho</option>
              <option>Externo</option>
            </select> 

            </div>

            <div>
                <button onClick={handleDelete}>Deletar</button>
                <button type='submit'>Atualizar</button>
            </div>
        </form>
    </div>
  )
}
