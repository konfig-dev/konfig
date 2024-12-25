# [Konfig](https://konfigthis.com)

The monorepo that holds everything...
## Getting started

Get the repository on your local machine. **Takes a minute.**

```shell
git clone https://github.com/konfig-dev/konfig --recursive
cd konfig
```

This repository has submodules so pull all of them. **Also take a few minutes.**

```shell
git submodule update --init --recursive --remote --merge
```

## Environment Setup

1. Run Postgres as a background process

   ```shell
   # in /konfig
   brew install postgresql
   mkdir -p postgres/data
   initdb -D ./postgres/data
   pg_ctl -D ./postgres/data start
   ```

1. Setup `.env` file in `generator/konfig-dash` to something like:

   ```
   DATABASE_URL="postgresql://dylanhuang@localhost:5432/konfig_dev?connection_limit=1"
   TEST_DATABASE_URL="postgresql://dylanhuang@localhost:5432/konfig_test?connection_limit=1"

   AWS_ACCESS_KEY_ID=XXXXXX
   AWS_SECRET_ACCESS_KEY=XXXXXX

   # Used to encrypt/decrypt session cookies. Change this value and re-deploy to log out all users of your app at once.
   SESSION_SECRET=ZUWpQ9pB4fB5FFpjHLi8Z2qadzXkdTKhHBsXmGmjNdxtrZbevaCYWSpw7G7cHBhh
   ```

Paste this into your `~/.zshrc` or `~/.bashrc`

```bash
if [ -f $HOME/.envvars ]; then
    . $HOME/.envvars
else
    print "404: ~/.envvars not found."
fi
```

Then create `~/.envvars` with values from Dylan.

## How to run Konfig

1. Make sure `node_modules` is initiated in `konfig-dash`
   ```shell
   cd generator/konfig-dash
   yarn # takes some time
   yarn rw prisma migrate dev # setup the DB
   ```
1. Start the server with `yarn dev`

   ```shell
   # inside generator/konfig-dash
   yarn dev
   ```

1. Start `generator/konfig-generator-api` w/ IntelliJ
1. `cd` into an SDK repo and run `konfig generate -d`

## Making Changes

See [Changesets](https://github.com/changesets/changesets)
