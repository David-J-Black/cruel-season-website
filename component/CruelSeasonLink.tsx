'use client'

import Link, {LinkProps} from "next/link";
import {CSSProperties, useState} from "react";

const style: CSSProperties = {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
}

// You can see here i'm being a bit fucking weird with the styling... trying out things. I'm new to this...
export default function CruelSeasonLink({children, ...props}: LinkProps) {
    const [hovering, setHovering] = useState<boolean>(false);
    return (
        <Link
            {...props}
            style={style}
        >
            {children}
        </Link>
    )
}