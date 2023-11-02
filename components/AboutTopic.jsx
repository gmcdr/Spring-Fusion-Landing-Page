import React from "react";
import AboutItem from "./AboutItem";
import AboutCard from "./AboutCard";
import Title from "./Title";

function AboutTopic() {
  let about =
    "The Java-based API Generator is a tool designed to streamline the development process, providing pre-built Spring classes with customizable templates. It caters to developers of all levels, offering a simple way to kickstart projects. Key features include custom entity creation, automatic generation of essential classes, flexible customization, support for popular technologies, and increased productivity.";
  return (
    <div className="">
      <Title title={'About'}/>
      <div className="flex max-w-6xl mx-4 my-4">
        <AboutItem
          
          title={"Concept"}
          text={
            about
          }
        ></AboutItem>
      </div>

      <Title title={'Key Features'}/>
      
      <div>

      </div>
      <div className="sm:grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 max-w-7xl mx-auto py-4">
        <AboutCard text={'Define your entities with custom fields, data types, sizes, and more, all through a simple request.'} title={'Custom Entity Creation'} imageSrc={"/pencil.png"}></AboutCard>
        <AboutCard text={'Automatic Generation of Controller, Repository, and Entity: Based on the provided specifications, the API Generator automatically creates the necessary classes, saving hours of manual coding.'} title={'Automatic Generation'} imageSrc={"/settings.png"}></AboutCard>
        <AboutCard text={'Choose the entity name, endpoint name, package, modifier, and more, ensuring that the generated code adapts to your specific needs.'} title={'Flexible Customization'} imageSrc={"/provision.png"}></AboutCard>
        <AboutCard text={'Our project is built using Java, Spring Boot, Maven, PostgreSQL, Lombok, and integration with Swagger, so you can focus on what really matters: developing amazing features for your APIs.'} title={'Popular Technologies'} imageSrc={"/data.png"}></AboutCard>
        <AboutCard text={'With the API Generator, you can accelerate API development and reduce human errors, allowing your team to focus on creating value for your customers.'} title={'Boost Productivity'} imageSrc={"/shuttle.png"}></AboutCard>
        <AboutCard text={'With this tool you can save time and money when developing entities. Focusing on what really matters: business rules.'} title={'Save your money'} imageSrc={"/money.png"}></AboutCard>
      </div>
    </div>
  );
}

export default AboutTopic;
