import {links} from "./links";
import {Navigate} from "react-router-dom";
import Admin from "../pages/account/admin/Admin";
import BasketPage from "../pages/basketPage/BasketPage";
import ProductPage from "../pages/productPage/ProductPage";
import MainPage from "../pages/mainPage/MainPage";
import SignUp from "../pages/account/signUp/SignUp";
import SignIn from "../pages/account/signIn/SignIn";
import Profile from "../pages/account/profile/Profile";
import CategoriesPage from "../pages/categoriesPage/CategoriesPage";
import MyOrders from "../pages/account/myOrdersPage/myOrders";
import AboutPage from "../pages/other/aboutPage/AboutPage";
import ContactsPage from "../pages/contactsPage/ContactsPage";
import DeliveryPage from "../pages/deliveryPage/DeliveryPage";
import JobVacanciesPage from "../pages/other/jobVacanciesPage/JobVacanciesPage";
import PromotionsPage from "../pages/promotionsPage/PromotionsPage";
import FaqsPage from "../pages/other/faqsPage/FaqsPage";
import FavoritesPage from "../pages/favoritesPage/FavoritesPage";
import SuccessfulSignUp from "../pages/account/successfulSignUp/SuccessfulSignUp";
import ProductsPage from "../pages/productsPage/ProductsPage";
import CatalogPage from "../pages/catalogPage/CatalogPage";
import FaqPage from "../pages/other/faqPage/FaqPage";
import VacanciesMore from "../pages/other/jobVacanciesPage/VacanciesMore";
import MyOrdersPages from "../components/UI/profile/myOrders/MyOrdersPages";
import UserProfilePages from "../components/UI/profile/userProfilePages/UserProfilePages";
import UserAccountPages from "../components/UI/profile/userAccountPages/UserAccountPages";


export const authRoutes = [
    {
        path: links.admin,
        element: <Admin/>
    },
    {
        path: links.basket,
        element: <BasketPage/>
    },
    {
        path: links.favorites,
        element: <FavoritesPage/>
    },
]

export const publicRoutes = [
    {
        path: links.base,
        element: <MainPage/>
    },
    {
        path: links.products,
        element: <ProductsPage/>
    },
    {
        path: links.products + '/:product_slug/',
        element: <ProductPage/>
    },
    {
        path: links.categories + '/:category_slug/',
        element: <CategoriesPage/>
    },
    {
        path: links.signIn,
        element: <SignIn/>
    },
    {
        path: links.signUp,
        element: <SignUp/>
    },
    {
        path: links.profile,
        element: <UserAccountPages/>
    },
    {
        path: links.aboutUs,
        element: <AboutPage/>
    },
    {
        path: links.contacts,
        element: <ContactsPage/>
    },
    {
        path: links.delivery,
        element: <DeliveryPage/>
    },
    {
        path: links.jobVacancies,
        element: <JobVacanciesPage/>
    },
    {
        path: links.vacanciesMore,
        element: <VacanciesMore/>
    },
    {
        path: links.myOrders,
        element: <MyOrdersPages/>
    },
    {
        path: links.promotions,
        element: <PromotionsPage/>
    },
    {
        path: links.faqs,
        element: <FaqsPage/>
    },
    {
        path: links.faqs + '/:faq_slug/',
        element: <FaqPage/>
    },
    {
        path: links.catalog,
        element: <CatalogPage/>
    },
    {
        path: links.successfulSignUp,
        element: <SuccessfulSignUp/>
    },
    {
        path: '*',
        element: <Navigate to='/'/>
    },
]