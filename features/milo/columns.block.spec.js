module.exports = {
  FeatureName: 'Columns Block',
  features: [
    {
      tcid: '0',
      name: '@Columns',
      path: '/drafts/nala/blocks/columns/columns',
      data: {
        rows: 1,
        columns: 3,
        col0: 'Other glossary terms',
        col1: 'Related Adobe products',
        col2: 'Adobe Target',
      },
      tags: '@columns @smoke @regression @milo,',
    },

    {
      tcid: '1',
      name: '@Columns (contained)',
      path: '/drafts/nala/blocks/columns/columns-contained',
      data: {
        rows: 1,
        columns: 2,
        col0: 'Market Segmentation',
        col1: 'Adobe Analytics',
      },
      tags: '@columns @columns-contained @smoke @regression @milo,',
    },

    {
      tcid: '2',
      name: '@Columns (contained,middle)',
      path: '/drafts/nala/blocks/columns/columns-contained-middle',
      data: {
        rows: 1,
        columns: 2,
        col0: 'Descriptive Analytics',
        col1: 'Adobe Target',
      },
      tags: '@columns @columns-contained-middle @smoke @regression @milo,',
    },

    {
      tcid: '3',
      name: '@Columns (table)',
      path: '/drafts/nala/blocks/columns/columns-table',
      data: {
        rows: 4,
        columns: 8,
        col0: 'PROS',
        col1: 'CONS',
        col2: 'Detail: Waterfall’s meticulous upfront planning results in detailed project plans.',
        col3: 'Rigid: With a strict blueprint, departure from the original plan is difficult.',
      },
      tags: '@columns @columns-table @smoke @regression @milo,',
    },

    {
      tcid: '4',
      name: '@Columns (contained,table)',
      path: '/drafts/nala/blocks/columns/columns-contained-table',
      data: {
        rows: 10,
        columns: 20,
        col0: 'Role',
        col1: 'Name',
        col2: 'Engineering Manager',
        col3: 'Chris Millar',
      },
      tags: '@columns @columns-contained-table @smoke @regression @milo,',
    },

  ],
};
