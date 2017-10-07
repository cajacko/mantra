import fetch from 'node-fetch';

export function getTrello() {
  return fetch(process.env.npm_package_config_trelloboardjson).then(res =>
    res.json(),
  );
}
