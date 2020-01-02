import request from "@/plugins/axios";
// 客户端版本 
export async function queryCurrVersion(params) {
  return request.get("/api/h5/queryCurrVersion", params);
}
// 获取sdk配置信息
export async function getSdkConfig(params) {
  return request.get("/api/h5/getSdkConfig", params);
}
export const getUserCorpAuthMulti = (params) => request.get('/api/h5/getCompanys', params)