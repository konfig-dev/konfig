import { CopyButton as MantineCopyButton, clsx } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { CodeIcon } from './CodeIcon'
export function CopyButton({ value }: { value: string }) {
  return (
    <MantineCopyButton value={value}>
      {({ copied, copy }) => (
        <button
          onClick={() => {
            copy()
            notifications.show({
              id: 'code-copied-to-your-clipboard',
              radius: 'md',
              withBorder: true,
              styles: {
                body: {
                  fontWeight: 500,
                },
                icon: {
                  backgroundColor: 'transparent',
                },
              },
              message: 'Code copied to your clipboard',
              icon: <CodeIcon />,
            })
          }}
          type="button"
          className={clsx(
            'group/button absolute right-4 top-3.5 overflow-hidden rounded-full py-1 pl-2 pr-3 text-xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100 outline-brand-500 dark:outline-brand-700',
            {
              ['bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 shadow dark:shadow-none dark:hover:bg-white/5']:
                !copied,
              ['dark:bg-brand-400/10 bg-brand-600/20 ring-1 ring-inset dark:ring-brand-400/20 ring-brand-600/40']:
                copied,
            }
          )}
        >
          <span
            aria-hidden={!copied ? 'false' : 'true'}
            className={clsx(
              'pointer-events-none flex items-center gap-0.5 dark:text-zinc-400 text-zinc-500 transition duration-300',
              { ['-translate-y-1.5 opacity-0']: copied }
            )}
          >
            <svg
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-700 dark:group-hover/button:stroke-zinc-400"
            >
              <path
                strokeWidth="0"
                d="M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z"
              ></path>
              <path
                fill="none"
                strokeLinejoin="round"
                d="M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1"
              ></path>
            </svg>
            Copy
          </span>
          <span
            aria-hidden={!copied ? 'true' : 'false'}
            className={clsx(
              'pointer-events-none absolute inset-0 flex items-center justify-center text-brand-800 dark:text-brand-400 transition duration-300',
              {
                ['translate-y-1.5 opacity-0']: !copied,
              }
            )}
          >
            Copied!
          </span>
        </button>
      )}
    </MantineCopyButton>
  )
}
