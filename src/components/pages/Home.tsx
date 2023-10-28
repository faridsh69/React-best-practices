import { useState, useMemo, useEffect } from 'react'
// import { useTranslation } from 'react-i18next'

import { PageLayout } from 'src/components/templates/PageLayout'
import { useCrud } from 'src/hooks/useCrud'
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material'
import { SkeletonBox } from '../organisms/AccordionMui'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'

export const Home = () => {
  // const { t } = useTranslation()
  const { list: foods } = useCrud('food')
  const { list: categories } = useCrud('category')

  const foodCategories = useMemo(() => categories.filter(c => c.type === 'Food'), [categories])

  const [expanded, setExpanded] = useState(null)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null)
  }

  useEffect(() => {
    setExpanded(foodCategories[0]?.id)
  }, [foodCategories])

  return (
    <PageLayout>
      {!foodCategories.length && (
        <>
          <SkeletonBox />
          <SkeletonBox />
        </>
      )}
      {foodCategories.length &&
        foodCategories.map(category => {
          return (
            <Accordion
              key={category.id}
              expanded={expanded === category.id}
              onChange={handleChange(category.id)}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{category.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {foods.map(food => {
                  return (
                    <Card sx={{ maxWidth: 345 }} key={food.id}>
                      <CardHeader
                        avatar={
                          <Avatar sx={{ bgcolor: 'red' }} aria-label='recipe'>
                            R
                          </Avatar>
                        }
                        action={
                          <IconButton aria-label='settings'>
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title={food.title}
                        subheader={
                          <div>
                            <del>{food.price}</del> {food.discount_price} Euro
                          </div>
                        }
                      />
                      <CardMedia
                        component='img'
                        height='194'
                        image={food['main-image']}
                        alt='Paella dish'
                      />
                      <CardContent>
                        <Typography variant='body2' color='text.secondary'>
                          {food.description}
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                        <IconButton aria-label='add to favorites'>
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label='share'>
                          <ShareIcon />
                        </IconButton>
                      </CardActions>
                    </Card>
                  )
                })}
              </AccordionDetails>
            </Accordion>
          )
        })}
    </PageLayout>
  )
}

// chip for tags, relateds > click ro tag dialog baz beshe
// calorie,
