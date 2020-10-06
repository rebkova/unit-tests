export const findIndex = (array, value) => {
  if (array.includes(value) === false) {
    return -1;
  }
  
  else {
    //works only with this line as well - why?
    return array.indexOf(value);
  }
  
}
