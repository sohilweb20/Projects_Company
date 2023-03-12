import CommunityLogo from "../../../../components/CommunityLogo";
import WebLogo from "../../../../components/Web3Logo";

const Community = () => {
  return (
    <div className="community">
      <div className="container">
        <div className="community-content">
          <div className="community-text">
            <h2>Communities are the lifeblood of society.</h2>
            <p>
              Decentralised communities are going to be the lifeblood of the
              metaverse.
            </p>
            <p>
              Metasky aims to empower influencers, creators and brands to build
              happy, motivated Web3 communities with a strong sense of
              belongingness.
            </p>
          </div>
        </div>
      </div>
      <CommunityLogo />
      <WebLogo />
    </div>
  );
};

export default Community;
