export default function useFetchAuth(endpoint) {

    return function () {
        return fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((res) => res.json())
    }
}