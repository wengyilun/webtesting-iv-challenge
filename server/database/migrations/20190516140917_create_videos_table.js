
exports.up = function(knex, Promise) {
	return knex.schema
	.createTable('video', function (tbl) {
		tbl.increments()
		
		tbl.string('title', 128)
		.notNullable()
		
		tbl.string('description', 512)
		
		tbl.string('video_url', 128)
		.notNullable()
		
		tbl.time('duration')
		.notNullable()
		
		tbl.time('current_cursor')
		// .notNullable()
		
		tbl.integer('author_id')
		.unsigned()
		.notNullable()
		.references('id')
		.inTable('user')
		.onDelete('CASCADE')
		.onUpdate('CASCADE');
		
		tbl.integer('shelf_id')
		.unsigned()
		.notNullable()
		.references('id')
		.inTable('shelf')
		.onDelete('RESTRICT')
		.onUpdate('CASCADE');
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('video')
};
