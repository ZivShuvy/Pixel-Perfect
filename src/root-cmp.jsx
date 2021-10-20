import React from 'react'
import { Switch, Route } from 'react-router'
import { AppHeader } from './cmps/app-header'
import { HomePage } from './pages/home-page'

export class RootCmp extends React.Component {

    render() {
        return (
            <div>
                <AppHeader />
                <main>
                    <Switch>
                        <Route path="/" component={HomePage} />
                    </Switch>
                </main>
                {/* <AppFooter /> */}
            </div>
        )
    }
}


