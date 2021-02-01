## Mission
Create a **Clock** component. Using local state and lifecycle methods implement component that will display current time in format `HH.MM.SS`.
Store current `date` in the component state. 

 Use `setInterval` to update the time every second. 
 Don't forget to call `clearInterval` when the component unmounts.

## Steps
1. Create file `exercise/CurrencyConverter.tsx` and export class component `Clock` as default.
2. Import component in `exercise/App.tsx` using `import Clock from "./Clock";`
3. Render current time like `{time.toLocaleTimeString()}`;
4. Run all tests from `App.test.tsx`. 
