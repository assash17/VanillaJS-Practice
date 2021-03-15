export const api = {
  url: "https://v6.exchangerate-api.com/v6/0e38de9a6fc5746cb6d48537/latest",
  getRate: async (code) => {
    const res = await fetch(`${api.url}/${code}`);
    return await res.json();
  },
};
