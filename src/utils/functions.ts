export const arrayToObjectById = (array: any[]) => {
  return array.reduce((obj: any, item: any) => {
    return {
      ...obj,
      [item['id']]: item,
    };
  }, {});
};
