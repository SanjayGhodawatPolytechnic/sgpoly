import React from 'react';
import Main from '../../../ReusableComponents/Main';
import './CSS/Outcomes.css';
import DeptMenu from '../Reusables/DeptMenu';
import NavLinks from './NavLinks';

const Outcomes = () => {
    return (
        <Main>
            <div class="row">
                <DeptMenu dept='Computer Science' subMenu={NavLinks} />
                <div class="col-sm-8 col-lg-9">
                    <div data-spy="scroll" class="scrollspy-example z-depth-1 mt-4" data-target="#navbar-example3"
                    data-offset="0">
                        <div className="row">
                            <div className="col-12 text-center"><h3>Program Educational Objectives (PEOs)</h3></div>
                            <div className="col-12 text-center">
                                <div class="list-group peos">
                                    <span class="list-group-item list-group-item-action peos">PEO-2: Engineer will work as an individual or a team member with effective communication exhibiting ethical values having environmental concern.</span>
                                    <span class="list-group-item list-group-item-action peos">PEO-1: Engineer will apply knowledge of basic mathematics, science and discipline to design and develop systems in multi-disciplinary environments.</span>
                                    <span class="list-group-item list-group-item-action peos">PEO-3: Engineer will engage in lifelong learning, career enhancement and adopt changes as per professional and societal needs</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center"><h3>Program Outcome (POs)</h3></div>
                            <div className="col-12 text-center">
                                <div class="list-group peos">
                                    <span class="list-group-item list-group-item-action peos">PO-1: Basic Knowledge : The student will be able to apply the fundamentals of mathematics, science and engineering to come up with solutions for engineering problems encountered</span>
                                    <span class="list-group-item list-group-item-action peos">PO-2: Discipline knowledge : The student will be able to bring up his/her discipline knowledge and apply the same to solve core or applied engineering problems</span>
                                    <span class="list-group-item list-group-item-action peos">PO-3: Experiments and practice : The student will gain the insight to perform experiments and also practically apply the solutions to problems encountered in engineering context</span>
                                    <span class="list-group-item list-group-item-action peos">PO-4: Engineering tools : The student will be able to apply the learned engineering tools and technologies to the real situational problems and at the same time be aware of the limitations of their uses.</span>
                                    <span class="list-group-item list-group-item-action peos">PO-5: The engineer and society : The student will be competent enough to asses different issues like societal, health, safety, legal and cultural, have an insight into the challenges and use his learning to come up with solutions.</span>
                                    <span class="list-group-item list-group-item-action peos">PO-6: Environment and sustainability : The student will have an understanding of the impact of engineering solutions in environmental and societal context and strive for sustainable development.</span>
                                    <span class="list-group-item list-group-item-action peos">PO-7: Ethics : The student will practice engineering profession with an ethical bent of mind and thus be a responsible engineer in the society.</span>
                                    <span class="list-group-item list-group-item-action peos">PO-8: Individual and team work : The student will be able to work effectively either individually or as a team member / leader among multidisciplinary teams.</span>
                                    <span class="list-group-item list-group-item-action peos">PO-9: Communication : The student will have effective oral and written communication skills.</span>
                                    <span class="list-group-item list-group-item-action peos">PO-10: Life-long learning : The student will have an inclination towards life- long learning and engage independently in such life-long learning activities thus keeping himself / herself update with the current practices of technology.</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center"><h3>Program Specific Outcomes (PSOs)</h3></div>
                            <div className="col-12 text-center">
                                <div class="list-group peos">
                                    <span class="list-group-item list-group-item-action peos">PSO 1: Software Domain : The Computer Engineer will able to provide specific solutions to problems in software domain with use of engineering tools and technology</span>
                                    <span class="list-group-item list-group-item-action peos">PSO 2: Computer Hardware and Networking : The Computer Engineer will apply knowledge, techniques and professional skills for real time operation and maintenance of computer hardware and networking.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
}

export default Outcomes;
