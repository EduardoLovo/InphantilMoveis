import React from 'react';
import limpeza from '../img/limpeza.png';
import garantia from '../img/garantia.png';
import vento from '../img/vento.png';
import protetor5 from '../img/protetor5.jpeg';
import protetor6 from '../img/protetor6.jpeg';
import CapsLock from '../components/CapsLock';
import './Info.css';
export const Info = () => {
    return (
        <div className="contentInfo fs-5">
            <h2 className="text-center p-5">Informações Importantes!</h2>
            <div className="d-flex justify-content-center align-items-center infochild ">
                <div>
                    <img src={garantia} alt="garantia" className="w-75" />
                </div>
                <div className="">
                    <p>
                        GARANTIA ⌛ Nossos produtos possuem 1 ano de garantia
                        nas espumas e 180 dias no revestimento. Esta garantia é
                        fornecida pelas indústrias das matérias primas.
                    </p>
                    <p>
                        Em caso de defeito de fabricação ou problemas advindos
                        do transporte entre em contato imediatamente com o setor
                        de atendimento! (Em prazo máximo de 7 dias)
                    </p>
                    <p>
                        🗓️ ATENÇÃO!!! Trocas e devolução devem ser feitas em até
                        7 dias do recebimento, o produto não pode ter sido usado
                        e a embalagem deve ser a mesma do envio!
                    </p>
                    <p className="lacreDeGarantia">
                        <h3>LACRE DE GARANTIA:</h3>
                        <CapsLock>
                            Em caso de violação do lacre do zíper, implicará na
                            garantia do produto
                        </CapsLock>
                    </p>
                    <p className="lacreDeGarantia">
                        <CapsLock>
                            "Para alinhamento não necessita abertura do zíper".
                        </CapsLock>
                    </p>
                </div>
            </div>
            <hr className="hr" />
            <div>
                <h2 className="m-4">Montagem da cama:</h2>
            </div>
            <div className="d-flex justify-content-center align-items-center infochild">
                <iframe
                    width="1280"
                    height="720"
                    src="https://www.youtube.com/embed/9qnu3gMKYkc"
                    title="Montagem da Cama Montessoriana Phant"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    className="youtubeVideo"
                ></iframe>
            </div>
            <div className="d-flex justify-content-center align-items-center infochild">
                <p>
                    Este é o vídeo de montagem da cama, é importante seguir os
                    passos nele descritos, não alterando a ordem de montagem!
                </p>
                <iframe
                    width="772"
                    height="434"
                    src="https://www.youtube.com/embed/TAtMg7sJZA8"
                    title="Montagem da Cama Montessoriana Phant"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    className="youtubeVideo"
                ></iframe>
            </div>
            <hr className="hr" />
            <div className="d-flex justify-content-center align-items-center infochild">
                <div className="">
                    <h2>Limpeza</h2>
                    <p>Limpeza da Cama, Tapete e Protetor de parede 🚰 </p>
                    <p>
                        Para limpar seu produto você deve usar sabão de coco em
                        barra ou sabonete neutro ou infantil e uma esponja
                        macia. 🧼🧽🪣
                    </p>
                    <p>
                        Coloque água em um recipiente pequeno com o sabão
                        dentro, umedeça a esponja na mistura e passe por toda a
                        peça, deixe agir por 5 minutos e depois retire o sabão
                        com um pano molhado, repita por algumas vezes até
                        retirar todo sabão. Essa limpeza deve ser feita semanal
                        ou quinzenalmente. No dia a dia utilize apenas um pano
                        úmido com água.
                    </p>
                    <p>
                        ⚠️ NÃO UTILIZAR: Veja, detergente líquido, álcool ou
                        demais produtos químicos, pois são agressivos aos
                        materiais utilizados e à saúde de seu filho!
                    </p>
                    <p>
                        🚫 📣 Recomendamos retirar o colchão e colocá-lo em
                        local arejado semanal ou quinzenalmente para evitar que
                        haja proliferação de Mofo e Ácaro. Caso o produto fique
                        em local de alta umidade realizar esse procedimento
                        semanalmente. Utilizar um protetor impermeável auxilia a
                        manter a integridade do colchão, pois evita que absorva
                        líquidos que porventura venha a cair sobre o colchão. Em
                        cidades muito úmidas o tapete de drenagem abaixo do
                        colchão ajuda na ventilação🚱
                    </p>
                </div>
                <div className="w-100">
                    <img src={limpeza} alt="imagem limpeza" className="w-100" />
                </div>
            </div>
            <hr className="hr" />
            <div className="d-flex justify-content-center align-items-center infochild">
                <div className="">
                    <h2>
                        Cuidados com a limpeza de Lençóis, Protetores
                        Impermeáveis e Travesseiros Phan
                    </h2>

                    <p>
                        Lençóis e Protetores Impermeáveis podem ser lavados em
                        máquina de lavar, porém sem utilizar máquina secadora.
                        Já os Travesseiros Phant não devem ser lavados em
                        máquina de lavar, pois pode danificar a espuma.
                    </p>
                </div>
            </div>
            <hr className="hr" />
            <div className="d-flex justify-content-center align-items-center infochild">
                <div>
                    <h2>Alinhamento da Cama Phant</h2>

                    <p className="">
                        Esse é o vídeo de alinhamento da nossa cama. É muito
                        importante que seja feito de tempos em tempos, pois irá
                        conservar sua cama sempre alinhada.
                    </p>
                    <iframe
                        width="789"
                        height="434"
                        src="https://www.youtube.com/embed/EI-uWTHEtZA"
                        title="Alinhamento de Cama Phant"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                        className="youtubeVideo"
                    ></iframe>
                </div>
            </div>
            <hr className="hr" />

            <hr className="hr" />

            <hr className="hr" />
            <div className=" infochild">
                <h2>Arejar colchão</h2>
                <div className="d-flex justify-content-center align-items-center infochild">
                    <img src={vento} alt="vento" />
                    <div>
                        <p>
                            Nós recomendamos deixar o colchão arejando por
                            aproximadamente 48 horas, pois ele é embalado assim
                            que produzido e é necessária a dispersão dos gases
                            voláteis. O cheiro de produto novo pode permanecer
                            por aproximadamente 30 dias, no entanto o nosso
                            produto é totalmente hipoalergênico, não oferecendo
                            risco à saúde da sua família.
                        </p>
                        <p>
                            Sua cama já vai higienizada e pronta para uso,
                            indicamos apenas este cuidado com o colchão!
                        </p>
                    </div>
                </div>
            </div>
            <hr className="hr" />
            <div className="d-flex justify-content-center align-items-center divImgProtetor ">
                <div>
                    <h2 className="p-3">
                        <u>Instalação do Painel (Cerca)</u>
                    </h2>
                    <div className="passoApasso">
                        <p>
                            Primeiro instale a lateral. Atrás de cada peça terá
                            uma marcação de lateral ou cabeceira, nas laterais
                            estarão "Lat" e a numeração da peça, como no
                            exemplo:
                        </p>
                        <img
                            src={protetor5}
                            alt="protetor"
                            className="imgProtetor img-fluid"
                        />
                    </div>
                    <div className="passoApasso">
                        <p>
                            Nas cabeceiras estarão "Cab" e a numeração da peça,
                            como no exemplo:
                        </p>
                        <img
                            src={protetor6}
                            alt="protetor"
                            className="imgProtetor img-fluid"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
