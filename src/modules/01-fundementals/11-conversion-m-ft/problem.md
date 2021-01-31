## Mission
Create **CurrencyConverter** component that will render component **UnitInput** 2 times. Once for input in **meter** and once for **feet** units.
**UnitInput** should render one input of **type="number"**. <br>
Inputs should be synchronized. Each time one of inputs has been changed other one should be updated. <br>
Use conditional rendering for **UnitInput**

**Labels for inputs:** 
 * Enter value in meters:
 * Enter value in feet:
 
*NOTE!* - label must be connected with input, either with **htmlFor** attribute in label or input nested in label.
<br>

## Example
![Alt Text](https://media.giphy.com/media/iFrikjAJSqMCgVCsyl/giphy.gif)

## Reference 
**1 meter = 3.2808399 feet**

## Steps
1. Create file `exercise/CurrencyConverter.tsx` and export component `CurrencyConverter` as default.
2. Create file `exercise/UnitInput.tsx` and export component `UnitInput` as default.
3. Import `CurrencyConverter` component in `exercise/App.tsx` and render it.
4. Import `UnitInput` component in `exercise/CurrencyConverter.tsx` and render it.
5. Add logic for rendering `UnitInput` type (*meter* or *feet*) based on props.
6. Handle `UnitInput` input change. (use lifting state up)
7. Run all tests from `App.test.tsx`. 

