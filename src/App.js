import React, { Component, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScreenLoading, { ScreenLoadingProvider } from './components/layoutParts/ScreenLoading';
import { withTopMenu } from './components/layoutDesign';

/* components */
const HomePage = lazy(() => import('./components/pages/HomePage'));
const AboutPage = lazy(() => import('./components/pages/AboutPage'));
const ContactUsPage = lazy(() => import('./components/pages/ContactUsPage'));

class App extends Component{
    
    appRoutes = [
        { exact: true, path: '/', element: HomePage },
        { path: '/about', element: AboutPage },
        { path: '/contact', element: ContactUsPage }
    ]; // application routes
    
    render(){
        return (
            <ScreenLoadingProvider>
                <Suspense fallback={ <ScreenLoading /> }>
                    <Routes>
                        {
                            this.appRoutes.map(
                                (route, index) =>{
                                    const HOCElementRoute = withTopMenu(route.element);
                                    return <Route key={ index }
                                                path={ route.path }
                                                element={ <HOCElementRoute /> } />
                                }
                            )
                        }
                    </Routes>
                </Suspense>
            </ScreenLoadingProvider>
        );
    }
}

export default App;