## Mission
In **App.tsx** create React context named **ThemeContext** and export named constant (**don't** export as default!).<br>

Context will provide following value (choose your colors 🌟, and text):

```
{
  backgroundColor: '#f0f0f0',
  navigationColor: '#0193e3',
  cardColor: '#e5eef3',
  reactContextText: 'Some random content text'
}
```
---
### Navigation 

**Create** Navigation component that will display navigation with text:
 * Home
 * About
 * Blog

**Style** Navigation:
 * **background-color** using context value `navigationColor`
 * add **"role="navigation"** to styled element (**IMPORTANT** for testing purposes)

---
### Card 

**Create** Card component that will render text from `reactContextText` from context

**Style** Card:
 * **background-color** using context value `cardColor`
 * add **"role="card"** to styled element (**IMPORTANT** for testing purposes)

---
### Content 

**Create** Content component that will render: 
 * Heading with text **`Content`**
 * **Card** component
 
**Style** Content:
 * **background-color** using context value `backgroundColor`
 * add **"role="content"** to styled element (**IMPORTANT** for testing purposes)

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

