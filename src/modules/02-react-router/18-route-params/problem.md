## Mission
Create routing for browsing users. **Users are stored in `data.ts` file.**

In **App** for `<Route path="/" />` render all **usernames** (from users array) using **`<Link />`** as wrapper for each username. <br>
Each **`<Link />`** should navigate to url of pattern: `/user/{id}` where **id** is user id. <br>

Finally implement **UserDetails** component that will be rendered for every path of type `/user/:id` displaying all user info.
**UserDetails** can only receive ***RouteComponentProps*** (or receive route props using hook **useParams**) !<br>
Find user with **id** from params and render user info.

## Example - UserDetails
![Alt Text](https://i.imgur.com/8Dfn6oH.png)


## Steps 
1. Import users from `/exercise/data.ts` in **App.tsx** and render each username in list of `<Link />`.
2. Create file `exercise/UserDetails.tsx` and export component **UserDetails** as default.
3. In **UserDetails** get url params (id) either from *props* or *useParams()* hook.
5. In **App** render **UserDetails** for url of type `/user/:id`
6. Run all tests from `App.test.tsx`. 
