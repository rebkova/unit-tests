export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    return stringArrayOrObject === ''; //if variable is '', it returns true, otherwise false
  }
  else if (type === 'object') {
    if (Array.isArray(stringArrayOrObject))
      return stringArrayOrObject.length === 0; //[] creates a new empty array! (doesn't work)
    else
      return Object.entries(stringArrayOrObject).length === 0; //Object.keys() returns a new array, where array items are keys (works too)
  }
  else {
    return false
  }
}
