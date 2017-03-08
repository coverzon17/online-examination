import { Owner } from 'app/models';
import { Hash } from 'chen/core';

export async function seed() {

  await Owner.connection().create({
    first_name: 'corazon',
    last_name: 'calimlim',
    email: 'corazon@gmail.com',
    password: await Hash.make('test')
  });
}
