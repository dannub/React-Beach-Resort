import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa"

export default class Services extends Component {
    state={
        service:[
            {
                icon:<FaCocktail></FaCocktail>,
                title:"free cocktails",
                info:"Ut id id deserunt cillum irure sint minim aute cillum voluptate amet enim amet."

            },
            {
                icon:<FaHiking></FaHiking>,
                title:"Endless Hiking",
                info:"Ut id id deserunt cillum irure sint minim aute cillum voluptate amet enim amet."

            },
            {
                icon:<FaShuttleVan></FaShuttleVan>,
                title:"Free shuttle",
                info:"Ut id id deserunt cillum irure sint minim aute cillum voluptate amet enim amet."

            },
            {
                icon:<FaBeer></FaBeer>,
                title:"Strongest Bear",
                info:"Ut id id deserunt cillum irure sint minim aute cillum voluptate amet enim amet."
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"></Title>
                <div className="services-center">
                   {this.state.service.map((item,index) =>{
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                   })} 
                </div>
            </section>
        )
    }
}
