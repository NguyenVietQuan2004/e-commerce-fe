import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { Fragment } from 'react';
import DefaultLayout from './Layouts/DefaultLayout';
import { privateRoutes, publicRoutes } from './routes';
import { useSelector } from 'react-redux';
function App() {
    const user = useSelector((state) => state.login.currentUser);
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {user &&
                        privateRoutes.map((route, index) => {
                            let Layout = DefaultLayout;
                            if (route.Layout) {
                                Layout = route.Layout;
                            } else if (route.Layout === null) {
                                Layout = Fragment;
                            }

                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page></Page>
                                        </Layout>
                                    }
                                />
                            );
                        })}

                    {/* public routes */}
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.Layout) {
                            Layout = route.Layout;
                        } else if (route.Layout === null) {
                            Layout = Fragment;
                        }
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page></Page>
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
