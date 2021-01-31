## Mission
Create the **UserForm** component that will render a following HTML form:
 * label: **First name**, input: **type="text"**
 * label: **Last name**, input: **type="text"**
 * label: **Username**, input: **type="text"**
 * button **Submit**, **type="submit"**
<br>

Manage form state using local component state.
Also, define **array of users** in state which should be empty by default. <br>
**Your component state should look something like this:**: 
```json5
    {
      form: {
        username: '',
        firstName: '',
        lastName: ''
      },
      users: []
    }
```


When the form is submitted, a new user should be appended to **users** array in component state. <br>


*NOTE!* - label element must reference the respective input element, using the **htmlFor** attribute.

## Steps
1. Create file `exercise/UserForm.tsx` and export component `UserForm` as default.
2. Import `UserForm` component in `exercise/App.tsx` and render it.
3. In `UserForm.tsx` create a form with three input fields of type `text` and button of type `submit`.
4. Implement methods for handling input value change and form submit handler.
5. Render a list of users added in state (`state.users` array)
6. Run all tests from `App.test.tsx`. 

