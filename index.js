import aizaWorldSmAtifacts from './sm-contracts/AizaWorldToken.json'
import aizaFaucetSmAtifacts from './sm-contracts/FaucetToken.json'

import characterSmAtifacts from './sm-contracts/Characters'
import inoSmAtifacts from './sm-contracts/INO'
import nftMarketSmAtifacts from './sm-contracts/NFTMarket'
import priceOracleSmAtifacts from './sm-contracts/PriceOracle'
import supplyBoxSmAtifacts from './sm-contracts/SupplyBoxs'

const aizaWorldSmABI = aizaWorldSmAtifacts.abi
const aizaWorldSmAdresses = aizaWorldSmAtifacts.networks

const aizaFaucetSmABI = aizaFaucetSmAtifacts.abi
const aizaFaucetSmAdresses = aizaFaucetSmAtifacts.networks

const supplyBoxSmABI = supplyBoxSmAtifacts.abi
const supplyBoxSmAdresses = supplyBoxSmAtifacts.networks

const characterSmABI = characterSmAtifacts.abi
const characterSmAdresses = characterSmAtifacts.networks

const inoSmABI = inoSmAtifacts.abi
const inoSmAdresses = inoSmAtifacts.networks

const nftMarketSmABI = nftMarketSmAtifacts.abi
const nftMarketSmAdresses = nftMarketSmAtifacts.networks

const priceOracleSmABI = priceOracleSmAtifacts.abi
const priceOracleSmAdresses = priceOracleSmAtifacts.networks

export {
  aizaWorldSmABI,
  aizaWorldSmAdresses,
  aizaFaucetSmABI,
  aizaFaucetSmAdresses,
  characterSmABI,
  characterSmAdresses,
  inoSmABI,
  inoSmAdresses,
  nftMarketSmABI,
  nftMarketSmAdresses,
  priceOracleSmABI,
  priceOracleSmAdresses,
  supplyBoxSmABI,
  supplyBoxSmAdresses,
}
