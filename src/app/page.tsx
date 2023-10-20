import { AppShell, AppShellMain, Title } from '@mantine/core'

import classes from './page.module.css'

const Home = () => {
  return (
    <AppShell>
      <AppShellMain className={classes.main}>
        <Title c='white'>Single-page developer portfolio</Title>
      </AppShellMain>
    </AppShell>
  )
}

export default Home
