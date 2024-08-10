'use client'

import {CSSProperties} from "react";

const style: CSSProperties = {
    fontWeight: 'bold',
    fontSize: 20,
}

const normalStyle: CSSProperties = {
    fontSize: 12
}
const titleStyle: CSSProperties = {
    fontSize: 20
}

export type CruelSeasonProps = {
    children: any,
    type?: 'title' | 'h1' | 'h2' | 'normal',
    style?: CSSProperties
}

export default function CruelSeasonText({type = 'normal', ...props}: CruelSeasonProps) {

    // Let us determine what styling we want for our text
    function getStyling():CSSProperties {
        let response: CSSProperties = {
            ...style,
            ...props.style
        }
        switch (type) {
            case 'normal':
                response = {...response, ...normalStyle};
                break;
            case 'title':
                response = {...response, ...titleStyle};
                break;
        }

        return response;
    }

    return (
        <span
            {...props}
            style={getStyling()}
        >
            {props.children}
        </span>
    )
}