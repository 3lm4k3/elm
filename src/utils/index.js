export const addBasicEntities = (userId, basicEntities) => {
  return fetch("https://us-central1-elmawkaa-8bcab.cloudfunctions.net/addBasicEntities", {
    method: "POST",
    body: JSON.stringify({
      basicEntities,
      userId
    })
  })
  .then(res => res.json())
  .catch(e => {
    throw new Error(e)
  })
}

export const addSupportingEntities = (userId, entities) => {
  return fetch("https://us-central1-elmawkaa-8bcab.cloudfunctions.net/addSupportingEntities", {
    method: "POST",
    body: JSON.stringify(entities)
  })
  .then(res => res.json())
  .catch(e => {
    throw new Error(e)
  })
}
