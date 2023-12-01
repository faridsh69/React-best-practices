import appetiser from 'src/images/categories/appetiser.svg'
import beer from 'src/images/categories/beer.svg'
import burger from 'src/images/categories/burger.svg'
import coffee from 'src/images/categories/coffee.svg'
import desert from 'src/images/categories/desert.svg'
import drink from 'src/images/categories/drink.svg'
import energy from 'src/images/categories/energy.svg'
import kids from 'src/images/categories/kids.svg'
import pasta from 'src/images/categories/pasta.svg'
import salad from 'src/images/categories/salad.svg'
import seafood from 'src/images/categories/seafood.svg'
import sideDish from 'src/images/categories/side-dish.svg'
import sideSause from 'src/images/categories/side-sause.svg'
import soup from 'src/images/categories/soup.svg'
import steak from 'src/images/categories/steak.svg'
import vegan from 'src/images/categories/vegan.svg'
import vodka from 'src/images/categories/vodka.svg'
import water from 'src/images/categories/water.svg'

const CATEGORY_SVGS = {
  appetiser: appetiser,
  appetizer: appetiser,
  beer: beer,
  burger: burger,
  coffee: coffee,
  desert: desert,
  drink: water,
  energy: energy,
  kids: kids,
  pasta: pasta,
  salad: salad,
  salads: salad,
  seafood: seafood,
  'main course': sideDish,
  sideDish: sideDish,
  sideSause: sideSause,
  soup: soup,
  soups: soup,
  steak: steak,
  vegan: vegan,
  vodka: vodka,
  'white wine': vodka,
  'red wine': drink,
  vegetarian: vegan,
  water: water,
}

export const CategoryIcon = props => {
  const { category, className } = props
  const title = category.title.toLowerCase()
  console.log('1 title', title)
  console.log('2 CATEGORY_SVGS', CATEGORY_SVGS)
  const svg = CATEGORY_SVGS[title] || sideDish

  return <img src={svg} className={className} alt={category.title} />
}
