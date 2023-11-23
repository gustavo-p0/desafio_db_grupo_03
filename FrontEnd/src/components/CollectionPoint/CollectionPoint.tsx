import { Link } from "react-router-dom";
import "./CollectionPoint.css";

type Material = {
  id: number;
  nome: string;
  cor: string;
  descricao: string;
};

type Administradora = {
  id: number;
  ativo: boolean;
  nome: string;
  cidade: string;
  estado: string;
  descricao: string;
};

type Ponto = {
  id: number;
  nome: string;
  descricao: string;
  latitude: number;
  longitude: number;
  logradouro: string;
  numero: number;
  bairro: string;
  estado: string;
  pais: string;
  cep: string;
  horario_inicio: string;
  horario_termino: string;
  funcionamento: string;
  administradora: Administradora;
  materiais: Material[];
};

function CollectionPoint(props: { ponto: Ponto }) {
  const {
    nome,
    descricao,
    latitude,
    longitude,
    logradouro,
    numero,
    bairro,
    estado,
    pais,
    cep,
    horario_inicio,
    horario_termino,
    funcionamento,
    administradora,
    materiais,
  } = props.ponto;
  return (
    <div className="c-CP">

      <div className="c-CP__info">
        <div className="c-CP__info__main">
          <p className="c-CP__info__main__name">{nome}</p>
          <p className="c-CP__info__main__description">{descricao}</p>
        </div>

        <div className="c-CP__info__mapInfo">
          <div className="c-CP__info__mapInfo__lat">
            <p className="c-CP__info__mapInfo__lat__text">Lat: {latitude}</p>
          </div>
          <div className="c-CP__indo__mapInfo__lon">
            <p className="c-CP__info__mapInfo__lon__text">Lon: {longitude}</p>
          </div>
          <Link to={'/busca'}>
            <button className="c-CP__info__mapInfo__seeOnMap">
              Ver no Mapa
            </button>
          </Link>
          
        </div>
        
      </div>
      <div className="c-CP__Disponibility">

      </div>
      <li className="c-point">
        
        <p>
          Pais: {pais} | Estado: {estado} | Bairro: {bairro}
        </p>
        <p>
          Logradouro: {logradouro} | N°: {numero}
        </p>
        <p>CEP: {cep}</p>
        <div>
          <p>Administradora {administradora.nome}</p>
          <p>Status {administradora.ativo ? "Ativa" : "Desativada"}</p>
          <p>Cidade: {administradora.cidade}</p>
          <p>Estado: {administradora.estado}</p>
          <p>Descrição: {administradora.descricao}</p>
        </div>
        <p>Funcionamento: {funcionamento}</p>
        <p>
          Abertura: {horario_inicio} | Fechamento: {horario_termino}
        </p>
        <p>Materiais Coletados:</p>
        {materiais.map((material) => {
          return (
            <div key={material.id}>
              <p>
                {material.nome} - {material.cor}
              </p>
              <p>{material.descricao}</p>
            </div>
          );
        })}
      </li>
    </div>
  );
}

export default CollectionPoint;
