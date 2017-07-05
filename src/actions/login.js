export default function (myjsonId, data) {
  return {
    type: 'LOGIN',
    payload: { myjsonId, data },
  };
}
