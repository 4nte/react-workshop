import React, {useMemo, useState} from 'react';
import {CurrencyRates, currencyUSDRates} from "../exercise/data";
import CurrencySelect from "./CurrencySelect";

type Props = {
    currencyRates: CurrencyRates,
}

const CurrencyConverter: React.FC<Props> = props => {
    const [value, setValue] = useState(1);
    const [currencyConversion, setCurrencyConversion] = useState({fromCurrency: "USD", toCurrency: "HRK"});

    const convertedValue = useMemo(() => {
        const usdValue = value / currencyUSDRates[currencyConversion.fromCurrency]
        const convertedValue = usdValue * currencyUSDRates[currencyConversion.toCurrency]

        return convertedValue
    }, [currencyConversion.fromCurrency, currencyConversion.toCurrency, value])

    return <div>
        <div>
            <input value={value} onChange={e => setValue(e.target.value as any)}/>
            <CurrencySelect value={currencyConversion.fromCurrency} onChange={currency => setCurrencyConversion({...currencyConversion, fromCurrency: currency})}/>
        </div>

        <div>
            <input disabled value={convertedValue} onChange={e => setValue(e.target.value as any)}/>
            <CurrencySelect value={currencyConversion.toCurrency} onChange={currency => setCurrencyConversion({...currencyConversion, toCurrency: currency})}/>
        </div>

    </div>
};

export default CurrencyConverter;