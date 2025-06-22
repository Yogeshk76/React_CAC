import React, {useId} from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,
    currencyType,
    currencyOptions = [],
    onCurrencyChange,
    amountDisabled = false,
    currencyDisabled = false,
}) {

    const amountInputId = useId();
    return (
        <div className={`bg-white p-3 rounded-md text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
                    disabled={amountDisabled}
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    value={currencyType}
                    disabled={currencyDisabled}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none border-1 border-gray-60"
                    
                >
                    
                        {currencyOptions.map((currency) => (
                            <option value={currency} key={currency}>
                            {currency}
                        </option>
                        ))}

                
                </select>
            </div> 
        </div>
    );
}

export default InputBox;

