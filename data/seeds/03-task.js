
exports.seed = async function(knex) {
  await knex('table_name').insert([
        {id: 1, description: 'rowValue1', notes:'notes1', completed: false},
        {id: 2, description: 'rowValue2', notes:'notes2', completed: false},
        {id: 3, cescription: 'rowValue3', notes:'notes3', completed: false},
      ]);
};
