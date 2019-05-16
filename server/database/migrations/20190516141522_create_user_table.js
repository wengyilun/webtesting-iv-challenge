
exports.up = function(knex, Promise) {
	return knex.schema
	.createTable('user', function (tbl) {
		tbl.increments()
		
		tbl.string('email', 128)
		.notNullable()
		
		tbl.string('password', 128)
		.notNullable()
		
		tbl.string('phone', 30)
		.notNullable()
		
		tbl.string('username', 128)
		.notNullable()
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('user')
};
