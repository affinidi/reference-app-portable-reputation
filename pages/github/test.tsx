import { FC, useState } from 'react'
import { cloudWalletService } from '../../services/cloud-wallet'

export const Test: FC = () => {
  const [isStored, setIsStored] = useState(false)
  const [vc, setVc] = useState<any>(null)

  const handleIssue = async () => {
    const holderDid = await cloudWalletService.getDid()
    console.log('holderDid:', holderDid)

    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/github/issue-vc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        holderDid,
      }),
    })

    const { vc } = await response.json()
    console.log('vc:', vc)

    setVc(vc)
  }

  const handleStore = async () => {
    const { credentialIds } = await cloudWalletService.storeCredentials({ data: [vc] })
    console.log('credentialIds:', credentialIds)

    setIsStored(true)
  }

  return <>
    <button type="button" onClick={handleIssue}>Issue</button>
    {vc && <>
      <div>{JSON.stringify(vc, null, 2)}</div>
      <button type="button" onClick={handleStore}>Store</button>
      {isStored && <div>Stored</div> }
    </>}
  </>
}

export default Test
