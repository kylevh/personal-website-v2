import localFont from 'next/font/local'

const sanfran = localFont({
    src: [
        {
            path: './fonts/SF_Rg.OTF',
            weight: '300',
            style: 'normal',
        },
        {
            path: './fonts/SF_Md.OTF',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/SF_Bold.OTF',
            weight: '600',
            style: 'normal',
        },
    ],
    display: 'block',
})

export const sf = sanfran;
