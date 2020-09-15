export function loadLocally(key) {
  try {
    const serializedData = localStorage.getItem(key)
    if (serializedData) {
      return JSON.parse(serializedData)
    }
  } catch (error) {
    console.log(error)
  }
}

export function saveLocally(key, value) {
  try {
    const serializedData = JSON.stringify(value)
    localStorage.setItem(key, serializedData)
  } catch (error) {
    console.log(error)
  }
}
