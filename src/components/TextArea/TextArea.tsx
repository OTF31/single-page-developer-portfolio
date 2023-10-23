import { Textarea as MTextArea, TextareaProps } from '@mantine/core'

import classes from './TextArea.module.css'

type Props = TextareaProps

const TextArea = (props: Props) => {
  const { ...rest } = props

  return <MTextArea classNames={classes} rows={3} {...rest} />
}

export default TextArea
