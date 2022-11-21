const { ethers } = require("ethers");

const infura_ID = '0x34404cbCf0b9aD77d33E73d07db7160E5b3EAb74'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${infura_ID}`)

const address = '0x6Cc9397c3B38739daCbfaA68EaD5F5D77Ba5F455'

const main = async () => {
    const balance = await provider.getBalance(address)
    console.log (`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
}

main()
