## Mission
Create a styled **Button** component. <br>

**If** button receives `primary={true}` prop it should render primary button style: 
 * **background color** #4a76ea
 * **border** 2px solid #4a76ea
 * **color** white
 * **padding** 10px
 * **border radius** 5px

Otherwise render normal style:
 * **background color** white
 * **border** 2px solid #4a76ea
 * **color** #4a76ea
 * **padding** 10px
 * **border radius** 5px

In App.tsx: **render** two buttons:
 * With text **Primary** with style of primary (`primary={true}`).
 * With text **Secondary** with normal style.

## Steps 
1. Create file `exercise/Button.tsx`.
2. Style default html button and export it as default (accepting prop **primary**).
3. Import `Button` component in `exercise/App.tsx` and render it.
4. Run all tests from `App.test.tsx`. 
