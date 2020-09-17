import React, { useEffect, useState } from 'react'
import './Blogs.css'

import Blog from './Blog'

const Blogs = () => {
    const [blogData, setBlogData] = useState([])

    useEffect(() => {
        setBlogData(getData());
    }, [])

    const getData = () => {
        return ([

            {
                img: "https://miro.medium.com/max/875/1*WhR0GNM_wrfEawQ4HfU2ZQ.jpeg",
                title: "Kubernetes Introduction for Beginners",
                url: "https://codeburst.io/guideline-to-kubernetes-904de40f6aec",
                description: "With the introduction of containers, software application deployment quickly adopted containers for deployments due to its vast advantages over conventional deployments on servers or on virtual machines. Not only that but almost all of the cloud providers also have full support for container deployments which makes it very easy for developers around the world. Now, with this new container, deployments became another problem for developers as they worked to figure out how to manage these containers on a large scale . . ."
            },
            {
                img: "https://miro.medium.com/max/1250/1*BxCB5Mo5vgIGzbVS5aD1Jw.jpeg",
                title: "How to Create a GraphQL API using AWS AppSync",
                url: "https://towardsdatascience.com/how-to-create-a-graphql-api-using-aws-appsync-49fed1171780",
                description: "Nowadays whenever we talk or think about creating/designing an API what pops to the mind at first is REST. REST(REpresentational State Transfer) has been the go-to standard until recently when developing an API platform. Even though REST became the standard, it did have its own disadvantages. One of the main disadvantages is the inflexibility for the clients who are going to consume them . . ."
            },
            {
                img: "https://miro.medium.com/max/875/1*6oeKSYnPG2pbg8vdaiteYg.png",
                title: "Exploring React Context API with React Hooks",
                url: "https://medium.com/swlh/exploring-react-context-api-with-react-hooks-67b73eb36af0",
                description: "React has come a long way since it has been initially released on 29, May 2013 and now it has been one of the top javascript libraries for front end development. Today I am going to talk about React Context API and how to use React Hooks with it . . ."
            },
            {
                img: "https://miro.medium.com/max/875/1*WhR0GNM_wrfEawQ4HfU2ZQ.jpeg",
                title: "Kubernetes Application Deployment with AWS EKS and ECR",
                url: "https://towardsdatascience.com/kubernetes-application-deployment-with-aws-eks-and-ecr-4600e11b2d3c",
                description: "Kubernetes is a container orchestration platform that is created by Google in 2014. It is an open-source platform where currently many organizations widely use for container deployment and management. Although there are other container orchestration tools are available in the community like Docker Swarm, Kubernetes remains . . ."
            },
            {
                img: "https://miro.medium.com/max/875/1*0HvJ7oQ21H4D79n1QT188A.jpeg",
                title: "Message Queuing with RabbitMQ",
                url: "https://levelup.gitconnected.com/message-queuing-with-rabbitmq-7e4682146e39",
                description: "abbitMQ is an open-source message-broker software that originally implemented the Advanced Message Queuing Protocol(AMQP). As mentioned in their official website RabbitMQ is the most widely deployed open-source message broker . . ."
            }
        ])
    }


    return (
        <div className="blogs">
            <header className="blogs__banner"
                style={{
                    objectFit: "contain",
                    backgroundSize: "cover",
                    backgroundImage: `url('https://res.cloudinary.com/practicaldev/image/fetch/s--qzgkHGNK--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/utmultq439po374vr7a7.jpg')`,
                    height: '300px'
                }}>

                {/* <img src= alt='banner__log' /> */}

                <div className="blog__content">
                    {/* <h1 className="blog__name">ARTICLES</h1> */}


                </div>
            </header>
            <div class="blogs__items">

                <div className="blogs_blogs">
                    {blogData && blogData.length > 0 &&
                        blogData.map(blog => (
                            <Blog img={blog?.img} title={blog?.title} description={blog?.description} url={blog?.url} />
                        ))
                    }

                </div>
            </div>

        </div>
    )


}

export default Blogs;