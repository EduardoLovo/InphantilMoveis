import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Api } from '../../Api/Api';
import ModalReact from '../Modal/ModalReact';
import './ApliqueCard.css';

export const ApliqueCard = (props) => {
    const type = localStorage.getItem('user');

    const codigo = props.aplique.number;
    const img = props.aplique.img;
    const id = props.aplique._id;
    const quantidade = props.aplique.quantidade;
    const estoque = props.aplique.estoque;

    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const deleteAplic = () => {
        setIsModalOpen(true);
    };

    const handleConfirmDelete = async (e) => {
        // Chame a função de exclusão real aqui
        e.preventDefault();
        const response = await Api.buildApiDeleteRequest(
            Api.deleteAplicUrl(id),
            true
        );

        if (response.status === 200) {
            // Product updated successfully

            toast.success('Deletado com Sucesso!');
            navigate('/apliques-estoque');
        } else {
            // Error
            toast.error('Erro ao deletar!');
        }
        setIsModalOpen(false);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="card mb-3">
            <img
                src={img}
                className="imagemApliqueCard cursorPointer"
                alt={codigo}
                title={`${quantidade} em estoque`}
            />
            {type === 'adm' ? (
                <div>
                    {isMenuOpen && (
                        <div className="menu">
                            <Link
                                className="linkedit"
                                to={`/editar-aplique/${id}`}
                                estoque={estoque}
                            >
                                Editar
                            </Link>
                            <p className="linkdelete" onClick={deleteAplic}>
                                Excluir
                            </p>
                        </div>
                    )}
                    <ModalReact
                        isOpen={isModalOpen}
                        onRequestClose={handleCloseModal}
                        onConfirm={handleConfirmDelete}
                        question="Certeza que deseja excluir?"
                    />
                </div>
            ) : (
                ''
            )}
            <div className="codigoAplique">
                <p>{codigo}</p>

                {type === 'adm' ? (
                    <div>
                        {estoque === 'Sim' ? (
                            <div className="estoqueApliqueVerde"></div>
                        ) : (
                            <div className="estoqueApliqueVermelho"></div>
                        )}
                        <p>quantidade: {quantidade}</p>
                        <div
                            className="menuAplique"
                            onClick={toggleMenu}
                            ref={menuRef}
                        >
                            ...
                        </div>
                    </div>
                ) : (
                    <div>
                        {estoque === 'Sim' ? (
                            <div className="estoqueApliqueVerde"></div>
                        ) : (
                            <div className="estoqueApliqueVermelho"></div>
                        )}
                        <p>quantidade: {quantidade}</p>
                    </div>
                )}
            </div>
        </div>
    );
};
