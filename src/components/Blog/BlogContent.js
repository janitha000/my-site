import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './BlogContent.css'

import Blog from './Blog'


const BlogContent = () => {
    const [blogData, setBlogData] = useState([])
    const [isNewPage, setIsNewPage] = useState(false);
    let location = useLocation();

    useEffect(() => {
        setIsNewPage(location.pathname === '/articles')
        let blogData = getData();
        setBlogData((isNewPage) ? blogData : blogData.splice(0, 2));
    }, [location.pathname, isNewPage])

    const getData = () => {
        return ([
            {
                img: "https://miro.medium.com/max/14720/1*5rXejhcKLorK7JiXnQH-tg.jpeg",
                title: "GraphQL — Code First(Resolver-First) using TypeGraphQL and typegoose",
                url: "https://towardsdatascience.com/graphql-code-first-resolver-first-using-typegraphql-and-typegoose-747616223786",
                description: "GraphQL is an open-source query and data manipulation language for APIs created by Facebook back in 2015. Although it is defined by the community as a probable replacement for REST, depending on each API architecture and requirements, some projects might be suitable for GraphQL API while others might be suitable for REST API. But due to its ..."
            },
            {
                img: "https://miro.medium.com/max/1250/1*Sxj5ZpuNE-XklfvAsRWgAQ.jpeg",
                title: "Speech to Text using AWS Transcribe, S3 and Lambda",
                url: "https://towardsdatascience.com/speech-to-text-using-aws-transcribe-s3-and-lambda-a6e88fb3a48e",
                description: "Speech to text is the process of converting audio to text. For computer software and programs, audio files are near impossible to be used for visualization/analysis or to harvest data out of it in a meaningful way. Therefore there is the need of converting these audio files to text before they can be used for analysis and harvest data ..."
            },
            {
                img: "https://miro.medium.com/max/1250/1*mpyrgqwMjfclV2oN1U2VIA.jpeg",
                title: "Creating a Monitoring Application with AWS WebSockets API, Lambda and EventBridge",
                url: "https://janitha000.medium.com/creating-a-monitoring-application-with-aws-websockets-api-lambda-and-eventbridge-bca95b28cdb",
                description: "Assaid in the aim of this article is to create a serverless monitoring application using AWS WebSockets API, Lambda functions and EventBridge. In this simple application we are only going to perform a simple status check for facebook.com ... "
            },
            {
                img: "https://miro.medium.com/max/1250/1*5psZ6f4SPs-bvcawjFrskQ.jpeg",
                title: "Creating React + GraphQL Serverless Web application using AWS Amplify",
                url: "https://towardsdatascience.com/creating-react-graphql-serverless-web-application-using-aws-amplify-40e56f25796b",
                description: "AWS Amplify is a service provided by Amazon Web Services where it gives the ability to create end to end solutions for mobile and web platforms with a more secure and scalable way using AWS services. AWS Amplify was initially launched in November 2018 and since . . ."
            },
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
            },
            {
                img: "https://miro.medium.com/max/875/0*OaDVOjdkCturioO_.png",
                title: "How to build real-time applications using WebSockets with AWS API Gateway and Lambda",
                url: "https://medium.com/free-code-camp/real-time-applications-using-websockets-with-aws-api-gateway-and-lambda-a5bb493e9452",
                description: "Recently AWS has announced the launch of a widely-requested feature: WebSockets for Amazon API Gateway. With WebSockets, we are able to create a two-way communication line which can be used in many scenarios like real-time applications. This brings up the question: what are real-time . . ."
            },
            {
                img: "https://miro.medium.com/max/776/1*TQLsSLXj0jes-GlSShlt6w.png",
                title: "Streaming Real-time data to AWS Elasticsearch using Kinesis Firehose",
                url: "https://medium.com/swlh/streaming-real-time-data-to-aws-elasticsearch-using-kinesis-firehose-74626d0d84f1",
                description: "Elasticsearch is an open-source solution that is used by many companies around the world for analytics. By definition, Elasticsearch is an open-source, RESTful, distributed, indexed search, and analytics solution . . ."
            },
            {
                img: "https://miro.medium.com/max/744/0*UQBKjEff1uIsXH8W",
                title: "Delivering Real-time Streaming Data to Amazon S3 Using Amazon Kinesis Data Firehose",
                url: "https://towardsdatascience.com/delivering-real-time-streaming-data-to-amazon-s3-using-amazon-kinesis-data-firehose-2cda5c4d1efe",
                description: "In this post let us explore what is streaming data and how to use Amazon Kinesis Firehose service to make an application which stores these streaming data to Amazon S3. As a hands-on experience, we will use AWS Management Console to . . ."
            },
            {
                img: "https://miro.medium.com/max/875/1*6GwF_Ln58TJELUbb1n9poA.jpeg",
                title: "Authentication using Amazon Cognito and Node.js",
                url: "https://medium.com/@janitha000/authentication-using-amazon-cognito-and-nodejs-c4485679eed8",
                description: "Amazon Cognito provides authentication, authorization, and user management for your web and mobile apps. This service was earlier used for mobile applications but now used for a variety of web applications as well. It does the same functionality . . ."
            },
            {
                img: "https://miro.medium.com/max/798/1*1Y6B6ZsWXS89RyepvgPj3w.jpeg",
                title: "Loading Data to AWS Elasticsearch with DynamoDB Streams and Lambda",
                url: "https://medium.com/swlh/loading-data-to-aws-elasticsearch-with-dynamodb-streams-and-lambda-77e52b9c797",
                description: "Elasticsearch is an open-source, RESTful, distributed search, and analytics solution that is currently widely used by many companies worldwide. It is a search engine based on Apache Lucene library. Elasticsearch is widely used in text analysis, log analysis, text-based search and many more use cases . . ."
            },
            {
                img: "https://miro.medium.com/max/673/1*glyCFpRjY4l4x8J7BoJAng.png",
                title: "Machine Learning using AWS ML",
                url: "https://medium.com/datadriveninvestor/machine-learning-using-aws-ml-d3986c9386d9",
                description: "Machine learning is an application of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. Amazon Machine Learning (Amazon ML) is a robust, cloud-based service that makes it easy for developers of all skill levels to use machine learning technology . . ."
            },
            {
                img: "https://miro.medium.com/max/3840/0*Lm4AIHRgV-cW5Wpk",
                title: "Machine Learning using Azure - Creating a Sentiment Analyzer",
                url: "https://medium.com/99xtechnology/sentiment-analyzer-in-5-minutes-141077709c02",
                description: "What is a sentiment analyzer? This must be the first question you will be having before reading this article. Sentiment Analysis is “the process of computationally identifying and categorizing opinions expressed in a piece of text, especially in order to determine whether the writer’s attitude towards a particular topic, product . . ."
            },
            {
                img: "https://miro.medium.com/max/875/1*e1t3QEgLQ42xX6ZAp7SpuQ.png",
                title: "Singleton Pattern",
                url: "https://medium.com/99xtechnology/singleton-pattern-47bf15ff2f7f",
                description: "Singleton pattern is the most simplest design pattern in gang of four. It’s main functionality is such that it restricts the initiation of a class to one object. Now why would we need only one object of a class all the time? At first it seems like there are not any scenarios as . . ."
            }
        ])
    }

    return (
        <div class="blogs__items">

            <div className="blogs_blogs">
                {!isNewPage && <div className='blogs_items__title'>
                    <h2>ARTICLES</h2>
                </div>}
                {blogData && blogData.length > 0 &&
                    blogData.map(blog => (
                        <Blog img={blog?.img} title={blog?.title} description={blog?.description} url={blog?.url} />
                    ))
                }


            </div>
            {!isNewPage && <div className="blog__butoon">
                <Link to='/articles'><h3>More Articles</h3></Link>
            </div>}
        </div>
    )
}

export default BlogContent;
