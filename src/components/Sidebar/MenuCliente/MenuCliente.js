import React from 'react';
import { Link } from 'react-router-dom';

export const MenuCliente = () => {
    return (
        <div>
            <div className="sidebar-items">
                <p className="mt-4">Catalogos:</p>
                <Link to="/catalogo-lençol-aplique">Apliques & Lençois</Link>
                <Link to="/catalogo-apliques-para-cabana">
                    Apliques Para Cabana
                </Link>
                <Link to="/sintetico-catalogo">Cores para Cama</Link>
                <Link to="/catalogo-lencol-pronta-entrega">
                    Lencois Pronta-Entrega
                </Link>

                <p className="mt-4">Inphantil</p>
                
                <a
                    href="https://www.inphantil.com.br/informacoes/"
                    rel="noreferrer"
                    target="_blank"
                >
                    Informações
                </a>
                <a
                    href="https://www.inphantil.com.br/"
                    rel="noreferrer"
                    target="_blank"
                >
                    Inphantil Site
                </a>
                <a
                    href="https://www.instagram.com/inphantil/"
                    rel="noreferrer"
                    target="_blank"
                >
                    Instagram
                </a>
                <a
                    href="https://api.whatsapp.com/send?phone=5561982388828"
                    rel="noreferrer"
                    target="_blank"
                >
                    WhatsApp
                </a>
            </div>
        </div>
    );
};
