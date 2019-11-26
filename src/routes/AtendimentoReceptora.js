import React from 'react';
import { useSelector } from 'react-redux';
import DashboardRoute from '~/components/DashboardRoute';
import PreCadastro from '~/screens/PreCadastro';
import AdicionarEvento from '~/screens/AdicionarEvento';
import AdicionarDoadora from '~/screens/AdicionarDoadora';
import DoadoraPreCadastro from '~/screens/DoadoraPreCadastro';
import DoadoraTriagem from '~/screens/DoadoraPreCadastro/DoadoraTriagem';
import NovoHistorico from '~/components/NovoHistorico';
import PreencherUltrassom from '~/screens/PreencherUltrassom';
import NovaColeta from '~/screens/NovaColeta';
import ResultadoExame from '~/screens/ResultadoExame';
import Doadora from '~/screens/Doadora';
import NovoHistoricoDoadora from '~/screens/Doadora/NovoHistoricoDoadora';
import dashboardRoutes from './MenuRoutes';
import Contato from '~/screens/AtendimentoReceptora/Contato';
import EmDesenvolvimento from '~/screens/EmDesenvolvimento';
import BancoOvuloDetalhe from '~/screens/AtendimentoReceptora/BancoOvuloDetalhe';
import ListaEsperaDetalhe from '~/screens/AtendimentoReceptora/ListaEsperaDetalhe';

function AtendimentoReceptora() {
  const role = useSelector((state) => state.Auth.role);

  return (
    <>
      {/* <DashboardRoute path="/pre-cadastros/:id" exact component={PreCadastro} /> */}
      <DashboardRoute path="/receptora/contatos/:id" exact component={Contato} />
      <DashboardRoute path="/receptora/banco-ovulos/:id" exact component={BancoOvuloDetalhe} />
      <DashboardRoute path="/receptora/lista-espera/:id" exact component={ListaEsperaDetalhe} />
      {dashboardRoutes[role].map((route) => (
        <DashboardRoute exact path={route.path} component={route.component} label={route.label} />
      ))}
    </>
  );
}

export default AtendimentoReceptora;