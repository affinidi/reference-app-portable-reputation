import { FC, useState } from 'react'
import { hostUrl } from '../env'

export const Test: FC = () => {
  const [isStored, setIsStored] = useState(false)
  const [vc, setVc] = useState<any>(null)

  const handleIssue = async () => {
    const holderDid = await (await fetch(`${hostUrl}/api/cloud-wallet/get-did`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })).json()

    console.log('holderDid:', holderDid)

    const response = await fetch(`${hostUrl}/api/github/issue-vc`, {
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
    await fetch(`${hostUrl}/api/cloud-wallet/store-vc`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        vc,
      }),
    })

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
