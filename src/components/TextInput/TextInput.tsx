import { Image, TextInput as MTextInput, Text, TextInputProps } from '@mantine/core'
import { useController, useFormContext } from 'react-hook-form'

import iconError from '@/assets/images/icon-error.png'
import classes from './TextInput.module.css'

type Props = TextInputProps & { name: string }

const TextInput = (props: Props) => {
  const { rightSection = <Image src={iconError.src} alt='error' /> } = props
  const { name, ...rest } = props
  const { control } = useFormContext()
  const { fieldState, field } = useController({ name, control })
  const { value, onChange } = field
  const { error } = fieldState

  return (
    <MTextInput
      classNames={classes}
      {...{ rightSection }}
      {...{ value, onChange }}
      error={error?.message}
      {...rest}
    />
  )
}

export default TextInput
