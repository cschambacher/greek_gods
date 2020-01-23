import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./navbar/navbar";
import GodsList from "./gods/GodsList";
import Create from "./create/CreateIndex";
import GodDetail from "./detail/GodDetail"

const App = () => {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route exact path="/gods/:id" component={GodDetail} />
                <Route exact path="/new" component={Create} />
                <Route path="/" component={GodsList} />
            </Switch>
        </div>
    );
};

export default App;