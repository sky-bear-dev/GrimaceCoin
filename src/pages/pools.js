import Image from 'next/image';

import Radio from '@mui/material/Radio';
import IconButton from '@mui/material/IconButton';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import * as React from 'react';
import Pagination from '@mui/material/Pagination';

import SearchBar from "material-ui-search-bar";

function createData(name, calories, fat, carbs, protein, price) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        history: [
        {
            date: '2020-01-05',
            customerId: '11091700',
            amount: 3,
        },
        {
            date: '2020-01-02',
            customerId: 'Anonymous',
            amount: 1,
        },
        ],
};
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <div className={`data-list__item ${open ? "extended" : ""}`}>
            <div className='data-list__item--header'>
                <div className='data-list__item-col'>
                    <div className='icon'>
                        <a href="javascript:;" target="_blank">
                        <Image src="/assets/imgs/canvas.png" alt="" width={50} height={50} />
                        </a>
                        <div className="absolute">
                        <a href="#" target="_blank" rel="noreferrer">
                            <Image src="/assets/imgs/canvas.png" alt="" width={18} height={18} />
                        </a>
                        </div>
                    </div>
                </div>
                <div className='data-list__item-col'>
                    <div className='title'>
                        <h4>Earn Grimace</h4>
                        <h5>Stake Grimace</h5>
                    </div>
                </div>
                <div className='data-list__item-col'>
                    <div className='btn-group'>
                        <div className='text-btn text-btn__l'>
                        <div>
                            <svg viewBox="64 64 896 896" focusable="false" fill="#341461" width="14px" height="14px" data-icon="fire" aria-hidden="true"><path d="M834.1 469.2A347.49 347.49 0 00751.2 354l-29.1-26.7a8.09 8.09 0 00-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 01-47.5 46.1 352.6 352.6 0 00-100.3 121.5A347.75 347.75 0 00160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0075.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 00760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0027.7-136c0-48.8-10-96.2-29.9-140.9zM713 808.5c-53.7 53.2-125 82.4-201 82.4s-147.3-29.2-201-82.4c-53.5-53.1-83-123.5-83-198.4 0-43.5 9.8-85.2 29.1-124 18.8-37.9 46.8-71.8 80.8-97.9a349.6 349.6 0 0058.6-56.8c25-30.5 44.6-64.5 58.2-101a240 240 0 0012.1-46.5c24.1 22.2 44.3 49 61.2 80.4 33.4 62.6 48.8 118.3 45.8 165.7a74.01 74.01 0 0024.4 59.8 73.36 73.36 0 0053.4 18.8c19.7-1 37.8-9.7 51-24.4 13.3-14.9 24.8-30.1 34.4-45.6 14 17.9 25.7 37.4 35 58.4 15.9 35.8 24 73.9 24 113.1 0 74.9-29.5 145.4-83 198.4z"></path></svg>
                            <span className="text-app-primary">APR</span>
                        </div>              
                        <div className='font-bold'>21.18%</div>
                        </div>
                        <div className='text-btn text-btn__r'>60 Days lock</div>
                    </div>
                </div>
                <div className='data-list__item-col'>
                    <div className='stak-state'>
                        <div className='title'>
                        <svg viewBox="64 64 896 896" focusable="false" fill="#7A30E0" width="14px" height="14px" data-icon="lock" aria-hidden="true"><path d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"></path></svg>
                        <span>Total Staked</span>          
                        </div>
                        <div className='grimace-value'>145,515.86 Grimace</div>
                        <div className='currency-value'>69,879.93 USD</div>
                    </div>
                </div>
                <div className='data-list__item-col'>
                    <div className='stak-state'>
                        <div className='title'>
                        <svg viewBox="64 64 896 896" focusable="false" fill="#7A30E0" width="14px" height="14px" data-icon="clock-circle" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path></svg>
                        <span>Ends in</span>
                        </div>
                        <div className='grimace-value'>114.12 Days Left</div>
                        <div className='currency-value'>3286693 Blocks</div>
                    </div>
                </div>
                <div className='detail-action'>
                    <button 
                        type='button' 
                        className='detail-action-btn'
                        onClick={() => setOpen(!open)}
                    >
                        <span>Show Details</span>
                        {open ? <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 8.5L8 1.5L1 8.5" stroke="#F3BA2F" stroke-width="2"></path></svg> : <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L8 8.5L15 1.5" stroke="#F3BA2F" stroke-width="2"></path></svg>}
                    </button>
                </div>
            </div>   
            <div className='data-list__item--content'>
                <div className='d-flex data-list__item--content-l'>
                    <a href='javascript:;' className='website-link'>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25001 3.75001C2.0511 3.75001 1.86033 3.82902 1.71968 3.96968C1.57902 4.11033 1.50001 4.3011 1.50001 4.50001V12.75C1.50001 12.949 1.57902 13.1397 1.71968 13.2804C1.86033 13.421 2.0511 13.5 2.25001 13.5H10.5C10.699 13.5 10.8897 13.421 11.0304 13.2804C11.171 13.1397 11.25 12.949 11.25 12.75V8.25003C11.25 7.83581 11.5858 7.50002 12.0001 7.50002C12.4143 7.50002 12.7501 7.83581 12.7501 8.25003V12.75C12.7501 13.3468 12.513 13.9191 12.091 14.341C11.6691 14.763 11.0968 15.0001 10.5 15.0001H2.25001C1.65327 15.0001 1.08097 14.763 0.659012 14.341C0.237054 13.9191 0 13.3468 0 12.75V4.50001C0 3.90327 0.237054 3.33097 0.659012 2.90901C1.08097 2.48705 1.65327 2.25 2.25001 2.25H6.75003C7.16424 2.25 7.50003 2.58579 7.50003 3C7.50003 3.41422 7.16424 3.75001 6.75003 3.75001H2.25001Z" fill="#7A30E0"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.99976 0.750003C8.99976 0.335788 9.33554 0 9.74976 0H14.2498C14.664 0 14.9998 0.335788 14.9998 0.750003V5.25002C14.9998 5.66424 14.664 6.00003 14.2498 6.00003C13.8356 6.00003 13.4998 5.66424 13.4998 5.25002V1.50001H9.74976C9.33554 1.50001 8.99976 1.16422 8.99976 0.750003Z" fill="#7A30E0"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.7801 0.219671C15.073 0.512565 15.073 0.987441 14.7801 1.28034L6.53009 9.53037C6.2372 9.82327 5.76232 9.82327 5.46943 9.53037C5.17653 9.23748 5.17653 8.7626 5.46943 8.46971L13.7195 0.219671C14.0124 -0.0732237 14.4872 -0.0732237 14.7801 0.219671Z" fill="#7A30E0"></path></svg>
                        Website
                    </a>
                    <div class="stak-state">
                        <div class="title">
                            <svg viewBox="64 64 896 896" focusable="false" fill="#7A30E0" width="14px" height="14px" data-icon="pie-chart" aria-hidden="true"><path d="M864 518H506V160c0-4.4-3.6-8-8-8h-26a398.46 398.46 0 00-282.8 117.1 398.19 398.19 0 00-85.7 127.1A397.61 397.61 0 0072 552a398.46 398.46 0 00117.1 282.8c36.7 36.7 79.5 65.6 127.1 85.7A397.61 397.61 0 00472 952a398.46 398.46 0 00282.8-117.1c36.7-36.7 65.6-79.5 85.7-127.1A397.61 397.61 0 00872 552v-26c0-4.4-3.6-8-8-8zM705.7 787.8A331.59 331.59 0 01470.4 884c-88.1-.4-170.9-34.9-233.2-97.2C174.5 724.1 140 640.7 140 552c0-88.7 34.5-172.1 97.2-234.8 54.6-54.6 124.9-87.9 200.8-95.5V586h364.3c-7.7 76.3-41.3 147-96.6 201.8zM952 462.4l-2.6-28.2c-8.5-92.1-49.4-179-115.2-244.6A399.4 399.4 0 00589 74.6L560.7 72c-4.7-.4-8.7 3.2-8.7 7.9V464c0 4.4 3.6 8 8 8l384-1c4.7 0 8.4-4 8-8.6zm-332.2-58.2V147.6a332.24 332.24 0 01166.4 89.8c45.7 45.6 77 103.6 90 166.1l-256.4.7z"></path></svg>
                            <span>Reward per Block</span>
                        </div>
                        <div class="grimace-value">0.00294 Grimace</div>
                    </div>
                </div>
                <div className='data-list__item--content-r d-flex'>
                    <div className='d-flex border-block'>
                        <div class="stak-state">
                            <div class="title">
                                <svg viewBox="64 64 896 896" focusable="false" fill="#7A30E0" width="14px" height="14px" data-icon="aliwangwang" aria-hidden="true"><path d="M868.2 377.4c-18.9-45.1-46.3-85.6-81.2-120.6a377.26 377.26 0 00-120.5-81.2A375.65 375.65 0 00519 145.8c-41.9 0-82.9 6.7-121.9 20C306 123.3 200.8 120 170.6 120c-2.2 0-7.4 0-9.4.2-11.9.4-22.8 6.5-29.2 16.4-6.5 9.9-7.7 22.4-3.4 33.5l64.3 161.6a378.59 378.59 0 00-52.8 193.2c0 51.4 10 101 29.8 147.6 18.9 45 46.2 85.6 81.2 120.5 34.7 34.8 75.4 62.1 120.5 81.2C418.3 894 467.9 904 519 904c51.3 0 100.9-10.1 147.7-29.8 44.9-18.9 85.5-46.3 120.4-81.2 34.7-34.8 62.1-75.4 81.2-120.6a376.5 376.5 0 0029.8-147.6c-.2-51.2-10.1-100.8-29.9-147.4zm-66.4 266.5a307.08 307.08 0 01-65.9 98c-28.4 28.5-61.3 50.7-97.7 65.9h-.1c-38 16-78.3 24.2-119.9 24.2a306.51 306.51 0 01-217.5-90.2c-28.4-28.5-50.6-61.4-65.8-97.8v-.1c-16-37.8-24.1-78.2-24.1-119.9 0-55.4 14.8-109.7 42.8-157l13.2-22.1-9.5-23.9L206 192c14.9.6 35.9 2.1 59.7 5.6 43.8 6.5 82.5 17.5 114.9 32.6l19 8.9 19.9-6.8c31.5-10.8 64.8-16.2 98.9-16.2a306.51 306.51 0 01217.5 90.2c28.4 28.5 50.6 61.4 65.8 97.8l.1.1.1.1c16 37.6 24.1 78 24.2 119.8-.1 41.7-8.3 82-24.3 119.8zM681.1 364.2c-20.4 0-37.1 16.7-37.1 37.1v55.1c0 20.4 16.6 37.1 37.1 37.1s37.1-16.7 37.1-37.1v-55.1c0-20.5-16.7-37.1-37.1-37.1zm-175.2 0c-20.5 0-37.1 16.7-37.1 37.1v55.1c0 20.4 16.7 37.1 37.1 37.1 20.5 0 37.1-16.7 37.1-37.1v-55.1c0-20.5-16.7-37.1-37.1-37.1z"></path></svg>
                                <span>Total Earned</span>
                            </div>
                            <div class="grimace-value">0 Grimace</div>
                            <div class="currency-value">0 USD</div>
                        </div>
                        <div class="stak-state">
                            <div class="title">
                                <span>Claimable Reward</span>
                            </div>
                            <div class="grimace-value">0 Grimace</div>
                            <div class="currency-value">0 USD</div>
                        </div>
                        <div className='action-group'>
                            <button type='button' className='btn'>Claim</button>
                            <button type='button' className='btn'>Emergency Unstake</button>
                        </div>
                    </div>
                    <div className='d-flex border-block'>
                        <div class="stak-state">
                            <div class="title">
                                <span>Grimace Staked</span>
                            </div>
                            <div class="grimace-value">0 Grimace</div>
                            <div class="currency-value">0 USD</div>
                        </div>
                        <div className='action-group'>
                            <button type='button' className='btn'>Stake</button>
                            <button type='button' className='btn'>Unstake</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='alert-warning'>
                <svg width="15" height="16" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 0.909091C2.74065 0.909091 0.909091 2.74065 0.909091 5C0.909091 7.25935 2.74065 9.09091 5 9.09091C7.25935 9.09091 9.09091 7.25935 9.09091 5C9.09091 2.74065 7.25935 0.909091 5 0.909091ZM0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5Z" fill="#F3BA2F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.99996 2.72729C5.25099 2.72729 5.4545 2.9308 5.4545 3.18184V5.00002C5.4545 5.25106 5.25099 5.45457 4.99996 5.45457C4.74892 5.45457 4.54541 5.25106 4.54541 5.00002V3.18184C4.54541 2.9308 4.74892 2.72729 4.99996 2.72729Z" fill="#F3BA2F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.54541 6.81819C4.54541 6.56715 4.74892 6.36365 4.99996 6.36365H5.0045C5.25554 6.36365 5.45905 6.56715 5.45905 6.81819C5.45905 7.06923 5.25554 7.27274 5.0045 7.27274H4.99996C4.74892 7.27274 4.54541 7.06923 4.54541 6.81819Z" fill="#F3BA2F"></path></svg>
                <p>Please claim reward from staking pool before removing staked tokens, otherwise reward will be lost.</p>
            </div>
        </div>
      </React.Fragment>
    );
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
];

