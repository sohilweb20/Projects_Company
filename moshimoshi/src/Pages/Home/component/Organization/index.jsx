import React from "react";
import Triangle from "../../../../components/Triangle";

const Organization = () => {
  return (
    <div>
      <div className="organization-content">
        <h2>Organization Structure</h2>
        <div className="organization-border-ciecles">
          <div>
            <p className="headings-boxes">You -You You-You</p>

            <div className="inside-boxes">
              <div className="inside-boxes1">
                <Triangle />
              </div>
              <div className="inside-boxes2">
                <span>60%</span>
              </div>
            </div>
            <p className="investors">Community</p>
          </div>

          <div>
            <p className="investor">INVESTORS</p>

            <div className="inside-boxes">
              <div className="inside-boxes1">
                <Triangle />
              </div>
              <div className="inside-boxes3">
                <span>20%</span>
              </div>
            </div>
            <p>SEQUOIA + WOODSTOCK </p>
          </div>

          <div>
            <p>
              <p className="headings-boxes">Team - Contribitors</p>
            </p>
            <div className="inside-boxes">
              <div className="inside-boxes1">
                <Triangle />
              </div>
              <div className="inside-boxes3">
                <span>20%</span>
              </div>
            </div>
            <p className="investors">Core Team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organization;
