
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
