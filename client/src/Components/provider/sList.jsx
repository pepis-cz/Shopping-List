import { createContext, useState } from 'react'

import FetchHelper from "../../fetch";

export const sListContext = createContext();

function ShoppingListProvider({ children }) {
    const [serverData, setServerData] = useState(false);
    const user = 'd97bf1427de1ae849b844e5e';
    const [shListDto, setShListDto] = useState({
        state: "ready",
        data: null,
        error: null,
    });

    async function handleCreate(dtoIn) {
        setShListDto((curr) => {
            return {...curr, state: 'pending'}
        });

        const result = await FetchHelper.sList.create(dtoIn);

        setShListDto((curr) => {
            if (result.ok) {
                return {
                    ...curr,
                    state: 'ready',
                    data: result.data, 
                };

            }else{
                return {
                    ...curr,
                    state: "error",
                    error: result.data
                };
            }
        })

        return { 
            ok: result.ok,
            data: result.ok ? result.data : undefined,  
            error: result.ok ? undefined : result.data 
        };
    }

    async function handleGet(dtoIn) {
        setShListDto((curr) => {
            return {...curr, state: 'pending'}
        })

        const result = await FetchHelper.sList.get(dtoIn);

        setShListDto((curr) => {
            if (result.ok) {
                return {
                    ...curr,
                    state: 'ready',
                    data: result.data
                }

            }else{
                return {
                    ...curr,
                    state: 'error',
                    error: result.data
                }
            }
        })

        return { 
            ok: result.ok,
            data: result.ok ? result.data : undefined, 
            error: result.ok ? undefined : result.data };
    }

    async function handleUpdate(dtoIn) {
        setShListDto((curr) => {
            return {...curr, state: 'pending'}
        })

        const result = await FetchHelper.sList.update(dtoIn);

        setShListDto((curr) => {
            if (result.ok) {
                return {
                    ...curr,
                    state: 'ready',
                    data: result.data, 
                }

            }else{
                return {
                    ...curr,
                    state: 'error',
                    error: result.data
                }
            }
        })

        return { 
            ok: result.ok, 
            data: result.ok ? result.data : undefined, 
            error: result.ok ? undefined : result.data
        }
    }

    async function handleDelete(dtoIn) {
        setShListDto((curr) => {
            return {...curr, state: 'pending'}
        })

        const result = await FetchHelper.sList.delete(dtoIn);
        setShListDto((curr) => {
            if (result.ok) {
                return {
                    ...curr,
                    state: 'ready',
                    data: result.data
                }

            }else{
                return {
                    ...curr,
                    state: 'error',
                    error: result.data
                }
            }
        })

        return { 
            ok: result.ok, 
            data: result.ok ? result.data : undefined, 
            error: result.ok ? undefined : result.data 
        };
    }

    async function handleList(dtoIn) {
        setShListDto((curr) => {
            return {...curr, state: 'pending'}
        });

        const result = await FetchHelper.sList.list(dtoIn);
        setShListDto((curr) => {
            if (result.ok) {
                return {
                    ...curr,
                    state: 'ready',
                    cards: result.data,
                    list: null
                }
            }else{
                return {
                    ...curr,
                    state: "error",
                    error: result.data
                };
            }
        })

        return { 
            ok: result.ok, 
            data: result.ok ? result.data : undefined, 
            error: result.ok ? undefined : result.data 
        };
    }

    const value = {
        ...shListDto,
        user,
        serverData,
        setServerData,
        handlerMap: {
            handleCreate,
            handleGet,
            handleUpdate,
            handleDelete,
            handleList
        }
    }

    return (
        <sListContext.Provider value = {value}>
            {children}
        </sListContext.Provider>
    );
}

export default ShoppingListProvider