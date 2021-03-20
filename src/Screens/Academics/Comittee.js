import React from "react";
import Main from "../../ReusableComponents/Main";

const Comittee = () => {
  let ragging = [
    {
      name: "Mr. Giri Virat",
      post: "Principal",
    },
    {
      name: "Mr. Sitaram Dubal",
      post: "Police Inspector",
    },
    {
      name: "Mr. Babar Bal",
      post: "Press Reporter",
    },
    {
      name: "Mrs. R. S. Pujari",
      post: "N.G.O.",
    },
    {
      name: "Mr. M.B. Patil",
      post: "Teaching Faculty",
    },
    {
      name: "Mr. A. R. Paymal",
      post: "Teaching Faculty",
    },
    {
      name: "Mr. S.V. Chavan",
      post: "Teaching Faculty",
    },
    {
      name: "Mr. N. S. Jadhav",
      post: "Teaching Faculty",
    },
    {
      name: "Mr.T. M. Hingamire",
      post: "Teaching Faculty",
    },
    {
      name: "Mrs. A.A. Pawar",
      post: "Rector - Girls Hostel",
    },
    {
      name: "Mr. M.K. Sawant",
      post: "Rector - Boys Hostel",
    },
    {
      name: "Mr. Manik Kolavale",
      post: "Parent",
    },
    {
      name: "Mr. Manik Kolavale",
      post: "Student",
    },
    {
      name: "Miss. Amruta Desai",
      post: "Student",
    },
  ];
  return (
    <Main isSlideShow={true}>
      <br />
      <br />

      <div>
        <div class="card m-2">
          {/* <div class="card-header">Anti Ragging Committee</div> */}
          <div class="card-body">
            <h5 class="card-title">Anti Ragging Committee</h5>
            <p class="card-text">
              The Anti Ragging Committee is constituted for the academic year
              2018-19. The members of the committee are as follows -
            </p>

            <table class="table table-bordered m-2">
              <thead>
                <tr>
                  <th scope="col">Sr no.</th>
                  <th scope="col">Name of the Person</th>
                  <th scope="col">Post</th>
                </tr>
              </thead>
              <tbody>
                {ragging.map((d, i) => (
                  <tr>
                    <th scope="row">{i + 1}</th>
                    <td>{d.name}</td>
                    <td>{d.post}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Comittee;
