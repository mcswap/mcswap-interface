# Swap Interface

An open source interface for Swap -- a protocol for decentralized exchange of Tron tokens.

- Website: [mcswap.io](https://mcswap.io/)

## Listing a token

Please see the
[mcswap/default-token-list](https://github.com/mcswap/default-token-list)
repository.

## Development

### Install Dependencies

```bash
npm install
```

### Run

```bash
npm start
```

### Configuring the environment (optional)

To have the interface default to a different network when a wallet is not connected:

1. Make a copy of `.env` named `.env.local`
2. Change `REACT_APP_NETWORK_ID` to `"{YOUR_NETWORK_ID}"` (e.g. `11111` for Tron Mainnet network)

Example `.env.local` file for Shasta network:

```sh
REACT_APP_CHAIN_ID="1"
REACT_APP_TRON_NETWORK="shasta"
```

Note that the interface only works on testnets where both
[Swap V2](https://github.com/mcswap/mcswap-v2-core/) and
[multicall](https://github.com/opentron/multicall) are deployed.
The interface will not work on other networks.

## Contributions

**Please open all pull requests against the `master` branch.**
CI checks will run against all PRs.
