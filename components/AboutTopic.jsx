import React from "react";
import AboutItem from "./AboutItem";

function AboutTopic() {
  return (
    <div>
      <div className="flex justify-center my-16">
        <h1 className="text-3xl">About</h1>
      </div>
      <div className="flex max-w-4xl mx-4 my-4">
        <AboutItem
          title={"Idea"}
          text={
            "This Java-based API allows you to easily generate Spring classes with pre-built templates, making it simple to kickstart your development process. Whether you're a beginner or an experienced developer, this tool will save your time and effort in setting up a new project."
          }
        ></AboutItem>
      </div>
    </div>
  );
}

export default AboutTopic;
