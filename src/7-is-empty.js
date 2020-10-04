export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    return stringArrayOrObject === ''; //if variable is '', it returns true, otherwise false
  }
  else if (type === 'object') {
    if (Array.isArray(stringArrayOrObject))
      return stringArrayOrObject.length == 0; //[] creates a new empty array
    else
      return Object.keys(stringArrayOrObject).length == 0;
  }
  else {
    return false
  }
}
