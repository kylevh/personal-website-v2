import localFont from 'next/font/local'

const sanfran = localFont({
    src: [
        {
            path: './fonts/sf_REGULAR.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: './fonts/sf_MEDIUM.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/sf_BOLD.otf',
            weight: '600',
            style: 'normal',
        },
    ],
    display: 'block',
})

export const sf = sanfran;
