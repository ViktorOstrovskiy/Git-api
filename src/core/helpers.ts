export const debounce = (func: any, timeout = 300) => {
  let timer: number | null | ReturnType<typeof setTimeout>;
  return (...args: Array<string>) => {
    console.log("dsa", timer);

    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      console.log("time", timer);
      timer = null;
      func(...args);
    }, timeout);
  };
};
