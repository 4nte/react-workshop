## Mission
Create a routing system for 4 pages:
 * `path={"/blue"}`
 * `path={"/red"}`
 * `path={"/yellow"}`
 * `path={"/green"}`

Make component called **Color** which receives one prop (`color: string`). <br>
**Color** component should render color name in format **`{color} page`** (e.g. **Blue page**), and should have background-color of the same.

In **App** render 4 **Color** components for colors:
* Blue
* Red
* Yellow
* Green

Make a **Navigation** that will render links to all pages using color name with first capital case.<br> **e.g. `<Link...>Blue</Link>`** <br>
**Use** `<Switch />` component to render Routes *exclusively*.

## Steps 
1. Create file `exercise/Color.tsx` and export component **Color** as default.
2. In **Color** component, render color name (from props) and style the background.
3. Import **Color** component in **App** and render for each path.
4. Create file `exercise/Navigation.tsx`. 
5. Implement basic **Navigation** component that will render link for each Route
6. Import **Navigation** in `exercise/App.tsx` and render it.
4. Run all tests from `App.test.tsx`. 
