let backendURL = import.meta.env.VITE_Backend_URL;

let url = `${backendURL}/users`;

async function getUserAPI(payload) {
    console.log(payload);
    
    let res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
    })
    let data = await res.json();
    return data
}

async function getMyDeskAPI(payload) {
    console.log(payload);
    
    let res = await fetch(`${url}/mydesk`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
    })
    let data = await res.json();
    return data
}

export {getUserAPI, getMyDeskAPI}