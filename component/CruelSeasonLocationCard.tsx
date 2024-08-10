'use client'

import CruelSeasonCard from "@/component/CruelSeasonCard";
import {CruelSeasonLocation} from "@/model/CruelSeasonLocation";
import Image from "next/image";
import CruelSeasonText from "@/component/CruelSeasonText";
import {CSSProperties} from "react";
import {stylingVariables} from "@/appStyle";

export type CruelSeasonLocationProps = {
    location: CruelSeasonLocation
}

const style: CSSProperties = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: stylingVariables.listGap
}

export default function CruelSeasonLocationCard({location}: CruelSeasonLocationProps) {

    return (
        <CruelSeasonCard style={style}>
            <div style={style}>
                <CruelSeasonText type={"title"}>
                    {location.title}
                </CruelSeasonText>
                <div style={{display: 'flex', flexDirection: 'row', gap: stylingVariables.listGap}}>
                    <Image src={location.imageUrl} alt={'Image of a location in cruel season'} width={100} height={100}/>
                    <CruelSeasonText>
                        {location.description}
                    </CruelSeasonText>
                </div>
            </div>
        </CruelSeasonCard>
    )
}