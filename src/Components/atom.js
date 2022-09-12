import {atom} from "recoil"

export const userState = atom ({
    key: 'userState',
    default: {
        username: '',
        admin: false
    }
})

export const artistIdState = atom ({
    key: 'artistIdState',
    artist_id: ''
})

export const artistState = atom ({
    key: 'artistState',
    default: {
        id: '',
        name: '',
        bio: '',
        img_url: '',
        instagram: '',
        twitter: '',
        tiktok: '',
        facebook: '',
        youtube: ''
    }
})

export const prizeState = atom ({
    key: 'prizeState',
    default: {
    closing_date: "",
    description: "",
    full_details: "",
    header: "",
    img_url: ""
    }
})
