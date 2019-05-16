
exports.up = function(knex, Promise) {
	return knex.schema
	.createTable('bookmark', function (tbl) {
		tbl.increments()
		
		tbl.string('note', 512)
		.notNullable()
		
		tbl.text('subtitle_range')
		
		tbl.time('current_position')
		.notNullable()
		
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
	return knex.schema.dropTableIfExists('bookmark')
};
