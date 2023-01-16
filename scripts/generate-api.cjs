const { generateApi } = require('swagger-typescript-api')
const path = require('path')

CLOUD_WALLET_URL = 'https://cloud-wallet-api.prod.affinity-project.org'

generateApi({
  name: 'cloud-wallet.api.ts',
  output: path.resolve(process.cwd(), './services/cloud-wallet'),
  url: `${CLOUD_WALLET_URL}/api/swagger`,
}).catch(console.error)
