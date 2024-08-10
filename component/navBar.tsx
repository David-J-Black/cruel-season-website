import {CSSProperties} from "react";
import {appColors, stylingVariables} from "@/appStyle";
import CruelSeasonLink from "@/component/CruelSeasonLink";

const style: CSSProperties = {
    width: '100%',
    background: appColors.primary,
    color: 'white',
    display: 'flex',
    flexFlow: 'row nowrap',
    padding: stylingVariables.padding,
    gap: 20,
    justifyContent: 'flex-start'
}
export default function NavBar() {

    return (
        <div style={style}>
            <CruelSeasonLink href={'/'}>
                Home
            </CruelSeasonLink>
            <CruelSeasonLink href={'/characters'}>
                Characters
            </CruelSeasonLink>
            <CruelSeasonLink href={'/locations'}>
                Locations
            </CruelSeasonLink>
            <CruelSeasonLink href={'/blog'}>
                Blog
            </CruelSeasonLink>
        </div>
    )
}