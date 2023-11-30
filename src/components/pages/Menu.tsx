// @ts-nocheck
import { PageLayout } from 'src/components/templates/PageLayout'
import { useCrud } from 'src/hooks/useCrud'
import {
  Typography,
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
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

export const Menu = () => {
  const { list: foodCategories } = useCrud('menu')

  return (
    <PageLayout>
      {!foodCategories.length && (
        <>
          <SkeletonBox />
          <SkeletonBox />
        </>
      )}
      <br />
      <div className='categories'>
        {foodCategories.length && (
          <Swiper
            slidesPerView='auto'
            centeredSlides={true}
            spaceBetween={48}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className='categories-swiper'
          >
            {foodCategories.map(category => {
              return (
                <SwiperSlide key={category.id} className='categories-swiper-slide'>
                  <div className='categories-swiper-slide-card'>
                    <div className='categories-swiper-slide-card-header'>
                      <img
                        src={category.avatar}
                        className='categories-swiper-slide-card-header-image'
                      />
                    </div>
                    <div className='categories-swiper-slide-card-title'>{category.title}</div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        )}
      </div>
      <div className='menu'>
        {foodCategories.length &&
          foodCategories.map(category => {
            return (
              <div className='menu-category'>
                <div className='menu-category-seperator' />
                <div className='menu-category-title'>{category.title}</div>
                <div className='menu-category-foods'>
                  {category.foods.map(food => {
                    return (
                      <Card key={food.id} className='menu-category-foods-food'>
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
                          alt={food.ttitle}
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
                </div>
              </div>
            )
          })}
      </div>
    </PageLayout>
  )
}

// chip for tags, relateds > click ro tag dialog baz beshe
// calorie,
