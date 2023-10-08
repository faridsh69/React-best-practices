module.exports = (req, res) => {
  const zipCode = req.query.zip
  const orderNumber = req.path.replace('/orders/', '')
  const data = require('./orders.json')
  let findOrder = null

  for (const order of data.orders) {
    if (order.delivery_info.orderNo !== orderNumber) continue
    if (order.zip_code !== zipCode) continue
    findOrder = order
  }
  if (findOrder) {
    res.status(200).json({
      status: 'success',
      order: findOrder,
    })
  } else {
    res.status(400).json({
      status: 'fail',
      error: 'Order number or zip code is wrong.',
    })
  }
}
