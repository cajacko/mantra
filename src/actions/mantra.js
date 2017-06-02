import uuidV1 from 'uuid/v1';

export function saveMantra(mantraId, title, description) {
  let id = mantraId;

  if (!id) {
    id = uuidV1();
  }

  return {
    type: 'SAVE_MANTRA',
    payload: { id, title, description },
  };
}

export function deleteMantra(id) {
  return {
    type: 'DELETE_MANTRA',
    payload: id,
  };
}
