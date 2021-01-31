import * as React from 'react';
import {currencyUSDRates} from "../exercise/data";
import {ChangeEvent, useCallback} from "react";

type Props = {
    value: string;
    onChange: (currency: string) => void;
    currencies: string[];
}
const CurrencySelect: React.FC<Props> = props => {
    const handleChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        props.onChange(e.target.value)
    }, [])

    return (
        <select value={props.value} onChange={handleChange}>
            {props.currencies.map(currency => {
                return <option key={currency} value={currency}>
                    {currency}
                </option>
            })}
        </select>
    )
}

export default CurrencySelect;