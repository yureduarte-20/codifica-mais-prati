import React from "react";
import SampleCounter from "../pages/SimpleCounter";
import SelectComponent from "../pages/SelectComponent";
import ColorChange from "../pages/ColorChange";
import TodoApp from "../pages/TodoApp";
import Timer from "../pages/Timer";
import ListName from "../pages/ListName";
import RegisterForm from "../pages/RegisterForm";
import RequestApp from "../pages/RequestApp";
export const routes = {
    HOME: {
        path: '/',
        element: <SelectComponent />
    },
    SIMPLE_COUNTER: {
        path: 'simple-counter',
        element: <SampleCounter />
    },
    COLOR_CHANGE: {
        path: '/color-change',
        element: <ColorChange />
    },
    TODO: {
        path: '/todo',
        element: < TodoApp />
    },
    TIMER: {
        path: '/timer',
        element: <Timer />
    },
    LIST_NAME: {
        path: '/names',
        element: <ListName />
    },
    REGISTER_FORM: {
        path: '/register-form',
        element: <RegisterForm />
    },
    POST: {
        path: '/post',
        element: <RequestApp />
    }
};