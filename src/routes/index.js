import Home from '~/pages/Home';
import Login from '~/pages/Login';
import News from '~/pages/News';
import Instruction from '~/pages/Instruction';
import Contact from '~/pages/Contact';
import SearchPage from '~/pages/SearchPage';
import * as config from '~/config';
import Register from '~/pages/Login/Register';
import ForgotPassword from '~/pages/Login/ForgotPassword';
import DetailPage from '~/pages/DetailPage';
import CartPage from '~/pages/CartPage';
import PayPage from '~/pages/PayPage';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.login, component: Login },
    { path: config.routes.register, component: Register },
    { path: config.routes.news, component: News },
    { path: config.routes.instruction, component: Instruction },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.search, component: SearchPage },
    { path: config.routes.detail, component: DetailPage },
    { path: config.routes.cart, component: CartPage },
    { path: config.routes.pay, component: PayPage },
    { path: config.routes.forgotpassword, component: ForgotPassword },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
