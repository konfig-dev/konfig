import { Container, NavLink, Stack, Paper } from '@mantine/core'
import Head from 'next/head'
import { useRouter } from 'next/navigation'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export const getServerSideProps: GetServerSideProps<{}> = async () => {
  return { props: {} }
}

export default function Home({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Demo Portal | Konfig</title>
      </Head>
      <Container mt="xl">
        <Paper withBorder shadow="lg" p="lg">
          <Stack>
            <NavLink
              onClick={() => router.push('/snaptrade/snaptrade-demos')}
              label="SnapTrade"
              description="https://snaptrade.com"
            />
            <NavLink
              onClick={() => router.push('/konfig-dev/splitit-web-sdks')}
              label="Splitit"
              description="https://splitit.com"
            />
            <NavLink
              onClick={() => router.push('/leap-ai/leap-sdks')}
              label="Leap"
              description="https://tryleap.ai"
            />
            <NavLink
              onClick={() => router.push('/konfig-dev/konfig-demo-docs')}
              label="Konfig"
              description="https://apidemo.konfigthis.com"
            />
            <NavLink
              onClick={() => router.push('/konfig-dev/drdroid-sdks')}
              label="Dr. Droid"
              description="https://drdroid.io"
            />
            <NavLink
              onClick={() => router.push('/konfig-dev/acme-sdks')}
              label="Acme"
            />
            <NavLink
              onClick={() => router.push('/sandbox')}
              label="Sandbox"
              description="Create your demo"
            />
          </Stack>
        </Paper>
      </Container>
    </>
  )
}
