import { version } from 'root/package.json';

export default function () {
  return {
    type: 'UPDATE_VERSION',
    payload: version,
  };
}
