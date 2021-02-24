import React from 'react'
import './Skills.css'

import Skillbox from './Skillbox'

const Skills = () => {
    return (
        <div className="skills">
            <h2 className="skills__title">SKILLS</h2>
            <div className="skill__items">
                <Skillbox title="Bcackend Development"
                    skills={["Node.js", ".Net MVC", "Python", ".Net RESTful APIs", ".Net Core", "REST", "GraphQL", "C#", "JavaScript", "ES6", "ES7", "Serverless",
                        "Lambda", "EC2", "AWS API Gateway", "WSO2 API Gateway"]} />
                <Skillbox title="Frontend Development"
                    skills={["React JS", "Angular", "HTML5", "Redux", "CSS", "Bootstrap"]} />
                <Skillbox title="NoSQL Databases"
                    skills={["MongoDB", "AWS DynamoDB", "mongoose"]} />
                <Skillbox title="Relational Databases"
                    skills={["SQL Server", "MySQL", "PostgreSQL", "AWS RDS", "Entity framework", "Entityframework core"]} />
                <Skillbox title="Graph Databases"
                    skills={["Neo4j"]} />
                <Skillbox title="CI/CD"
                    skills={["Docker", "Kubernetes", "AWS ECR", "Jenkins", "SonarQube", "TeamCity", "AWS Codestar"]} />
                <Skillbox title="Testing frameworks"
                    skills={["Mocha", "Chai", "XUnit", "NUnit", "MS Test", "pytest"]} />
                <Skillbox title="Real time frameworks"
                    skills={["SignalR", "Socket.io", "API Gateway web sockets", "AWS Appsync"]} />
                <Skillbox title="Big data"
                    skills={["AWS Kinesis", "Azure ML", "AWS EMR", "ElasticSearch"]} />
                <Skillbox title="Queue Services"
                    skills={["RabbitMq", "AWS SQS", "Redis"]} />
                <Skillbox title="Miscellaneous"
                    skills={["Git", "Agile", "Jira", "Confluence", "NLog", "Log4js", "pm2", "nginx", "IIS", "Promethues", "Grafana"]} />
            </div>

        </div>
    )
}

export default Skills;



