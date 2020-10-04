export const findIndex = (array, value) => {
  if (array.includes(value) === false) {
    return -1;
  }
  
  else {
    return array.indexOf(value);
  }
  
}
