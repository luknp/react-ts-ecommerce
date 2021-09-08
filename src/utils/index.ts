export const countProcentFever = (n1: number, n2: number) => {
  return Math.ceil(((n1 - n2) / n1) * 100);
};

export const buildFiltersObjFromQueryParams = (queryParams: string): { [k: string]: any } => {
  const searchParams = new URLSearchParams(queryParams);
  const resObj: { [k: string]: any } = {};
  searchParams.forEach(function (value, key) {
    resObj[key] = value;
  });
  return resObj;
};
