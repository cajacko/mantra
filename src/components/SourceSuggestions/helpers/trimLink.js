const links = {};

const trimLink = (link) => {
  const cachedLink = links[link];

  if (cachedLink) return cachedLink;

  const newLink = link
    .replace(/^(https:\/\/|http:\/\/)/, '')
    .replace(/^(www\.)/, '');

  links[link] = newLink;

  return newLink;
};

export default trimLink;
