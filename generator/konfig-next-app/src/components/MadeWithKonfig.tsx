import {
  Image,
  MediaQuery,
  Affix,
  Button,
  useMantineColorScheme,
} from '@mantine/core'

export function MadeWithKonfig() {
  const { colorScheme } = useMantineColorScheme()
  return (
    <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
      <Affix position={{ bottom: '1rem', left: '1rem' }}>
        <Button
          variant={colorScheme === 'light' ? 'white' : undefined}
          size="xs"
          component="a"
          href="https://apidemo.konfigthis.com"
          sx={{
            ...(colorScheme === 'light'
              ? {
                  color: 'black',
                  boxShadow:
                    '0 0 0 1px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1)',
                }
              : {
                  ':hover': {
                    backgroundColor: '#151515',
                  },
                  color: '#e3e3e3',
                  backgroundColor: '#151515',
                  borderColor: 'rgba(255,255,255,.15)',
                }),
          }}
          leftIcon={<Image alt="Logo" width={20} height={20} src="/logo.png" />}
          target="_blank"
        >
          Made with Konfig
        </Button>
      </Affix>
    </MediaQuery>
  )
}
