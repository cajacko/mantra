export default function (view, props) {
  return {
    type: 'SWITCH_VIEW',
    payload: { view, props },
  };
}
