import Image from 'next/image';

export default function Staking() {
  return (
    <>
      <h1 className="page-title">
        NFT Staking
      </h1>

      <div className='customer-wallet'>
        <div className='customer-wallet__balance'>
            <div className="card">
                <div className="card__details">
                    <div className="card__details--text">
                        <div className="card__details--number">0</div>
                        <div className="card__details--coin">LP Tokens</div>
                    </div>
                </div>
                <div className="card__footer">
                    <button className="btn btn-secondary btn-full card__footer--button">Claim LP tokens</button>
                </div>
            </div>
        </div>
        <div className='customer-wallet__staking'>
            <div className='stak unstaked'>
                <div className="stak-header">
                    <h3 className="stack-title">Unstaked</h3>
                    <div className="stak-cards-number">0</div>
                    <div className="stak-buttons">
                        <button className="btn btn-secondary stak-button">Select All</button>
                        <button className="btn btn-secondary stak-button">Approve</button>
                    </div>
                </div>
                <div className="stack-cards">
                    <p>Please Connect a Wallet</p>
                </div>
            </div>
            <div className='stak staked'>                
                <div className="stak-header">
                    <h3 className="stack-title">Staked</h3>
                    <div className="stak-cards-number">0</div>
                    <div className="stak-buttons">
                        <button className="btn btn-secondary stak-button">Select All</button>
                        <button className="btn btn-secondary stak-button">Unstake</button>
                    </div>
                </div>
                <div className="stack-cards">
                    <p>Please Connect a Wallet</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}