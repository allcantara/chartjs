import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Graficos from './Graficos';

export default () => 
<BrowserRouter>
    {/* <Switch> */}
        <Route path="/" exact component={Graficos} />
    {/* </Switch> */}
</BrowserRouter>
