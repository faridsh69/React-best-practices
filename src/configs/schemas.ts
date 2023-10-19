import * as yup from 'yup'

export const LOGIN_SCHEMA = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
})

export const FOOD_SCHEMA = yup.object({
  title: yup.string().required(),
  description: yup.string(),
  content: yup.string(),
  activated: yup.boolean(),
  // category_id:
  // tags
  // relateds
  // order
  // image
  // video
})
