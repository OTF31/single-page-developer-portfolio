import { Image, Textarea as MTextArea, TextareaProps } from '@mantine/core'

import iconError from '@/assets/images/icon-error.png'
import classes from './TextArea.module.css'

type Props = TextareaProps

const TextArea = (props: Props) => {
  const { rows = 3, rightSection = <Image src={iconError.src} />, ...rest } = props

  return <MTextArea classNames={classes} {...{ rows, rightSection }} {...rest} />
}

export default TextArea
