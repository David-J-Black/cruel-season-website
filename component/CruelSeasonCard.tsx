import {CSSProperties} from "react";
import {appColors, stylingVariables} from "@/appStyle";
import {IconInfoCircle} from '@tabler/icons-react';

const style: CSSProperties = {
    padding: stylingVariables.padding,
    borderRadius: stylingVariables.borderRadius,
    display: 'flex',
    flexDirection: 'row',
    gap: stylingVariables.listGap,
    overflow: "hidden",
}

const defaultStyle: CSSProperties = {
    backgroundColor: appColors.cardColor,
    display: 'flex',
    flexDirection: 'column',
    gap: stylingVariables.listGap
}

const infoStyle: CSSProperties = {
    borderWidth: 2,
    borderColor: appColors.primary,
    borderStyle: "solid",
}

export type CruelSeasonProps = {
    children: any,
    type?: 'default' | 'info',
    style?: CSSProperties
}

export default function CruelSeasonCard({children, type='default', ...props}: CruelSeasonProps) {

    function getStyling():CSSProperties {
        let response: CSSProperties = {
            ...style,
        }
        switch (type) {
            case 'default':
                response = {...response, ...defaultStyle};
                break;
            case 'info':
                response = {...response, ...infoStyle};
                break;
        }
        response = {...response, ...props.style};
        return response;
    }

    return (
        <div style={getStyling()}>
            { type === 'info' && (
                <>
                    <IconInfoCircle color={appColors.primary}/>
                    <div>
                        {children}
                    </div>
                </>
            )}
            { type === 'default' && children }
        </div>
    )
}