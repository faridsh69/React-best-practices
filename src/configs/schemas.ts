import * as yup from 'yup'

// const VALIDATION_REGEXPS = {
//   phones: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]{6,16}$/g,
//   email: /^(\S+@\S+\.\S+)$/gm,
//   first_name: /^([\u00C0-\u017Fa-zA-Z']+)/g,
//   name_with_space: /^([\u00C0-\u017Fa-zA-Z.\-\s']+)$/g,
//   last_name: /^([\u00C0-\u017Fa-zA-Z']+)/g,
//   hasNoSpace: /^\S+$/,
// }

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
})
