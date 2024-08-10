import {CSSProperties} from 'react';

// I like to create a big overall stylesheet that will be applied to most of the app

type Styles = {
    [key: string]: CSSProperties;
}

export const appColors = {
    primary: '#356bbb',
    body: '#d4cfec',
    hoverShadow: 'rgba(65,65,65,0.55)',
    cardColor: 'white'
}

export const stylingVariables = {
    padding: 10,
    listGap: 5,
    hoverShadow: `1px 3px 1px ${appColors.hoverShadow}`,
    borderRadius: 10
}

/**
 * This is our website/app's global styling object.
 * Makes it convenient to make big changes fast
 */
const appStyles: Styles = {
    rootBody: { // This should only be used in /app/layout.tsx
        backgroundColor: appColors.body,
        width: '100vw',
        height: '100%',
        display: 'flex',
        flexFlow: 'column nowrap',
        flex: 1,
        padding: 0,
        overflow: 'hidden'
    },
    body: {
        padding: stylingVariables.padding,
        gap: stylingVariables.listGap,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    }
}

export default appStyles;