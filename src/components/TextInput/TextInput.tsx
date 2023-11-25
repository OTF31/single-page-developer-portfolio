import { Image, TextInput as MTextInput, TextInputProps } from '@mantine/core'

import iconError from '@/assets/images/icon-error.png'
import classes from './TextInput.module.css'

type Props = TextInputProps

const TextInput = (props: Props) => {
  const { rightSection = <Image src={iconError.src} />, ...rest } = props

  return <MTextInput classNames={classes} {...{ rightSection }} {...rest} />
}

export default TextInput
