const sleep = (ms = 160) =>
  new Promise((res) => {
    const timer = setTimeout(res, ms);
    return () => clearTimeout(timer);
  });

export default sleep;