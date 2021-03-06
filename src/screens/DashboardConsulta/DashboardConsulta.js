import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import {
 Container, Item, Data, Lista, DataContainer, Ano
} from './styles';

const items = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];

function ListaItem({ item }) {
  return (
    <Item>
      <span className="horario">08:15</span>
      <div className="separator" />
      <div className="dados-usuario">
        <div className="linha">
          <h2 className="nome">Manoela Soares</h2>
          <span className="pin">PIN 123456</span>
        </div>
        <div className="linha">
          <span className="cfa">CFA |</span>
          <span className="consulta">Primeira Consulta</span>
          <label className="origem">Origem: </label>
          <span className="origem">Porta</span>
        </div>
      </div>
      <div className="acao">
        Ir para ficha >
      </div>
    </Item>
  );
}

function DashboardConsulta() {
  return (
    <Container>
      <DataContainer>
        <Data>
          <button>
            <FiChevronLeft color="#3A6E4F" />
          </button>
          <span>Qui, 19 de Setembro</span>
          <button>
            <FiChevronRight color="#3A6E4F" />
          </button>
        </Data>
        <Ano>2019</Ano>
      </DataContainer>
      <Lista>
        {
          items.map((item) => (
            <ListaItem key={item.id} item={item} />
          ))
        }
      </Lista>
    </Container>
);
}

export default DashboardConsulta;
