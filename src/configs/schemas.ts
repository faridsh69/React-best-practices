import * as yup from 'yup'

const REGEXS = {
  phone: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]{6,16}$/g,
}

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
  birth_date: yup.string().required(),
  gender: yup.string().oneOf(['1', '0'], 'Select one option'),
  activated: yup.bool().oneOf([true], 'Field must be checked'),
  description: yup.string().nullable().min(10),
  email: yup.string().email().required(),
  phone: yup.string().matches(REGEXS.phone, 'Phone number is not valid'),
  national_code: yup.string().nullable().min(10).max(10),
  website: yup.string().nullable().url(),
})
