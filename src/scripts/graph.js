const graph = {
  'nodes': [{
    'id': 'Myriel',
    'group': 1
  },
  {
    'id': 'Napoleon',
    'group': 1
  },
  {
    'id': 'Mlle.Baptistine',
    'group': 1
  },
  {
    'id': 'Mme.Magloire',
    'group': 1
  },
  {
    'id': 'CountessdeLo',
    'group': 1
  },
  {
    'id': 'Geborand',
    'group': 1
  },
  {
    'id': 'Champtercier',
    'group': 1
  },
  {
    'id': 'Cravatte',
    'group': 1
  },
  {
    'id': 'Count',
    'group': 1
  },
  {
    'id': 'Labarre',
    'group': 2
  },
  {
    'id': 'Valjean',
    'group': 0
  },
  {
    'id': 'Isabeau',
    'group': 2
  },
  {
    'id': 'Listolier',
    'group': 3
  },
  {
    'id': 'Fameuil',
    'group': 3
  },
  {
    'id': 'Favourite',
    'group': 3
  },
  {
    'id': 'Zephine',
    'group': 3
  },
  {
    'id': 'Thenardier',
    'group': 4
  },
  {
    'id': 'Javert',
    'group': 0
  },
  {
    'id': 'Perpetue',
    'group': 3
  },
  ],
  'links': [{
    'source': 'Napoleon',
    'target': 'Myriel',
    'value': 1
  },
  {
    'source': 'Mlle.Baptistine',
    'target': 'Myriel',
    'value': 4
  },
  {
    'source': 'Mme.Magloire',
    'target': 'Myriel',
    'value': 5
  },
  {
    'source': 'Isabeau',
    'target': 'Mlle.Baptistine',
    'value': 6
  },
  {
    'source': 'CountessdeLo',
    'target': 'Zephine',
    'value': 1
  },
  {
    'source': 'Geborand',
    'target': 'Myriel',
    'value': 1
  },
  {
    'source': 'Champtercier',
    'target': 'Favourite',
    'value': 1
  },
  {
    'source': 'Cravatte',
    'target': 'Javert',
    'value': 1
  },
  {
    'source': 'Count',
    'target': 'Fameuil',
    'value': 2
  },
  {
    'source': 'Valjean',
    'target': 'Labarre',
    'value': 1
  },
  {
    'source': 'Zephine',
    'target': 'Mme.Magloire',
    'value': 3
  },
  {
    'source': 'Thenardier',
    'target': 'Mlle.Baptistine',
    'value': 3
  },
  {
    'source': 'Listolier',
    'target': 'Myriel',
    'value': 5
  },
  {
    'source': 'Thenardier',
    'target': 'Valjean',
    'value': 1
  },
  {
    'source': 'Isabeau',
    'target': 'Perpetue',
    'value': 1
  },
  {
    'source': 'Perpetue',
    'target': 'Javert',
    'value': 8
  },
  {
    'source': 'Favourite',
    'target': 'Perpetue',
    'value': 8
  },
  {
    'source': 'Count',
    'target': 'Perpetue',
    'value': 4
  },
  ]
};

export default graph;
