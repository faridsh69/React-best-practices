// @xts-nocheck
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { Typography, Card, IconButton, CardMedia, CardContent, CardActions } from '@mui/material'

import { SkeletonBox } from 'src/components/organisms/AccordionMui'
import { CategoryIcon } from 'src/components/molecules/CategoryIcon'
import { PageLayout } from 'src/components/templates/PageLayout'
import { useCrud } from 'src/hooks/useCrud'
import { useTranslation } from 'react-i18next'

export const Menu = () => {
  const { list: foodCategories } = useCrud('menu')

  const { t } = useTranslation()

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
                      <CategoryIcon
                        category={category}
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
            if (!category.foods.length) return <></>

            return (
              <div className='menu-category'>
                <div className='menu-category-seperator' />
                <div className='menu-category-title'>{category.title}</div>
                <div className='menu-category-foods'>
                  {category.foods.map(food => {
                    return (
                      <Card key={food.id} className='menu-category-foods-food'>
                        <CardMedia
                          className='menu-category-foods-food-image'
                          component='img'
                          image={food['main-image']}
                          alt={t(food.title)}
                        />
                        <CardContent className='menu-category-foods-food-content'>
                          <Typography className='menu-category-foods-food-content-title'>
                            {t(food.title)}
                          </Typography>
                          <Typography className='menu-category-foods-food-content-description'>
                            {t(food.description)}
                          </Typography>
                          <Typography className='menu-category-foods-food-content-price'>
                            <span>€</span>
                            <b>{food.price}</b>
                            <span>99</span>
                          </Typography>
                          <CardActions className='menu-category-foods-food-content-actions'>
                            <IconButton aria-label='add to favorites'>
                              <FavoriteIcon fontSize='small' sx={{ color: 'rgb(233, 30, 99)' }} />
                            </IconButton>
                            <IconButton aria-label='share'>
                              <ShareIcon fontSize='small' color='primary' />
                            </IconButton>
                            <IconButton aria-label='plus'>
                              <AddShoppingCartIcon
                                fontSize='small'
                                sx={{ color: 'rgb(46, 125, 50)' }}
                              />
                            </IconButton>
                          </CardActions>
                        </CardContent>
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
