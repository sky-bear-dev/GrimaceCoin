import Image from 'next/image';

import Form from '@/components/Form'

export default function Home() {
  return (
    <>         
      <div className="page-title">
        <Image src="/assets/imgs/grimace-bridge.png" alt="bridge" width={423} height={80} />
      </div>
      <Form />
    </>
  )
}