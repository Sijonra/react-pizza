import React from "react";
import './Normalize.scss'
import './App.css';
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";
import CartEmpty from "./components/Cart/CartEmpty";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PageNotFound from "./components/Main/PageNotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <PageNotFound />,
    },
    {
        path: '/cart',
        element: <Cart />,
        errorElement: <PageNotFound />,
    },
    {
        path: 'emptyCart',
        element: <CartEmpty />,
        errorElement: <PageNotFound />,
    }
]);

function App() {
    return (
        <div className='App'>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
