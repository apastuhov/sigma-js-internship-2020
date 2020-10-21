const getUsers = async (url: string) => {
  let res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Couldn't fetch ${url}, status: ${res.status}`);
  }
  return await res.json();
};

const getUsersByParams = async (url: string, data: string) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: data
  });
  return await res.json();
};
export { getUsers, getUsersByParams };
