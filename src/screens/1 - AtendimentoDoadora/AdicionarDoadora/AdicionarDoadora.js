import React, { useState } from 'react';
import AdicionarDoadoraInicio from './AdicionarDoadoraInicio';
import AdicionarDoadoraConcluir from './AdicionarDoadoraConcluir';

function AdicionarDoadora() {
  const [etapa, setEtapa] = useState(1);

  switch (etapa) {
    case 1: return <AdicionarDoadoraInicio onProximo={() => setEtapa(2)} />;
    case 2: return <AdicionarDoadoraConcluir onVoltar={() => setEtapa(1)} />;
    default: return null;
  }
}

export default AdicionarDoadora;
