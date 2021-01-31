## Mission
Create a theme context, where

In **App.tsx** create React context named **ThemeContext** and export it.<br>

Context will provide following value (choose your colors 🌟, and text):

```
{
  backgroundColor: '#f0f0f0',
  navigationColor: '#0193e3',
  cardColor: '#e5eef3',
  reactContextText: 'In a nutshell, React context is just a global dependency injection.'
}
```
---
### (1/3) Navigation component

**Create** the Navigation component that will render three items:
 * Home
 * About
 * Blog

 * set **background-color** property to `navigationColor` from `ThemeContext`
 * add **"role="navigation"** to styled element (**required** for testing purposes)

---
### (2/3) Card component

**Create** Card component that will render text from `reactContextText` from context

**Style** Card:
 * Apply `navigationColor` from `ThemeContext`, as `background-color` of the `Navigation` component.
 * Add **role="card"** property to the styled element (**IMPORTANT** for testing purposes)

---
### (3/3) Content component

**Create** `Content` component that will render: 
 * Heading with text "Content"
 * **Card** component
 
**Style** Content:
 * **background-color** using context value `backgroundColor`
 * add **role="content"** to styled element (**IMPORTANT** for testing purposes)

---
 
## Example
![Alt Text](https://i.imgur.com/1EcctgT.png)

## Steps
1. Create file `exercise/Navigation.tsx` and export component **Navigation** as default.
2. Create file `exercise/Card.tsx` and export component **Card** as default.
3. Create file `exercise/Content.tsx` and export component **Content** as default.
4. Add text `Home`, `About`, `Blog` to **Navigation** & style container using ***context***.
5. Add text (look above) to **Card** & style container using ***context***.
6. Style **Content** container using ***context*** & render **Card** in it.
7. Run all tests from `App.test.tsx`. 

