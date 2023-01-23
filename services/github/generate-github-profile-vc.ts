import { nanoid } from 'nanoid'
import { GithubProfileCredentialSubject } from './types';

export function generateGithubProfileVc(holderDid: string, credentialSubject: GithubProfileCredentialSubject) {
  return {
    '@context': [
      'https://www.w3.org/2018/credentials/v1',
      'https://schema.affinidi.com/@did:elem:EiC8fehVnWr2XAXlNSdHWg8fy1s8rMImwgn3YaNZQL--jg/GithubProfileV1-5.jsonld'
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
      id: 'https://schema.affinidi.com/@did:elem:EiC8fehVnWr2XAXlNSdHWg8fy1s8rMImwgn3YaNZQL--jg/GithubProfileV1-5.json'
    }
  }
}
