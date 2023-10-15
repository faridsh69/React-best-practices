module.exports = (req, res) => {
  const data = require('./foods.json')
  const slug = req.path.replace('/foods/', '')
  let output = null

  for (const food of data.foods) {
    if (food.slug !== slug) continue

    output = food
  }

  if (output) {
    res.status(200).json({
      status: 'success',
      data: output,
    })
  } else {
    res.status(404).json({
      status: 'error',
      error: 'Can not find the data.',
    })
  }
}
