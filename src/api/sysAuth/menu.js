import { defHttp } from '/@/utils/http/axios';

const BASEURL = '/sysMenu';

const Api = {
  menu: `${BASEURL}/loginMenuTree`,
};

/**
 * @description: user login api
 */
export function getMenu() {
  return defHttp.get({
    url: Api.menu,
  });
}
