const getPexelApi = () => {
  const pexelApi = `https://api.pexels.com/v1/search`;

  fetch(pexelApi, {
    headers: {
      Authorization: "563492ad6f9170000100000188797255cbcb4ca682d028f7b4c510b6",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
