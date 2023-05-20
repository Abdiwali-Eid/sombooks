import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  const categories = ['shirts', 'Pants', 'Diin'];
  res.send(categories);
});

export default handler;
