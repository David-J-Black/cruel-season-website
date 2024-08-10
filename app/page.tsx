'use client'

import appStyles from "@/appStyle";
import CruelSeasonCard from "@/component/CruelSeasonCard";


export default function Home() {

  return (
      <div style={appStyles.body}>
          <CruelSeasonCard>
            Main page
          </CruelSeasonCard>
      </div>
  );
}
