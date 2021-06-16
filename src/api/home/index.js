import request from '../../plugins/request'


export function queryHome() {
  return request({
    url: "/portals/query_portals",
    method: "post",
    // data,
  });
}