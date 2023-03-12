// import { BoysImage } from "../../../../../public/assets/images/BoysImage.jpg";

import MenImage from "../../../../components/MenImage";

const MetaSkyTeam = () => {
  return (
    <div className="metasky">
      <div className="container">
        <div className="metasky-context">
          <h2>The metasky Team</h2>
        </div>
        <div className="avatar-square">
          <div>
            <MenImage />
            <h6>Ankit - Arora</h6>
            <p>co founder</p>
          </div>
          <div>
            <MenImage />

            <h6>Ankit - Arora</h6>

            <p>co founder</p>
          </div>
          <div>
            <MenImage />

            <h6>Ankit - Arora</h6>

            <p>co founder</p>
          </div>
          {/* <div>
            <img
              src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png"
              alt="BOYS"
            />
            <h6>Ankit - Arora</h6>

            <p>co founder</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MetaSkyTeam;
