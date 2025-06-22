import React from 'react'
import InputBox from './components/InputBox'
import { useState } from 'react';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import './App.css'

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState('usd');
    const [to, setTo] = useState('inr');
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);

    const options = Object.keys(currencyInfo)

    const convert = () => {
      setConvertedAmount(amount * currencyInfo[to])
    }

    const clearInput = () => {
      setAmount(0);
      setFrom('usd');
      setTo('inr');
      setConvertedAmount(0);
    }

    const swap = () => {
      setFrom(to);
      setTo(from);
      setConvertedAmount(amount);
      setAmount(convertedAmount);
    }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://plus.unsplash.com/premium_photo-1721076216277-22de7111cd06?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border-4 border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                           
                        }}
                    >
                        <div className="w-full mb-1 border-4 rounded-md border-gray-60">
                            <InputBox
                                label="From"
                                amount={amount}
                                onAmountChange={(amount) => setAmount(amount)}
                                currencyType={from}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                onClick={swap}
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-gray-60 rounded-md bg-pink-300 text-black px-2 py-0.5"
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full rounded-md mt-1 mb-4 border-4 border-gray-60">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                amountDisabled
                                currencyType={to}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                
                            />
                        </div>
                        <div className='flex justify-center'>
                          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-md border-4 border-black">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                        <button 
                        onClick={clearInput}
                        className='bg-amber-500 text-black px-3 py-2 rounded-md ml-2 border-4 border-gray-60'>
                          Clear
                        </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
  }

export default App