## Mission
Create a **CarInfo** component. Component should receive props:
 * make
 * model
 * color 

In **CarInfo** simply render all props received. (props destructuring recommended) <br>
In **App.tsx** render two **CarInfo**s with data:
 1. Car
    * make: Audi
    * model: A5
    * color: blue
 2. Car
    * make: Honda
    * model: Civic
    * color: white

Note!
Render each property in format: `{label}: {value}`. e.g. `Model: Audi`, `Make: A5`...

## Steps 
1. Create file `exercise/CarInfo.tsx` and export class component `CarInfo` as default.
2. Import component in `exercise/App.tsx` and render it. [2x (different data)]
3. Receive props in component and render all of them. (order does not matter)
4. Run all tests from `App.test.tsx`. 
