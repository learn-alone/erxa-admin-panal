import React from "react";
import CustomTabs from "../../components/CustomTabs/CustomTabsErxians.js";
import ReachUs from "../../views/HomeCMS/ReachUs/ReachUs.js";
import TrendingPrograms from "../../views/TrendingPrograms/TrendingPrograms";
import TrendingCountries from "../../views/TrendingCountries/TrendingCountries";
import Viewed from "../../views/Institutions/Viewed.js";
import Applied from "../../views/Institutions/Applied.js";
import ShortListed from "../../views/Institutions/ShortListed.js";



export default function Institution() {
 
  return (
    <div style={{marginTop:"-30px"}}>
      <CustomTabs
            title="Institutions"
            tabs={[
              {
                tabName: "Viewed( 15 )",
                tabContent: (
                    <Viewed />
                )
              },
              {
                tabName: "Applied ( 12 )",
                tabContent: (
                  <Applied />
                )
              },
              {
                tabName: "Short Listed ( 4 )",
                tabContent: (
                  <ShortListed />
                )
              }
            ]}
        />

    </div>
  );
}
