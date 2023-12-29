# Inscribe

A minter and protocol for inscriptions on EVM Blockchain.

**NOTE**: you will pay ``0.00005`` **ETH** every mint success.

## Clone
```git clone https://guthub.com/alexswanFantom/EVM```

## Open file
```cd EVM```

## Setup

Install dependencies:

```sh
npm install or yarn install
```

Create a `.env` file with your node information:

```
privateKey=0x....
argsJSON=data:,{"p":"krc-20"op":"mint"tick":"ilkc"amt":"1"}
gasLimit=35000
```

## Running

```
node . <your chain> <repeat>
```
## Example

```
node . kcs 10
```

## Available chain

```
kcs bsc polygon mantle opbnb linea bsc arbitrum avax klay cronos wemix combo
```
see on config.js for available chain, and you can add other chain.

increase gasLimit if error `transaction underpriced` by editing `gasLimit` on `.env` file.

**Note**: Please use a fresh wallet to mint by following command:
```
node . new
```
# Save your generated wallet to your wallet apps and put the private key to file `.env` , ```privatekey= your privateKet```

## DONATE to support us.
`0xb16d034dfcc29ffd2fc1552a77dbcc790e06e406`
`DhanBPKMUM3VfoKYCeWt3iBQeoaqnosv8M6WmshvSPEN`
`D7YbMM7rFHLmpFVjTmuodokrpGzMyGZWLc`
`bc1p35qvl72750z53n4069rqklft3relfq47kw5al6xvexdddehzdctsts6lgd`