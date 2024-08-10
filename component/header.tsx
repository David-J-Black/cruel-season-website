import {CSSProperties} from "react";
import {appColors, stylingVariables} from "@/appStyle";

const containerStyle: CSSProperties = {
    width: '100%',
    background: appColors.primary,
    display: 'flex',
    flexFlow: 'column nowrap',
    padding: stylingVariables.padding,
    color: 'white',
    alignItems: 'flex-start'
}

const contentStyle: CSSProperties = {
    display: 'flex',
    gap: stylingVariables.listGap,
    flexFlow: 'column nowrap',
    alignItems: 'flex-start'
}

const titleStyle: CSSProperties = {
    fontSize: 40,
    fontWeight: 'bold'
}

const subHeadingStyle: CSSProperties = {
    fontSize: 10
}

export default function Header() {
    return (
        <div style={containerStyle}>
            <div style={contentStyle}>

                <span style={titleStyle}>
                    Cruel Season
                </span>
                <span style={subHeadingStyle}>
                    The official website
                </span>
            </div>
        </div>
    )
}