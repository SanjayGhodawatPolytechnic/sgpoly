import React from "react";
import NavLinks from "./NavLinks";
import Outcomes from "../Reusables/Outcomes";

const FyOutcomes = () => {
  let outcomes = {
    PO: [
      {
        heading: "Basic Knowledge",
        desc: "The student will be able to apply the fundamentals of mathematics, science and engineering to come up with solutions for engineering problems encountered",
      },
      {
        heading: "Discipline knowledge",
        desc: "The student will be able to bring up his/her discipline knowledge and apply the same to solve core or applied engineering problems.",
      },
      {
        heading: "Experiments and practice",
        desc: "The student will gain the insight to perform experiments and also practically apply the solutions to problems encountered in engineering context.",
      },
      {
        heading: "Engineering tools",
        desc: "The student will be able to apply the learned engineering tools and technologies to the real situational problems and at the same time be aware of the limitations of their uses.",
      },
      {
        heading: "The Engineer and society",
        desc: "The student will be competent enough to asses different issues like societal, health, safety, legal and cultural, have an insight into the challenges and use his learning to come up with solutions.",
      },
      {
        heading: "Environment and sustainability",
        desc: "The student will have an understanding of the impact of engineering solutions in environmental and societal context and strive for sustainable development.",
      },
      {
        heading: "Ethics",
        desc: "The student will practice engineering profession with an ethical bent of mind and thus be a responsible engineer in the society.",
      },
      {
        heading: "Individual and team work",
        desc: "The student will be able to work effectively either individually or as a team member / leader among multidisciplinary teams.",
      },
      {
        heading: "Communication",
        desc: "The student will have effective oral and written communication skills.",
      },
      {
        heading: "Life-long learning",
        desc: "The student will have an inclination towards life- long learning and engage independently in such life-long learning activities thus keeping himself / herself update with the current practices of technology.",
      },
    ],
    PSO: [
      "The Electrical Engineer will test and maintain Electrical machines and equipments.",
      "The Electrical Engineer will apply knowledge of Electrical Power Systems to solve domain related problems.",
    ],
    PEO: [
      "Engineer will exhibit an ability to apply knowledge of mathematics, sciences and electrical engineering to identify and solve electrical engineering problems.",
      "Engineer will exercise leadership skills and ethical outlook at appropriate levels as per their experience in practices of engineering discipline with societal and environmental concerns.",
      "Engineer will exhibit effective professional communication skills with an inclination towards lifelong learning.",
    ],
  };
  return (
    <Outcomes
      PEO={outcomes.PEO}
      PSO={outcomes.PSO}
      PO={outcomes.PO}
      deptName="First year"
      subMenu={NavLinks}
    />
  );
};

export default FyOutcomes;
