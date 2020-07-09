import React from 'react';
import './style.css';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
  } from 'react-router-dom';
import Topic from './Topic'




export default function Layanan() {
        let match = useRouteMatch();

    
    return(
        
<section id="what">
        <div class="container bg-layanan">
            <h2 class="m-heading text-center">
                <span class="text-primary"> Layanan </span>
                yang kami sediakan
            </h2>
            
            <div class="items">
                <div class="item">
                    <div>
                        <h3> <Link to={`${match.url}/list-rumah`}> Rumah Terbaik </Link> </h3>
                        
                    </div>
                    <Switch>
                    <Route path={`${match.url}/:topicId`}>
                        <Topic/>
                    </Route>
                    <Route path={match.url}>
                    </Route>
                </Switch>

                </div>
                <div class="item">
                    <div>
                        <h3> Car Port </h3>
                    </div>

                </div>
                <div class="item">
                    <div>
                        <h3> Kamar 3 </h3>
                    </div>

                </div>

            </div>
            
        </div>
        

    </section>
    
        );
    }
