import {
  ApiProp,
  ApiPropWithBody,
  BaseApiProp,
  BaseApiPropWithBody,
} from "../types";
import settings from "../settings";

export const BASE_BACKEND = settings.api[process.env.NODE_ENV];

const baseHeaders = {
  "Content-Type": "application/json; charset=utf-8",
};
/**
 * Base Apis
 *
 * @param param0
 */
const baseGet = async ({
  url,
  params,
  headers,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
BaseApiProp): Promise<any> => {
  const urlObj = new URL(url);
  const p = new URLSearchParams();
  // パラメタがあった場合は追加
  if (params) {
    Object.keys(params).forEach(key => p.append(key, params[key]));
    urlObj.search = p.toString();
  }
  return fetch(urlObj.toString(), {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    // credentials: 'include',
    headers,
    redirect: "follow",
  })
    .then(response => response.json())
    .catch(e => e);
};

const basePost = async ({
  url,
  params,
  body,
  headers,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
BaseApiPropWithBody): Promise<any> => {
  const urlObj = new URL(url);
  const p = new URLSearchParams();
  // パラメタがあった場合は追加
  if (params) {
    Object.keys(params).forEach(key => p.append(key, params[key]));
    urlObj.search = p.toString();
  }
  return fetch(urlObj.toString(), {
    method: "Post",
    mode: "cors",
    cache: "no-cache",
    // credentials: 'include', // include, same-origin, *omit
    headers,
    redirect: "follow",
    body: JSON.stringify(body), // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
  })
    .then(response => response.json()) // レスポンスの JSON を解析
    .catch(e => e);
};

export const getData = async ({
  url = BASE_BACKEND,
  params,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
ApiProp): Promise<any> => {
  const prop = {
    url,
    params,
    headers: baseHeaders,
  };
  return baseGet(prop);
};

export const postData = async ({
  url = BASE_BACKEND,
  params,
  body,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
ApiPropWithBody): Promise<any> => {
  const prop = {
    url,
    params,
    body,
    headers: baseHeaders,
  };
  return basePost(prop);
};
