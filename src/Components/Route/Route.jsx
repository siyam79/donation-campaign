import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import DonaTion from "../DonaTion/DonaTion";
import Statistics from "../Statistics/Statistics";
// import CardItem from "../CardItem/CardItem";
// import ErrorElement from "../ErrorElement/ErrorElement";
import OneCard from "./OneCard/OneCard";


const myRoute =  createBrowserRouter([
        {
            path : '/',
            element : <MainLayout></MainLayout>,
            // errorElement:<ErrorElement></ErrorElement>,
            children : [
                {
                    path : '/',
                    element : <Home></Home>,
                    loader :()=>fetch('data.json')
                    
                },
                {
                    path :'/donation',
                    element : <DonaTion></DonaTion>
                },
                {
                    path : '/statistics',
                    element : <Statistics></Statistics>

                },
                {
                  path :'/cards/:id',
                  element : <OneCard></OneCard>,
                    loader : ()=>fetch(`/data.json`),
                },
            ]
        },
])

export default myRoute;