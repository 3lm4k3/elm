import { setSupportingEntities, setBasicEntities } from "../actions/index"

export const addBasicEntities = (userId, basicEntities) => {
  return fetch("https://us-central1-elmawkaa-8bcab.cloudfunctions.net/addBasicEntities", {
    method: "POST",
    body: JSON.stringify({
      ...basicEntities,
      userId
    }),
    headers: {
      "Content-Type": 'application/json'
    }
  })
  .then(res => res.json())
  .catch(e => {
    return e.message
  })
}

export const addSupportingEntities = (userId, entities) => {
  return fetch("https://us-central1-elmawkaa-8bcab.cloudfunctions.net/addSupportingEntities", {
    method: "POST",
    body: JSON.stringify({
      userId,
      entities
    })
  })
  .then(res => res.json())
  .catch(e => {
    return e.message
  })
}

