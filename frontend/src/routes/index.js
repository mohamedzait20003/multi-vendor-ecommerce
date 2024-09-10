// Libraries
import { createBrowserRouter } from 'react-router-dom';

// helpers
import ProtectedRoute from '../helpers/protectedRoute';

// Pages
import App from '../App';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Forgetpassword from '../pages/Forgetpassword';
import Userprofile from '../pages/Userprofile';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "sign-up",
                element: <Signup />
            },
            {
                path: "forget-password",
                element: <Forgetpassword />
            },
            {
                path: "user-profile",
                element: <ProtectedRoute element={Userprofile} />
            }
        ]
    }
]);

export default router;