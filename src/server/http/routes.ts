import { Router } from 'chen/web';
import { Config } from 'chen/core';

export default function (router: Router, config: Config) {

  router.group({namespace: 'api', prefix: 'api'}, router => {
    router.route('GET', 'login', 'UsersController@login');

    router.group({middleware: ['UserAuth']}, router => {
      router.route('GET', 'logout', 'UsersController@logout');
      router.route('GET', 'hello', 'UsersController@hello');
    })
  });

  router.route('GET', '*', 'IndexController@index');
}
