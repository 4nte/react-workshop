## Mission
Create a **UserForm** component that will render form:
 * label: **First name**, input: **type="text"**
 * label: **Last name**, input: **type="text"**
 * label: **Username**, input: **type="text"**
 * button **Submit**, **type="submit"**
<br>

Manage form state using local state.
Also make **array of users** in state which should be empty by default. <br>
**State structure**: 
```json
    {
      form: {
        username: '',
        firstName: '',
        lastName: ''
      },
      users: []
    }
```

After form is submitted new user should be added to **users** array in state. <br>
Besides form, **loop through users from state and render each of them** with all values (firstName, lastName, username).

*NOTE!* - label must be connected with input, either with **htmlFor** attribute in label or input nested in label.

## Steps
1. Create file `exercise/UserForm.tsx` and export component `UserForm` as default.
2. Import `UserForm` component in `exercise/App.tsx` and render it.
3. In `UserForm.tsx` implement form with three input fields of type `text` and button of type `submit`.
4. Implement methods for handling input value change and form submit handler.
5. Render all users from array in state.
6. Run all tests from `App.test.tsx`. 

