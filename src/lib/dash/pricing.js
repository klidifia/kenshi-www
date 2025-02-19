export const getSyncPrice = (interval, timeout, duration) => {
  const runs = (30 * 24 * 60 * 60) / interval;
  const ms = runs * timeout;
  return Math.round(duration * ((ms / 3e10) * 105) * 100) / 100;
};

export const getReverseAPIPrice = (interval, timeout, duration) => {
  const runs = (30 * 24 * 60 * 60) / interval;
  const ms = runs * timeout;
  return Math.round(duration * ((ms / 3e10) * 100 * 1.2) * 100) / 100;
};

export const getGraphQLPrice = (requests) =>
  Math.round((requests / 1e6) * 50 * 100) / 100;
