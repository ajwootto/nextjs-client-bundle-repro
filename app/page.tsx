import { ClientComponent } from './client'
import { testClientCode } from 'client-lib'

// this direct import does not work either
// import { testClientCode } from 'action-lib/clientCode'

testClientCode()

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return <ClientComponent/>
}
