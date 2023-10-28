import FastfoodIcon from '@mui/icons-material/Fastfood'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import DinnerDiningIcon from '@mui/icons-material/DinnerDining'
import StorefrontIcon from '@mui/icons-material/Storefront'

const { VITE_CLIENT_ID, VITE_CLIENT_SECRET } = import.meta.env

export const LOCAL_STORAGE_APP_KEY = 'APPLICATION'
export const LOCAL_STORAGE_ACCESS_TOKEN_KEY = 'access_token'
export const LOCAL_STORAGE_AUTH_USER_EMAIL = 'auth_email'

export const META_TAGS = {
  title: 'React Best Practices',
  description: 'React Best Practices boilerplate',
  keywords: 'react, boilerplate',
  image: 'vite.svg',
  author: 'Farid Shahidi',
  domain: 'www.test.com',
}

export const OAUTH_API_INFO = {
  grant_type: 'password',
  client_id: VITE_CLIENT_ID,
  client_secret: VITE_CLIENT_SECRET,
}

export const SERVER_DATE_FORMAT = 'YYYY-MM-DD'

export const ADMIN_SIDEBAR_ITEMS = [
  {
    title: 'food',
    icon: FastfoodIcon,
  },
  {
    title: 'category',
    icon: RestaurantIcon,
  },
  {
    title: 'order',
    icon: DinnerDiningIcon,
  },
  {
    title: 'shop',
    icon: StorefrontIcon,
  },
]
