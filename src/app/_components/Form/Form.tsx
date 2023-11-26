'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { Stack } from '@mantine/core'
import { FormProvider, useForm } from 'react-hook-form'
import * as yup from 'yup'

import Button from '@/components/Button'
import TextArea from '@/components/TextArea'
import TextInput from '@/components/TextInput'
import classes from './Form.module.css'

interface IForm {
  name: string
  email: string
  message: string
}

const schema = yup.object().shape({
  name: yup.string().required('This field is required'),
  email: yup
    .string()
    .email('Sorry, invalid format here')
    .required('This field is required'),
  message: yup.string().required('This field is required'),
})

const Form = () => {
  const methods = useForm({
    mode: 'onSubmit',
    defaultValues: { name: '', email: '', message: '' },
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: IForm) => {
    console.log(data)
  }

  return (
    <Stack className={classes['container']}>
      <FormProvider {...methods}>
        <TextInput name='name' placeholder='NAME' />
        <TextInput name='email' placeholder='EMAIL' />
        <TextArea name='message' placeholder='MESSAGE' />
      </FormProvider>
      <Button
        className={classes['button-submit']}
        onClick={methods.handleSubmit(onSubmit)}
      >
        SEND MESSAGE
      </Button>
    </Stack>
  )
}

export default Form
