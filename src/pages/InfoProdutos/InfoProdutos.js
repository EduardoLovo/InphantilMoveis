import React from "react";
import "./InfoProdutos.css";
import YouTube from 'react-youtube';
import './InfoProdutos.css'
import limpeza from '../../images/limpeza.png'
import garantia from '../../images/garantia.png'
import vento from '../../images/vento.png'

export const InfoProdutos = () => {
  return (
    <div className="contentInfo">
      
      <div className="limpeza">
        <div className="limpText">
          <h2>Limpeza</h2>
          <p>Limpeza da Cama, Tapete e Protetor de parede 🚰 </p>
          <p>Para limpar seu produto
            você deve usar sabão de coco em barra ou sabonete neutro ou infantil e
            uma esponja macia. 🧼🧽🪣 </p>
            <p>Coloque água em um recipiente pequeno com o
            sabão dentro, umedeça a esponja na mistura e passe por toda a peça,
            deixe agir por 5 min e depois retire o sabão com um pano molhado, repita
            por algumas vezes até retirar todo sabão. Essa limpeza deve ser feita
            semanal ou quinzenalmente. No dia a dia utilize apenas um pano úmido com
            água. </p>
            <p>⚠️ NÃO UTILIZAR: Veja, detergente líquido, álcool ou demais
            produtos químicos. Pois estes são agressivos para materiais sintéticos e
            para saúde de seu filho!</p>
          <p >
            🚫 📣 Recomendamos retirar o colchão e
            colocá-lo em local arejado semanal ou quinzenalmente para evitar que
            haja proliferação de Mofo e Ácaro. Caso o produto fique em local de alta
            umidade realizar esse procedimento semanalmente. Utilizar um protetor
            impermeável auxilia a manter a integridade do colchão, pois evita que
            absorva líquidos que por ventura venha a cair sobre o colchão. E em
            cidades muito úmidas o tapete de drenagem abaixo do colchão ajuda na
            ventilação do mesmo🚱
          </p>
        </div>
        <div className="limpImage">
          <img src={limpeza} alt="im"/>

        </div>
      </div>

      <div className="alinham limpeza">
        <YouTube videoId="EI-uWTHEtZA" />
        <p>
          Esse é o vídeo de alinhamento da nossa cama, recomendamos e é muito
          importante que seja feito de tempos em tempos, pois irá conservar sua
          cama sempre alinhada.
        </p>
      </div>

      <div className="garantia limpeza">
        <div>
          <img src={garantia} alt='gara' />
        </div>
        <div className="garantiaText" >
          <p>
            📝 GARANTIA ⌛ Nossos produtos possuem 1 ano de garantia nas espumas, e
            180 dias no revestimento. Esta garantia é fornecida pelas indústrias das
            matérias primas. Em caso de defeito de Fabricação ou problemas advindos
            do transporte entre em contato imediatamente com o setor de atendimento!
            (Em prazo máximo de 7 dias) 
          </p>
          <p>🗓️ ATENÇÃO!!! Trocas e devolução devem ser
            feitas em até 7 dias do recebimento, o produto não pode ter sido usado e
            a embalagem deve ser a mesma do envio! </p>

        </div>

      </div>

      <div className="alinham limpeza">
        <p>
          Este é o vídeo de montagem da nossa Cama, é importante seguir os passos
          do mesmo, não alterando a ordem de montagem! link do YouTube:
          
        </p>
        <YouTube videoId="TAtMg7sJZA8" />
      </div>

      <div className=" limpeza arejar">
        <img src={vento} alt='vento' />
        <p>
          Nos recomendamos deixar o colchão arejando por aproximadamente 48 horas,
          pois como ele é embalado assim que produzido é necessária a dispersão
          dos gases voláteis, o cheiro do produto novo pode permanecer por
          aproximadamente 30 dias, no entanto nosso produto é totalmente
          hipoalergênico, não oferecendo risco à saúde da sua família. 
        </p>
        <p>Sua cama já
          vem higienizada e pronta para uso, indicamos apenas este cuidado com
          relação ao colchão! </p>
      </div>
      
    </div>
  );
};
