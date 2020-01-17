import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Inicio from './Inicio';
import Graficos from './Graficos';
import GravarAuditoria from './GravarAuditoria';

export default () => 
<BrowserRouter>
    <Switch>
        <Route exact path="/" component={Inicio} />
        <Route path="/graficos" component={Graficos} />
        <Route path="/auditoria" component={GravarAuditoria} />
    </Switch>
</BrowserRouter>
