import React from "react";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import DataArrayIcon from "@mui/icons-material/DataArray";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SaveIcon from "@mui/icons-material/Save";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AddCardIcon from '@mui/icons-material/AddCard';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import CategoryIcon from '@mui/icons-material/Category';

export const _ICONBODY = (
  <div>
    <div className="iconMain">
      <div>
        <AccessibilityNewIcon
          style={{ height: 150, width: 90, color: "darkred" }}
        />
        <h3 className="iconH3">24 hours operations</h3>
      </div>
      <div>
        <DataArrayIcon style={{ height: 150, width: 90, color: "darkred" }} />
        <h3 className="iconH3">Online Data storage</h3>
      </div>
      <div>
        <StorefrontIcon style={{ height: 150, width: 90, color: "darkred" }} />
        <h3 className="iconH3">Customized store front</h3>
      </div>
      <div>
        <GroupAddIcon style={{ height: 150, width: 90, color: "darkred" }} />
        <h3 className="iconH3">Over 300 Registered Employee's</h3>
      </div>
    </div>
  </div>
);

export const _MARKETPLACE = (
  <div className="marketPlace">
    <div>
      <h1 className="marketPlaceH1">With over 2,000 Registered Businesses</h1>
      <p className="marketPlaceP">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  </div>
);

export const _SERVICES = (
  <div className="services">
    <h1 className="servicesH1">What We Do</h1>
    <div className="servicesInner">
      <div>
        <SaveIcon style={{ height: 150, width: 90, color: "darkred" }}/>
        <h3 className="serviceH3">Never worry about Data Loss Again</h3>
        <p className="servicesP">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div>
        <VerifiedUserIcon style={{ height: 150, width: 90, color: "darkred" }}/>
        <h3 className="serviceH3">Internal Audit on the Go</h3>
        <p className="servicesP">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div>
        <StorefrontIcon style={{ height: 150, width: 90, color: "darkred" }}/>
        <h3 className="serviceH3">Shop from any where in the world</h3>
        <p className="servicesP">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <div className="servicesInner">
      <div>
        <AddCardIcon style={{ height: 150, width: 90, color: "darkred" }}/>
        <h3 className="serviceH3">Automated Accounting</h3>
        <p className="servicesP">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div>
        <VpnKeyIcon style={{ height: 150, width: 90, color: "darkred" }}/>
        <h3 className="serviceH3">Two Factor Authentication</h3>
        <p className="servicesP">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div>
        <CategoryIcon style={{ height: 150, width: 90, color: "darkred" }}/>
        <h3 className="serviceH3">Product Branding</h3>
        <p className="servicesP">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  </div>
);
