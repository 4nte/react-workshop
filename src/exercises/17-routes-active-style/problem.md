## Mission
Using solution from previous exercise (**16-routes**), implement style to active page link using `<NavLink />` component from React-router.

Active link should have style:
* color #569800
* border-bottom 3px solid #569800

## Notes
Default className for active link is **"active"** but you can override it by passing **activeClassName="name"**.
NavLink can be styled using *className* or inline with *activeStyle*.


## Steps 
1. Create file `exercise/Color.tsx` and export component **Color** as default.
2. In **Color** component render color name (from props) and style background.
3. Import **Color** component in **App** and render for each path.
4. Create file `exercise/Navigation.tsx`. 
5. Implement basic **Navigation** component that will render link for each Route
6. Import **Navigation** in `exercise/App.tsx` and render it.
4. Run all tests from `App.test.tsx`. 
