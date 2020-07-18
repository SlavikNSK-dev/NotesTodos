type TArrayToObject<T = any> = {
  byId: { [key: string]: T };
  allIds: string[];
};

type TDefaultKeyField = {
  id: string;
};

export const arrayToObject = <T extends TDefaultKeyField = any>(array: T[]): TArrayToObject<T> => {
  return array.reduce(
    (obj: TArrayToObject<T>, item: T): TArrayToObject<T> => {
      return {
        ...obj,
        byId: {
          ...obj.byId,
          [item.id]: item,
        },
        allIds: [...obj.allIds, item.id],
      };
    },
    { byId: {}, allIds: [] } as TArrayToObject<T>,
  );
};
