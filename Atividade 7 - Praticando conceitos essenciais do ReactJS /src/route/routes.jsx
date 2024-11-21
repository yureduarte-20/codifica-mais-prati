import React from "react";
import SampleCounter from "../pages/SimpleCounter";
import SelectComponent from "../pages/SelectComponent";
import ColorChange from "../pages/ColorChange";
import TodoApp from "../pages/TodoApp";
import Timer from "../pages/Timer";
import ListName from "../pages/ListName";
import RegisterForm from '../pages/RegisterForm'
import RequestApp from "../pages/RequestApp";
import Galery from "../pages/Galery";
import CustomTimer from "../pages/CustomTimer";
import Tabs from "../pages/Tabs";
export const routes = {
    HOME:{
        path:'/',
        element: <SelectComponent /> 
    },
    SIMPLE_COUNTER: {
        path:'simple-counter',
        element: <SampleCounter />
    },
    COLOR_CHANGE: {
        path: '/color-change',
        element: <ColorChange />
    },
    TODO: {
        path:'/todo',
        element: < TodoApp />
    },
    TIMER:{
        path:'/timer',
        element: <Timer />
    },
    LIST_NAME: {
        path:'/list',
        element: <ListName />
    },
    REGISTER_FORM: {
        path: '/register-form',
        element: <RegisterForm />
    },
    POST: {
        path: '/form',
        element: <RequestApp />
    },
    GALERY:{
        path:'/galery',
        element: <Galery />
    },
    CUSTOM_TIMER:{
        path:'/custom-timer',
        element: <CustomTimer />
    },
    TABS:{
        path:'/tabs',
        element: <Tabs />
    },
};