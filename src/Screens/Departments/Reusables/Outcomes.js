import React from 'react';
import Main from '../../../ReusableComponents/Main';
import './CSS/Outcomes.css';
import DeptMenu from '../Reusables/DeptMenu';


const Outcomes = ({
    PEO = [],
    PO = [],
    PSO = [],
    deptName = '',
    subMenu = []
}) => {
    return (
        <Main className="container-lg">
            <div class="row">
                <DeptMenu dept='Computer Science' subMenu={subMenu} />
                <div class="col-sm-8 col-lg-9">
                    <div data-spy="scroll" class="scrollspy-example z-depth-1 mt-4" data-target="#navbar-example3"
                    data-offset="0">
                        <div className="row">
                            <div className="col-12 text-center"><h3>Program Educational Objectives (PEOs)</h3></div>
                            <div className="col-12 text-center">
                                <div class="list-group peos">
                                    {PEO.map((val,idx) => (
                                        <span class="list-group-item list-group-item-action">{val}</span>    
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center"><h3>Program Outcome (POs)</h3></div>
                            <div className="col-12 text-center">
                                <div class="list-group">
                                    {PO.map((val,idx) => (
                                        <span class="list-group-item list-group-item-action"><b>{val.heading + ':'}</b>{val.desc}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center"><h3>Program Specific Outcomes (PSOs)</h3></div>
                            <div className="col-12 text-center">
                                <div class="list-group">
                                    {PSO.map((val,idx) => (
                                        <span class="list-group-item list-group-item-action">{val}</span>
                                    ))}
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
