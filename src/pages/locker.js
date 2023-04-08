import Image from 'next/image';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import SwipeForm from '@/components/SwipeForm'

export default function Locker() {
  return (
    <>
      <div className="page-title">
        <Image src="/assets/imgs/grimace-locker.png" alt="bridge" width={423} height={80} />
      </div>

      <Tabs>
        <TabList>
          <Tab>
            <p>Lock LP Tokens</p>
          </Tab>
          <Tab>
            <p>Manage LP Token Locks</p>
          </Tab>
          <Tab>
            <p>Browse All Locks</p>
          </Tab>
        </TabList>

        <div>
          <TabPanel>
            <div className="panel-content">
              <SwipeForm />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content">
              <h2>Please Connect a wallet</h2>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="panel-content">
              <div className="browse-token-wrapper">
                <div className="certified-token">
                  <Image src='/assets/imgs/icon.svg' width={50} height={50} alt='' />
                  <div className="certified-token-label">ETHMAS/WETH</div>
                </div>
                <div className="certified-token">
                  <Image src='/assets/imgs/icon.svg' width={50} height={50} alt='' />
                  <div className="certified-token-label">ETHMAS/WETH</div>
                </div>
              </div>
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </>
  )
}