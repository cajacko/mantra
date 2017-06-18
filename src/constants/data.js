const mantra = [];
let tempLastID;

for (let i = 0; i < 20; i += 1) {
  mantra.push({
    id: i,
    title: `I am Mantra woo ${i}`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    links: [
      { title: 'Link 1', url: 'http://wikipedia.com' },
      { title: 'Link 2', url: 'http://wikipedia.com' },
    ],
  });

  tempLastID = i;
}

const lastID = tempLastID;

export { mantra, lastID };
