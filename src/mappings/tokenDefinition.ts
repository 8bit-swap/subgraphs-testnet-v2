import {
  Address,
  BigInt,
} from "@graphprotocol/graph-ts"

// Initialize a Token Definition with the attributes
export class TokenDefinition {
  address : Address
  symbol: string
  name: string
  decimals: BigInt

  // Initialize a Token Definition with its attributes
  constructor(address: Address, symbol: string, name: string, decimals: BigInt) {
    this.address = address
    this.symbol = symbol
    this.name = name
    this.decimals = decimals
  }

  // Get all tokens with a static defintion
  static getStaticDefinitions(): Array<TokenDefinition> {
    let staticDefinitions = new Array<TokenDefinition>(11)

    // Bitcoin Cash
    let tokenBCH = new TokenDefinition(
      Address.fromString('0x3600000000000000000000000000000000000000'),
      'BCH',
      'Bitcoin Cash',
      BigInt.fromI32(9)
    )
    staticDefinitions.push(tokenBCH)

    // Dai
    let tokenDAI = new TokenDefinition(
      Address.fromString('0x2f00000000000000000000000000000000000000'),
      'DAI',
      'Dai',
      BigInt.fromI32(9)
    )
    staticDefinitions.push(tokenDAI)

    // Dogecoin
    let tokenDOGE = new TokenDefinition(
      Address.fromString('0x3400000000000000000000000000000000000000'),
      'DOGE',
      'Dogecoin',
      BigInt.fromI32(9)
    )
    staticDefinitions.push(tokenDOGE)

    // EUR1
    let tokenEUR1 = new TokenDefinition(
      Address.fromString('0x3000000000000000000000000000000000000000'),
      'EUR1',
      'EUR1',
      BigInt.fromI32(9)
    )
    staticDefinitions.push(tokenEUR1)

    // Gold1
    let tokenGLD1 = new TokenDefinition(
      Address.fromString('0x3200000000000000000000000000000000000000'),
      'GLD1',
      'Gold1',
      BigInt.fromI32(9)
    )
    staticDefinitions.push(tokenGLD1)

    // Chainlink
    let tokenLINK = new TokenDefinition(
      Address.fromString('0x3700000000000000000000000000000000000000'),
      'LINK',
      'Chainlink',
      BigInt.fromI32(9)
    )
    staticDefinitions.push(tokenLINK)

    // Litecoin
    let tokenLTC = new TokenDefinition(
      Address.fromString('0x3500000000000000000000000000000000000000'),
      'LTC',
      'Litecoin',
      BigInt.fromI32(9)
    )
    staticDefinitions.push(tokenLTC)

    // Mili Bitcoin
    let tokenmBTC = new TokenDefinition(
      Address.fromString('0x3300000000000000000000000000000000000000'),
      'mBTC',
      'Mili Bitcoin',
      BigInt.fromI32(9)
    )
    staticDefinitions.push(tokenmBTC)

    // SGD1
    let tokenSGD1 = new TokenDefinition(
      Address.fromString('0x3100000000000000000000000000000000000000'),
      'SGD1',
      'SGD1',
      BigInt.fromI32(9)
    )
    staticDefinitions.push(tokenSGD1)

    // Tether USDt
    let tokenUSDT = new TokenDefinition(
      Address.fromString('0x2d00000000000000000000000000000000000000'),
      'USDT',
      'Tether USDt',
      BigInt.fromI32(9)
    )
    staticDefinitions.push(tokenUSDT)

    // USD1
    let tokenvUSD1 = new TokenDefinition(
      Address.fromString('0x2e00000000000000000000000000000000000000'),
      'vUSD1',
      'vUSD1',
      BigInt.fromI32(9)
    )
    staticDefinitions.push(tokenvUSD1)

    return staticDefinitions
  }

  // Helper for hardcoded tokens
  static fromAddress(tokenAddress: Address) : TokenDefinition | null {
    let staticDefinitions = this.getStaticDefinitions()
    let tokenAddressHex = tokenAddress.toHexString()

    // Search the definition using the address
    for (let i = 0; i < staticDefinitions.length; i++) {
      let staticDefinition = staticDefinitions[i]
      if(staticDefinition.address.toHexString() == tokenAddressHex) {
        return staticDefinition
      }
    }

    // If not found, return null
    return null
  }

}