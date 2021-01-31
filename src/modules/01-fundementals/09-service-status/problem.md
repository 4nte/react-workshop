## Mission
Create a **ServiceList** component that will render all services (import data from `/exercise/data.ts`). <br>
Data is list of services with type ***Service*** defined in `/exercise/data.ts`.

Create a **ServiceStatus** component for displaying data of each service. <br>
**ServiceStatus** should receive props of type `{ data: Service }`; <br>
**ServiceStatus** should display values of specific framework in format `{name} is {operational}`. <br>
**operational** is boolean type and should be displayed as:
 * `operational = true` -> display text *'Operational'*
 * `operational = false` -> display text *'Down'*
 
`ServiceStatus` component should render text in following format: <br>
 * `Web site is Operational`
   

or
 * `Web site is Down`

***BONUS*** - add inline style to **ServiceStatus** component for better list display.

## Steps
1. Create file `exercise/ServiceList.tsx` and export component `ServiceList` as default.
2. Import `ServiceList` component in `exercise/App.tsx` and render it.
3. In `ServiceList.tsx` import data from `data.ts`;
4. Create file `exercise/ServiceStatus.tsx` and export component `ServiceStatus` as default.
5. conditionally render the status of a service depending on the `operational` variable value (operational/down).
6. Import `ServiceStatus` component in `exercise/ServiceList.tsx` and render it for each service in `data.ts` array.
7. Run all tests from `App.test.tsx`. 

