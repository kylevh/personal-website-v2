import localFont from 'next/font/local'

const sanfran = localFont({
    src: [
        {
            path: './fonts/SF_Rg.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: './fonts/SF_Md.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/SF_Bold.otf',
            weight: '600',
            style: 'normal',
        },
    ],
    variable: '--font-sf',
    display: 'block',
})

export const sf = sanfran;
