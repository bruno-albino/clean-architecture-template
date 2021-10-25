 
import { Router } from 'express';
import { adaptRoute } from 'adapters/express-route-adapter';
import { makeExampleController } from 'main/factories/get';

export default (router: Router): void => {
  router.get('/', adaptRoute(makeExampleController()));
}
