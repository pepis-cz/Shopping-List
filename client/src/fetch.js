const baseUri = 'http://localhost:8888'

async function Call (baseUri, useCase, dtoIn, method) {
    let response;
    if (!method || method === "get") {
        response = await fetch(
            `${baseUri}/${useCase}${dtoIn && Object.keys(dtoIn).length ? `?${new URLSearchParams(dtoIn)}` : "" }`
        );

    } else if (method === "post") {
        response = await fetch(`${baseUri}/${useCase}`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dtoIn)
        });

    } else if (method === "put") {
        response = await fetch(`${baseUri}/${useCase}`, {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dtoIn)
        });

    } else if (method === "delete") {
        response = await fetch(`${baseUri}/${useCase}`, {
            method: "delete",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dtoIn)
        });
    }

    const data = await response.json();
    return { ok: response.ok, status: response.status, data: data };
}

const FetchHelper = {
    user: {
        create: async (dtoIn) => {
            return await Call(baseUri, 'user/create', dtoIn, 'post');
        },
        get: async (dtoIn) => {
            return await Call(baseUri, 'user/get', dtoIn, 'get');
        },
        uName: async (dtoIn) => {
            return await Call(baseUri, 'user/updName', dtoIn, 'put');
        },
        uPass: async (dtoIn) => {
            return await Call(baseUri, 'user/updPass', dtoIn, 'put');
        },
        uEmail: async (dtoIn) => {
            return await Call(baseUri, 'user/updEmail', dtoIn, 'put');
        }

    },
    sList: {
        create: async (dtoIn) => {
            return await Call(baseUri, 'sList/create', dtoIn, 'post');
        },
        get: async (dtoIn) => {
            return await Call(baseUri, 'sList/get', dtoIn, 'get');
        },
        update: async (dtoIn) => {
            return await Call(baseUri, 'sList/update', dtoIn, 'put');
        },
        delete: async (dtoIn) => {
            return await Call(baseUri, 'sList/delete', dtoIn, 'delete');
        },
        list: async (dtoIn) => {
            return await Call(baseUri, 'sList/list', dtoIn, 'get');
        }
    }
}

export default FetchHelper