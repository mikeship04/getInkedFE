import {atom} from "recoil"

export const userState = atom ({
    key: 'userState',
    default: {
        username: '',
        admin: false
    }
})

export const artistState = atom ({
    key: 'artistState',
    default: ''
})
