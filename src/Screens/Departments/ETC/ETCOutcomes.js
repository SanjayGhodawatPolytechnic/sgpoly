import React from 'react';
import NavLinks from './NavLinks';
import Outcomes from '../Reusables/Outcomes';

const ETCOutcomes = () => {
    let outcomes = {
        PO: [
            {heading: "Basic Knowledge", desc: "Apply the knowledge of basic mathematics, science & engineering for solving the Electronics & Telecommunication Engineering problems."},
            {heading: "Discipline knowledge", desc: "Use knowledge to solve core and allied Engineering problems in the field of Electronics & Telecommunication Engineering"},
            {heading: "Experiments and practice", desc: "Solve the Engineering problems by performing experiments, practices & the results drawn which will help in the design of systems, circuits or processes to meet the specified needs."},
            {heading: "Engineering tools", desc: "Apply relevant concepts of electronics & telecommunication engineering technologies & tools with an understanding of the limitations"},
            {heading: "The Engineer and society", desc: "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues & their consequent responsibilities relevant to the professional engineering practice."},
            {heading: "Environment and sustainability", desc: "An ability to understand current issues related to social & environmental context for sustainable development of engineering solutions."},
            {heading: "Ethics", desc: "Develop awareness of professional, ethical and social responsibilities as experts in the field of Electronics and Telecommunication Engineering."},
            {heading: "Individual and team work", desc: "Realize the engineering management principles and function effectively as an individual and member or leader in diverse and multidisciplinary teams."},
            {heading: "Communication", desc: "Build ability and skills to communicate efficiently with oral and written form"},
            {heading: "Life-long learning", desc: "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the continuous technological change."}
        ],
        PSO: [
            "Engineer will be able to apply knowledge of Analog & Digital systems to provide solutions to multi-disciplinary problems.",
            "Engineer will be able to implement hardware and software co-designs for signal processing and communication applications."
        ],
        PEO: [
            "Engineer will attain excellence in the profession by applying basic and disciplinary knowledge to provide solutions for the societal challenges.",
            "Engineer will work in multi-disciplinary fields of engineering with concern towards environmental issues.",
            "Engineer will exhibit effective communication skills, a strong team spirit and inclination towards lifelong learning with ethical values."
        ]

    }
    return (
        <Outcomes PEO={outcomes.PEO} PSO={outcomes.PSO} PO={outcomes.PO} deptName="E &amp; TC" subMenu={NavLinks} />
    );
}

export default ETCOutcomes;
