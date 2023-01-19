const { generateApi } = require('swagger-typescript-api')
const path = require('path')
require('dotenv').config()

generateApi({
  name: 'cloud-wallet.api.ts',
  output: path.resolve(process.cwd(), './services/cloud-wallet'),
  url: `${process.env.NEXT_PUBLIC_AFFINIDI_CLOUD_WALLET_URL}/api/swagger`,
}).catch(console.error)

generateApi({
  name: 'issuance.api.ts',
  output: path.resolve(process.cwd(), './services/issuance'),
  url: `${process.env.NEXT_PUBLIC_AFFINIDI_ISSUANCE_URL}/api/swagger`,
  httpClientType: "axios",
}).catch(console.error)
