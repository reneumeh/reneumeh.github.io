
export const camelize = (str : string) => {
  return str.toLocaleLowerCase().replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '').replace(/[|&;$/%@"<>()+,]/g, "");
}

export const wait = (delay: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

export const useTotalPageHandler = (totalCount: number, pageSize: number) => {
  return Math.ceil(totalCount / pageSize)
}

export const longLatToCartesian = (longitude: number, latitude: number) => {
  const lambda = longitude * Math.PI/180;
  const phi = latitude * Math.PI/180;
  const mercN = Math.log(Math.tan((Math.PI/4) + (phi/2)));
  const left = String(11.6 * lambda + 36.6);
  const top = String(-13.8 * mercN + 23.6);
  return { top, left }
}
