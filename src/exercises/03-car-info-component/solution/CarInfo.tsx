import React from 'react';

// In App.tsx:
// <CarInfo color="blue" make="Audi" model="A5" />
// <CarInfo color="white" make="Honda" model="Civic" />

interface HOCProps {
    model: string;
    make: string;
    color: string;
}

function CarInfo({ model, make, color }: HOCProps) {
    return (
        <div>
            <div>Make: {make}</div>
            <div>Model: {model}</div>
            <div>Color: {color}</div>
        </div>
    )
}

export default CarInfo;