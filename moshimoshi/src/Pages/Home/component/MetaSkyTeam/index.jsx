// import { BoysImage } from "../../../../../public/assets/images/BoysImage.jpg";

import BackOrg1 from "../../../../components/BackOrg1";
import BackOrg2 from "../../../../components/BackOrg2";
import MenImage from "../../../../components/MenImage";
// import MiddleAvatar from "../../../../components/MiddleAvatar";

const MetaSkyTeam = () => {
  return (
    <div className="metasky-section">
      <div className="container">
        <div className="image-container">
          <div>
            <div className="metasky-context">
              <h2>The metasky Team</h2>
            </div>
            <div className="metasky-slider-section">
              <ul className="list">
                {[1, 1, 1].map((item) => {
                  return (
                    <li>
                      <div className="list-content">
                        <MenImage className="profile-image" />
                        <h6>Ankit - Arora</h6>
                        <p>co founder</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="image-box">
                <BackOrg2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaSkyTeam;
