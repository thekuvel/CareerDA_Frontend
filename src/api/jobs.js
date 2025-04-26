let backendURL = import.meta.env.VITE_Backend_URL;

let url = `${backendURL}/jobs`

async function getAllJobsAPI() {
    let res = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type":"application/json"
        }
    })

    let data = await res.json();
    // console.log(data);
    return data

}

async function createJobAPI(payload) {
    let res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
    });
    let data = await res.json();
    console.log(data);
    return data;
}

async function applicationAPI(payload) {
    let res = await fetch(`${url}/apply`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
    });
    let data = await res.json();
    console.log(data);
    return data;
}

async function getOneJobAPI(payload) {
    let res = await fetch(`${url}/one`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
    })

    let data = await res.json();
    // console.log(data);
    return data

}

export {getAllJobsAPI, createJobAPI, applicationAPI, getOneJobAPI}