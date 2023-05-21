import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  const categories = [
    'shirts',
    'Pants',
    'Diin',
    'Taariikh',
    'Sheeko Faneed',
    'Afka iyo Suugaanta',
    'Horumarinta nafta',
  ];
  res.send(categories);
});

export default handler;
