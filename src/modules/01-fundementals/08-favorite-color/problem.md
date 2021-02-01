## Mission
Create a **FavoriteColor** component. <br>
Component should render 4 buttons: 
 * blue
 * red
 * green 
 * yellow  <br>
 
Component should also display text in format: `My favorite color is {color}.` with `{color}` being color from local state. <br>
State should update each time one of buttons has been pressed with appropriate color. <br> 
Initial color should be **red**;
e.g. `blue` button clicked -> `My favorite color is blue.`


Bonus points for changing the text color to the selected color!



## Steps 
1. Create file `exercise/FavoriteColor.tsx` and export class component `FavoriteColor` as default.
2. Import component in `exercise/App.tsx` and render it.
3. Make 4 buttons for each color in component and handle their click events.
4. Render favorite color message under buttons.
5. Run all tests from `App.test.tsx`. 
