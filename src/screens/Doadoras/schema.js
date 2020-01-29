function onAdd({ history }) {
  history.push('/doadora/novo-evento');
}

function onClick({ history }, id) {
  history.push(`/doadora/detalhes/${id}`);
}

export default {
  onAdd,
  onClick,
  fields: [
    {
      label: 'PIN',
      name: 'name',
      type: 'string',
    },
    {
      label: 'Doações',
      name: '',
      type: '',
    },
    {
      label: 'Origem',
      name: '',
      type: 'string',
    },
    {
      label: 'Nome',
      name: '',
      type: 'string',
    },
    {
      label: 'Etnia',
      name: '',
      type: 'string',
    },
    {
      label: 'D.P.M',
      name: '',
      type: 'string',
    },
    {
      label: 'A.C.O',
      name: '',
      type: 'string',
    },
    {
      label: 'Ciclo Casado',
      name: '',
      type: 'string',
    },
    {
      label: 'Status de Atendimento',
      name: '',
      type: 'string',
    },
    {
      label: 'Perfil',
      name: '',
      type: 'string',
    },
  ],
  filters: [
    {
      label: 'Programadas',
      name: 'programadas',
      action: async ({ setData, setLoading }) => {
        const response = [1];
        setData(response);
        setLoading(false);
      }
    },
    {
      label: 'Estimulação',
      name: 'estimulação',
      action: async ({ setData, setLoading }) => {
        const response = [1, 2];
        setData(response);
        setLoading(false);
      }
    },
    {
      label: 'Coleta Realizada',
      name: 'coleta-realizada',
      action: async ({ setData, setLoading }) => {
        const response = [1, 2, 3];
        setData(response);
        setLoading(false);
      }
    },
    {
      label: 'Stand',
      name: 'stand',
      action: async ({ setData, setLoading }) => {
        const response = [1, 2, 3, 4];
        setData(response);
        setLoading(false);
      }
    },
    {
      label: 'CFA',
      name: 'cfa',
      action: async ({ setData, setLoading }) => {
        const response = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        setData(response);
        setLoading(false);
      }
    },
  ]
};