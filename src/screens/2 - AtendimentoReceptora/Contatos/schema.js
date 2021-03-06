function onClick({ history }, id) {
  history.push(`/receptora/contatos/${id}`);
}

// function onAdd({ history, params }) {
//   history.push(`/doadora/pre-cadastros/${params.id}/nova-doadora`);
// }

function onSync({ history, params }) {
  const pin = prompt('Informe o numero do pin');
}

export default {
  onClick,
  onSync,
  fields: [
    {
      label: 'PIN',
      name: 'pin',
      type: 'string',
      padding: true,
    },
    {
      label: 'Nome',
      name: 'name',
      type: 'string',
    },
    {
      label: 'E-mail',
      name: 'email',
      type: 'string',
    },
    {
      label: 'Cadastro',
      name: 'cadastro',
      type: 'date',
    },
    {
      label: 'Questionario',
      name: 'questionario',
      type: 'string',
    },
  ],
  // filters: [
  //   {
  //     label: 'Todas',
  //     name: 'todas',
  //   },
  //   {
  //     label: 'Programadas',
  //     name: 'programadas',
  //   },
  //   {
  //     label: 'Estimulação',
  //     name: 'estimulacao',
  //   },
  //   {
  //     label: 'Coleta Realizada',
  //     name: 'coletaRealizada',
  //   },
  //   {
  //     label: 'Stand',
  //     name: 'stand',
  //   },
  //   {
  //     label: 'CFA',
  //     name: 'cfa',
  //   },
  // ]
};
