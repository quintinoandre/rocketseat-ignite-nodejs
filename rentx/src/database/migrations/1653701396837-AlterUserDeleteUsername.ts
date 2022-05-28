import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

class AlterUserDeleteUsername1653701396837 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropColumn('users', 'username');
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn(
			'users',
			new TableColumn({
				name: 'username',
				type: 'varchar',
			})
		);
	}
}

export { AlterUserDeleteUsername1653701396837 };
