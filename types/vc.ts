export interface VerifiableCredential {
  '@context': string[]
  id: string
  type: string[]
  holder: { id: string }
  issuanceDate: string
  credentialSubject: any
  credentialSchema: {
    type: string
    id: string
  }
}
