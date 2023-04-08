import React, { useState } from "react";
import Image from 'next/image'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function SwipeForm() {
    const [startDate, setStartDate] = useState(new Date());  

    return (
        <>
            <form className='form swipe-form' type='submit'>
                <div className='form-group input-group'>
                    <input type="text" id="pancake-swap" className='form-control' name="pancake-swap" placeholder="Enter PancakeSwap LP token address" />
                    <div className='input-group-block_r'>
                        <div className="end-text">Pair: ---/---</div>
                    </div>                    
                </div>
                <div className='form-group input-group'>
                    <input type="number" id="token-amount" className='form-control' name="token-amount" placeholder="Enter LP token amount to lock" />
                    <div className='input-group-block_r'>
                        <button className="adornment-button" disabled="">Max</button>
                        <div className="end-text">Available: 0</div>
                    </div>
                </div>
                <div className='form-group input-group'>
                    <DatePicker 
                        className="form-control"
                        placeholderText='dd-mm-yyyy'
                        dateFormat='dd-MM-yyyy'
                        selected={startDate} 
                        onChange={(date) => setStartDate(date)} 
                    />  
                    {/* <input type='text' className=' datepicker'  /> */}
                    <div className='input-group-block_r'>
                        <button type="button" className="adornment-button" disabled="">Tomorrow</button>
                        <button type="button" className="adornment-button" disabled="">+1 year</button>
                    </div>
                </div>
                <div className='form-group-radio'>
                    <label className='form-label'>Select fee type:</label>
                    <div className='form-group-radio__options'>
                        <label className="form-group-radio__options--input">
                            <input type="radio" name="fee-type" />
                            <div>Pay in LP <span>(0.5% of locked LP Tokens)</span></div>
                        </label>
                        <label className="form-group-radio__options--input">
                            <input type="radio" name="fee-type" />
                            <div>Pay in BNB <span>(0.1 BNB flat)</span></div>
                        </label>
                    </div>
                </div>
                <div className='form-actions'>
                    <button type="button" className="btn btn-md btn-primary btn-blob">
                        Approve LP Tokens
                        <span className="btn-blob__inner">
                            <span className="btn-blob__blobs">
                                <span className="btn-blob__blob"></span>
                                <span className="btn-blob__blob"></span>
                                <span className="btn-blob__blob"></span>
                                <span className="btn-blob__blob"></span>
                            </span>
                        </span>
                    </button>
                    <button type="button" className="btn btn-md btn-primary btn-blob">
                        Lock LP Tokens
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