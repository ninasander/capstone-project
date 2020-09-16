export function loadLocally(key) {
  try {
    const serializedData = localStorage.getItem(key)
    serializedData && JSON.parse(serializedData)
  } catch (error) {
    console.log(error)
  }
}

export function saveLocally(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.log(error)
  }
}
