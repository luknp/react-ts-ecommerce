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

export const buildQueryParamsString = (filtersParams: { [k: string]: any }): string => {
  const data = JSON.parse(JSON.stringify(filtersParams));
  const searchParams = new URLSearchParams();
  let key = 'search';
  if (data[key]) {
    searchParams.append(key, data[key]);
    delete data[key];
  }
  key = 'category';
  if (data[key]) {
    searchParams.append(key, data[key]);
    delete data[key];
  }
  Object.keys(data).forEach(k => {
    searchParams.append(k, data[k]);
  });
  const res = searchParams.toString();
  return res;
};
