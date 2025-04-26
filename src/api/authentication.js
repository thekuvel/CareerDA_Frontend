
let backendURL = import.meta.env.VITE_Backend_URL;

let url = `${backendURL}/authentication`

async function signUpAPI(payload){
    let res = await fetch(`${url}/signup`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(payload),
    });
    let data = await res.json();
    console.log(data);
    return data    
};

async function signInAPI(payload){
    let res = await fetch(`${url}/signin`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(payload),
    });
    let data = await res.json();
    console.log(data);
    return data    
};

export {signUpAPI, signInAPI}