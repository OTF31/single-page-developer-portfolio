import { TextInput as MTextInput, TextInputProps } from '@mantine/core'

import classes from './TextInput.module.css'

type Props = TextInputProps

const TextInput = (props: Props) => {
  const { ...rest } = props

  return <MTextInput classNames={classes} {...rest} />
}

export default TextInput
