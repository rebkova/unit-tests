export const filterNumbers = (array, largerThan) => {
  const largerFunction = (number) => {
    return largerThan >= number;
  }
  //filter() function creates an array with elements corresponding to largerFunction's output
  return array.filter(largerFunction);
}
