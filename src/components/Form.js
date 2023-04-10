import * as React from 'react';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';

import Image from 'next/image';


const FROM_DROPDOWN_LIST = [
  { text: 'Ethereum', iconUrl: '/assets/imgs/eth-circle-logo.svg', val: 'ETH' },
  { text: 'Binance-Smart-Chain', iconUrl: '/assets/imgs/bscLogo.svg', val: 'BSC' },
  { text: 'Cronos', iconUrl: '/assets/imgs/croLogo.svg', val: 'CRO' }
];

const TO_DROPDOWN_LIST = [
  { text: 'Binance-Smart-Chain', iconUrl: '/assets/imgs/bscLogo.svg', val: 'BSC' },
  { text: 'Cronos', iconUrl: '/assets/imgs/croLogo.svg', val: 'CRO' }
];

export default function Form() {
  return (
		<>
			<form className='form' type='submit'>
				<div className='form-group'>
					<label className='form-label'>Token</label>
          <div className='dropdown'>
            <div className='dropdown-label'>
              <div className='dropdown-label-left'>
                <Image src='/assets/imgs/grimace-coin.svg' className='dropdown-item-image' width={32} height={32} alt='' />
                Grimace Coin
              </div>
            </div>
          </div>
				</div>
        <span className="divider"></span>
        <div className='bridge-direction'>
          <label className='form-label'>From → To</label>
          <div className='form-group'>
            <Select
              className='dropdown'
              indicator={<Image src='/assets/imgs/arrow.svg' width={15} height={10} alt='' />}
              defaultValue='ETH'
              sx={{                
                [`& .${selectClasses.indicator}`]: {
                  transition: '0.2s',
                  [`&.${selectClasses.expanded}`]: {
                    transform: 'rotate(-180deg)',
                  },
                  minHeight: 59,
                },
              }}
              slotProps={{
                listbox: {
                  sx: {
                    maxHeight: 300,
                    padding: 0,
                    border: '1px solid #772eda',
                    overflow: 'auto'
                  }
                }
              }}
            >
              {FROM_DROPDOWN_LIST.map((opt) => (
                <Option className='list-item' key={ opt.val } value={ opt.val }>
                  <Image src={ opt.iconUrl } width={32} height={32} alt={ opt.text } /> { opt.text }
                </Option>
              ))}
            </Select>
          </div>
          <div className="toggle-direction">
            <Image src="/assets/imgs/toggle.svg" alt="toggle" width={21} height={13} />
          </div>
          <div className='form-group drop-to'>
            <Select
              className='dropdown'
              indicator={<Image src='/assets/imgs/arrow.svg' width={15} height={10} alt='' />}
              defaultValue='BSC'
              sx={{
                [`& .${selectClasses.indicator}`]: {
                  transition: '0.2s',
                  [`&.${selectClasses.expanded}`]: {
                    transform: 'rotate(-180deg)',
                  },
                  minHeight: 59,
                },
              }}
              slotProps={{
                listbox: {
                  sx: {
                    maxHeight: 300,
                    padding: 0,
                    border: '1px solid #772eda',
                    overflow: 'auto'
                  }
                }
              }}
            >
              { TO_DROPDOWN_LIST.map((opt) => (
                <Option className='list-item' key={ opt.val } value={ opt.val }>
                  <Image src={ opt.iconUrl } width={32} height={32} alt={ opt.text } /> { opt.text }
                </Option>
              ))}
            </Select>
          </div>
        </div>
        <span className="divider"></span>
        <div className='form-group'>
          <label className='form-label'>Amount</label>
          <input id='input' className='form-control' type='number' defaultValue={0}/>          
        </div>
        <div className="form-label-note">
          <Image src='/assets/imgs/info.svg' className='label-warning' width={18} height={18} alt='' />
          <p>
            Note: The tokens will be sent to the same address they were
            sent from
          </p>
        </div>
        <div className='form-actions'>
          <button type="button" className="btn btn-md btn-blob">
            Bridge
            <span className="btn-blob__inner">
              <span className="btn-blob__blobs">
                <span className="btn-blob__blob"></span>
                <span className="btn-blob__blob"></span>
                <span className="btn-blob__blob"></span>
                <span className="btn-blob__blob"></span>
              </span>
            </span>
          </button>
        </div>
			</form>
		</>
	)
}