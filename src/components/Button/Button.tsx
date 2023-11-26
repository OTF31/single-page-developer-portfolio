import { ButtonProps, Button as MButton } from '@mantine/core'
import { ComponentPropsWithoutRef } from 'react'

import classes from './Button.module.css'

type Props = ButtonProps & ComponentPropsWithoutRef<'button'>

const Button = (props: Props) => {
  const { children, ...rest } = props

  return (
    <MButton classNames={classes} {...rest}>
      {children}
    </MButton>
  )
}

export default Button
