import characterSmAtifacts from 'aizaworld/sm-contracts/Characters'
import inoSmAtifacts from 'aizaworld/sm-contracts/INO'
import nftMarketSmAtifacts from 'aizaworld/sm-contracts/NFTMarket'
import priceOracleSmAtifacts from 'aizaworld/sm-contracts/PriceOracle'
import supplyBoxSmAtifacts from 'aizaworld/sm-contracts/SupplyBoxs'

const characterSmABI = characterSmAtifacts.abi
const characterSmAdresses = characterSmAtifacts.networks

const inoSmABI = inoSmAtifacts.abi
const inoSmAdresses = inoSmAtifacts.networks

const nftMarketSmABI = nftMarketSmAtifacts.abi
const nftMarketSmAdresses = nftMarketSmAtifacts.networks

const priceOracleSmABI = priceOracleSmAtifacts.abi
const priceOracleSmAdresses = priceOracleSmAtifacts.networks
const supplyBoxSmABI = supplyBoxSmAtifacts.abi
const supplyBoxSmAdresses = supplyBoxSmAtifacts.networks

export {
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
