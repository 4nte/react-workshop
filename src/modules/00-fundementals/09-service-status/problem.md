## Mission
Create a **Services** component that will render all services (data from `/exercise/data.ts`). <br>
Data is list of services with type ***Service*** defined in `/exercise/data.ts`.

Create a **ServiceStatus** component for displaying data of each service. <br>
**ServiceStatus** should receive props of type `{ data: Service }`; <br>
**ServiceStatus** should display values of specific framework in format `{name} is {operational}`. <br>
**operational** is boolean type and should be displayed as:
 * `operational = true` -> show text *'Operational'*
 * `operational = false` -> show text *'Down'*
 
Rendered service status examples: <br>
 * `Web site is Operational`
 * `Web shop is Down` 

***BONUS*** - add inline style to **ServiceStatus** component for better list display.

## Steps
1. Create file `exercise/Services.tsx` and export component `Services` as default.
2. Import `Services` component in `exercise/App.tsx` and render it.
3. In `Services.tsx` import data from `data.ts`;
4. Create file `exercise/ServiceStatus.tsx` and export component `ServiceStatus` as default.
5. Add logic for conditional rendering of service operational status as shown above.
6. Import `ServiceStatus` component in `exercise/Services.tsx` and render it in list.
7. Run all tests from `App.test.tsx`. 

