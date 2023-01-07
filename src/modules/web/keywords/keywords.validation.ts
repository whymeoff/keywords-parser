import yup from 'yup'

export const getKeywordsSchema = yup.object().shape({
  url: yup.string().url().required(),
})
