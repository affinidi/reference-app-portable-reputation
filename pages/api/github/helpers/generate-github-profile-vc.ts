import { nanoid } from 'nanoid'
import { GithubProfileCredentialSubject } from '../../../../types/github';
import { VerifiableCredential } from '../../../../types/vc';

const VC_JSON_SCHEMA = 'https://schema.affinidi.com/@did:elem:EiC8fehVnWr2XAXlNSdHWg8fy1s8rMImwgn3YaNZQL--jg/GithubProfileV1-5.json'
const VC_JSON_LD_CONTEXT = 'https://schema.affinidi.com/@did:elem:EiC8fehVnWr2XAXlNSdHWg8fy1s8rMImwgn3YaNZQL--jg/GithubProfileV1-5.jsonld'

export function generateGithubProfileVc(holderDid: string, credentialSubject: GithubProfileCredentialSubject): VerifiableCredential {
  return {
    '@context': [
      'https://www.w3.org/2018/credentials/v1',
      VC_JSON_LD_CONTEXT,
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
      id: VC_JSON_SCHEMA,
    }
  }
}
