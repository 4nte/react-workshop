## Mission
Create a **Statistics** component that will show javascript framework statistic for 2018. <br>
Import framework data from `/exercise/data.ts` that is exported as default. <br>
Data is list of framework statistics for 2018 with type ***FrameworkType*** defined in `/exercise/data.ts`.

Create a **Framework** component that will be displayed in **Statistics** component for each framework from data. <br>
**Framework** should receive props of type `{ data: FrameworkType }`; <br>
**Framework** should display values of specific framework in format `{label}: {value}`. <br>
Labels are:
* Name
* Popularity
* GitHub stars
* Ranked

***BONUS*** - add inline style to **Framework** component for better list display.

## Steps
1. Create file `exercise/Statistics.tsx` and export component `Statistics` as default.
2. Import `Statistics` component in `exercise/App.tsx` and render it.
3. In `Statistics.tsx` import data from `data.ts`;
4. Create file `exercise/Framework.tsx` and export component `Framework` as default.
5. Import `Framework` component in `exercise/Statistics.tsx` and render it in list.
6. Run all tests from `App.test.tsx`. 
