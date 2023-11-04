import React from "react";
import AboutItem from "./AboutItem";
import AboutCard from "./AboutCard";
import Title from "./Title";
import JsonContent from "./JsonContent";

function AboutTopic() {
  const jsonData = `{
    "entity":{
        "name":{
            "type":"string",
            "size":"255"
        },
        "age":{
            "type":"int",
            "size":"255"
        },
        "email":{
            "type":"string",
            "size":"255"
        }
    },
    "entityName":"Employee",
    "endPointName":"employee",
    "package":"com.appfusion",
    "modifier":"public",
    "clientID":"test"
}`;
  let about =
    "The Java-based API Generator is a tool designed to streamline the development process, providing pre-built Spring classes with customizable templates. It caters to developers of all levels, offering a simple way to kickstart projects. Key features include custom entity creation, automatic generation of essential classes, flexible customization, support for popular technologies, and increased productivity.";
  return (
    <div className="">
      <Title title={"About"} />
      <div className="flex max-w-6xl mx-6 my-4">
        <AboutItem title={"Concept"} text={about}></AboutItem>
      </div>

      <Title title={"Simple Usage"} />


      <div className=" flex max-w-6xl sm:flex-row flex-col justify-center mx-4">
        <div className="flex flex-col my-10 mx-6">
          <p className="sm:text-2xl text-xl mb-8">
             <span className="text-green-400 sm:text-4xl text-2xl"> Generate </span> Spring Boot classes with a simple and powerful tool that
            generates your entity, repository, and controller already in the
             <span className="text-green-400 sm:text-4xl text-2xl"> RESTful</span> standard
          </p>

          <p className="sm:text-2xl text-xl py-8">
            <span className="text-green-400 sm:text-4xl text-2xl" > Send </span> a simple request and build your <span className="text-green-400 sm:text-4xl text-2xl"> Spring Class </span> 
          </p>
        </div>
        <div className="max-w-4xl justify-center">
          <JsonContent jsonCode={jsonData}></JsonContent>
        </div>
      </div>

      <Title title={"Key Features"} />

      <div className="sm:grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 max-w-7xl mx-auto py-4">
        <AboutCard
          text={
            "Define your entities with custom fields, data types, sizes, and more, all through a simple request."
          }
          title={"Custom Entity Creation"}
          imageSrc={"/pencil.png"}
        ></AboutCard>
        <AboutCard
          text={
            "Automatic Generation of Controller, Repository, and Entity: Based on the provided specifications, the API Generator automatically creates the necessary classes, saving hours of manual coding."
          }
          title={"Automatic Generation"}
          imageSrc={"/settings.png"}
        ></AboutCard>
        <AboutCard
          text={
            "Choose the entity name, endpoint name, package, modifier, and more, ensuring that the generated code adapts to your specific needs."
          }
          title={"Flexible Customization"}
          imageSrc={"/provision.png"}
        ></AboutCard>
        <AboutCard
          text={
            "Our project is built using Java, Spring Boot, Maven, PostgreSQL, Lombok, and integration with Swagger, so you can focus on what really matters: developing amazing features for your APIs."
          }
          title={"Popular Technologies"}
          imageSrc={"/data.png"}
        ></AboutCard>
        <AboutCard
          text={
            "With the API Generator, you can accelerate API development and reduce human errors, allowing your team to focus on creating value for your customers."
          }
          title={"Boost Productivity"}
          imageSrc={"/shuttle.png"}
        ></AboutCard>
        <AboutCard
          text={
            "With this tool you can save time and money when developing entities. Focusing on what really matters: business rules."
          }
          title={"Save your money"}
          imageSrc={"/money.png"}
        ></AboutCard>
      </div>
    </div>
  );
}

export default AboutTopic;
