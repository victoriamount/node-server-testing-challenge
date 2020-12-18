exports.seed = function(knex) {
  return knex('fruits').del()
    .then(function () {
      return knex('fruits').insert([
        {name: 'Orange', color: 'orange'},
        {name: 'Apple', color: 'red'},
        {name: 'Lemon', color: 'yellow'}
      ]);
    });
};
