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
                backgroundImage: `url('https://images.unsplash.com/photo-1749581434794-d5de133303d9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                           
                        }}
                    >
                        <div className="w-full mb-1">
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
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                amountDisabled
                                currencyType={to}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
  }

export default App