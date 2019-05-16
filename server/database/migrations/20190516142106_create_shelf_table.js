
exports.up = function(knex, Promise) {
	return knex.schema
	.createTable('shelf', function (tbl) {
		tbl.increments()
		
		tbl.string('name', 128)
		.notNullable()
		
		tbl.string('category', 128)
		.notNullable()
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('shelf')
};
