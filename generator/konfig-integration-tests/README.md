# konfig-integration-tests

- test SDK directories under `sdks/`
- each map to test under `tests/`
- see `util.ts` for implementation of tests

## To create a test

1. Run ./bootstrap-test.js

## To run tests

1. `cd` into `konfig-integration-tests`
2. Run `yarn`
3. Run `yarn test`

## To run tests using earthly (local)

1. `cd` into `konfig-integration-tests`
2. Ensure `EARTHLY_SECRETS` env var is set
   - EARTHLY_SECRETS: `NPM_TOKEN=xxx`
   - This is used during the container building phase for konfig-dash
3. Ensure `compose/.env` file is present and contains the following:
   - `NPM_TOKEN`, `SESSION_SECRET`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`
   - Each line should be formatted as key=value
   - These are passed to docker compose and are used by while running containerized services
4. Run `earthly -P +test`
   - `-P` runs earthly in privileged mode (required for earthly image)
   - `+test` is the name of the earthly target we are running
