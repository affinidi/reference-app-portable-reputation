import { nanoid } from 'nanoid'
import { GithubProfileCredentialSubject } from 'types/github'
import { VerifiableCredential } from 'types/vc'

const VC_JSON_SCHEMA_URL = 'https://schema.affinidi.com/GithubProfileV1-0.json'
const VC_JSON_LD_CONTEXT_URL = 'https://schema.affinidi.com/GithubProfileV1-0.jsonld'

export function generateGithubProfileVc(holderDid: string, credentialSubject: GithubProfileCredentialSubject): VerifiableCredential {
  return {
    '@context': [
      'https://www.w3.org/2018/credentials/v1',
      VC_JSON_LD_CONTEXT_URL,
    ],
    id: `claimId:${nanoid()}`,
    type: ['VerifiableCredential', 'GithubProfile'],
    holder: {
      id: holderDid,
    },
    issuanceDate: new Date().toISOString(),
    credentialSubject,
    credentialSchema: {
      type: 'JsonSchemaValidator2018',
      id: VC_JSON_SCHEMA_URL,
    }
  }
}
