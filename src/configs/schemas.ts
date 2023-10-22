import * as yup from 'yup'

export const LOGIN_SCHEMA = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
})

export const FOOD_SCHEMA = yup.object({
  title: yup.string().required(),
  description: yup.string().nullable(),
  content: yup.string().required().min(10),
  activated: yup.boolean(),
  // category_id:
  // tags
  // relateds
  // order
  // image
  // video
})

export const PROFILE_SCHEMA = yup.object({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  birth_date: yup.date().required(),
  gender: yup.string(),
})
