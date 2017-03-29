import { Router } from 'chen/web';
import { Config } from 'chen/core';

export default function (router: Router, config: Config) {

  router.group({namespace: 'api', prefix: 'api'}, router => {
    router.route('POST', 'user/login', 'UsersController@login');
    router.route('POST', 'user/register', 'UsersController@register');

    router.group({middleware: ['UserAuth']}, router => {
      router.route('GET', 'companies', 'CompanyController@show');
      router.route('POST', 'user/logout', 'UsersController@logout');
      router.route('GET', 'hello', 'UsersController@hello');
      router.route('GET', 'user/current', 'UsersController@show');
    });
  });

  router.route('GET', '*', 'IndexController@index');
}
