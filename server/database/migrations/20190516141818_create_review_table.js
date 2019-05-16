
exports.up = function(knex, Promise) {
	return knex.schema
	.createTable('review', function (tbl) {
		tbl.increments()
		
		tbl.integer('rating', 10)
		.notNullable()
		
		tbl.string('comment', 512)
		
		tbl.integer('user_id')
		.unsigned()
		.notNullable()
		.references('id')
		.inTable('user')
		.onDelete('CASCADE')
		.onUpdate('CASCADE');
		
		tbl.integer('video_id')
		.unsigned()
		.notNullable()
		.references('id')
		.inTable('video')
		.onDelete('CASCADE')
		.onUpdate('CASCADE');
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('review')
};