export default function Pools() {
  const [open, setOpen] = React.useState(false);


  return (
    <>
        <div className='banner-wrapper'>
            <div className='banner'>
                {/* <div className='banner__logo'>
                    <Image src="/assets/imgs/Logomark_GrimaceCoin.png" alt="" width={320} height={343} />
                </div> */}
                <div className='banner__title'>
                    <h1 className='page-title'>Staking Club</h1>
                    <p>Just stake some tokens to earn high APR, low risk</p>
                </div>
            </div>
            <div className='staked_value'>
                <h2 className='title'>Total Staked Value ($)</h2>
                <h3 className='value'>70,281.47 <span>USD</span></h3>
                <button className="btn btn-apply">Apply Pool For Your Project</button>
            </div>
        </div>
        <div className='filter'>
            <SearchBar/>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="live"
                name="radio-buttons-group"
            >
                <FormControlLabel value="live" 
                    control={<Radio 
                        sx={{
                            "& .MuiSvgIcon-root": {                          
                            color: "#511597",
                            "&.Mui-checked": {
                                color: "#511597",
                            }}
                        }}
                    />} 
                    label="Live Pool" 
                    sx={{
                        color: '#511597'
                    }}
                />
                <FormControlLabel 
                    value="expired" 
                    control={<Radio 
                        sx={{
                            "& .MuiSvgIcon-root": {                          
                            color: "#511597",
                            "&.Mui-checked": {
                                color: "#511597",
                            }}
                        }}
                    />}
                    label="Expired Pool"
                    sx={{
                        color: '#511597',
                    }}
                />
            </RadioGroup>
        </div>

        <div>
            <div className='pagination-wrapper'>
                <span>Show</span>
                <select>
                    <option>3</option>
                    <option>5</option>
                    <option>10</option>
                </select>
                <span>results</span>
                <Pagination count={1} showFirstButton showLastButton />            
            </div>            
        </div>
        
        <div className='data-list'>
            {rows.map((row) => (
                <Row key={row.name} row={row} />
            ))}
        </div>
    </>
  )
}