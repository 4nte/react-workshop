// This file is autogenerated -- run parseExercises.js to update
import * as React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Home from "./Home";
import Exercise from "./components/Exercise";



    
        // Import solutions
        import fundementals_Solutionundefined from 'undefined';
    
        // Import problems
        import fundementals_Problemundefined from 'undefined';

    
,
    
        // Import solutions
        import react-router_Solutionundefined from 'undefined';
    
        // Import problems
        import react-router_Problemundefined from 'undefined';

    
,
    
        // Import solutions
        import styled-components_Solutionundefined from 'undefined';
    
        // Import problems
        import styled-components_Problemundefined from 'undefined';

    





const ExerciseRoutes: React.FC = () => {
    return (
        <>
         <Route path="/" component={withRouter(Home)} exact />
         <Route path="/exercise/undefined" component={() => Exercise({ component: Solutionundefined, problem: problemundefined })} />
         <Route path="/exercise/undefined" component={() => Exercise({ component: Solutionundefined, problem: problemundefined })} />
         <Route path="/exercise/undefined" component={() => Exercise({ component: Solutionundefined, problem: problemundefined })} />
        </>
    )
}

export default ExerciseRoutes;