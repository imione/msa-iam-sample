import { Migration } from '@mikro-orm/migrations';

export class Migration20211219172816 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `User` (`id` varchar not null, `created_at` datetime not null, `updated_at` datetime not null, `version` int(11) not null default 1, `external_id` varchar(255) not null, `meta` json null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `User` add primary key `User_pkey`(`id`);');
    this.addSql('alter table `User` add index `User_created_at_index`(`created_at`);');
    this.addSql('alter table `User` add index `User_updated_at_index`(`updated_at`);');
    this.addSql('alter table `User` add index `User_external_id_index`(`external_id`);');
    this.addSql('alter table `User` add unique `User_external_id_unique`(`external_id`);');
  }

}
