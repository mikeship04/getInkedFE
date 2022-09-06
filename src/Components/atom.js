import {atom} from "recoil"

export const artistState = atom ({
    key: 'artistState',
    default: ''
})

export const userState = atom ({
    key: 'userState',
    default: {
        username: '',
        admin: false
    }
})