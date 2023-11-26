import { Image, Textarea as MTextArea, TextareaProps } from '@mantine/core'
import { useController, useFormContext } from 'react-hook-form'

import iconError from '@/assets/images/icon-error.png'
import classes from './TextArea.module.css'

type Props = TextareaProps & { name: string }

const TextArea = (props: Props) => {
  const { rows = 3, rightSection = <Image src={iconError.src} alt='icon-error' /> } =
    props
  const { name, ...rest } = props
  const { control } = useFormContext()
  const { fieldState, field } = useController({ name, control })
  const { value, onChange } = field
  const { error } = fieldState

  return (
    <MTextArea
      classNames={classes}
      {...{ rows, rightSection }}
      {...{ value, onChange }}
      error={error?.message}
      {...rest}
    />
  )
}

export default TextArea
