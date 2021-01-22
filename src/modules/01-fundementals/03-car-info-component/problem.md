## Mission
Create a **CarInfo** component. Component should receive props:
 * make
 * model
 * color 

In **CarInfo** simply render all received props. <br>
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
2. Import CarInfo component in `exercise/App.tsx` and render it for both cars.
3. Receive expected props in CarInfo component, and render them display them. (order does not matter)
4. Run all tests from `App.test.tsx`. 
