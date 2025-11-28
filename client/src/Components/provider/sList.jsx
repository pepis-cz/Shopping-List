import { createContext, useState, useEffect } from 'react'

import FetchHelper from "../../fetch";

export const sListContext = createContext();

function ShoppingListProvider({ children }) {
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
                    data: {cards: [ curr.data.cards ? [...curr.data.cards, result.data] : [result.data] ], list: result.data._id},
                    error: null
                };

            }else{
                return {
                    ...curr,
                    state: "error",
                    error: result.data
                };
            }
        })

        return { ok: result.ok, error: result.ok ? undefined : result.data };
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
                    data: {list: result.data._id}
                }

            }else{
                return {
                    ...curr,
                    state: 'error',
                    data: result.data
                }
            }
        })

        return { ok: result.ok, error: result.ok ? undefined : result.data };
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
                    data: {cards: curr.data.cards.map(item => item.id === dtoIn.id ? result.data : item), list: null}
                }

            }else{
                return {
                    ...curr,
                    state: 'error',
                    data: result.data
                }
            }
        })

        return { ok: result.ok, error: result.ok ? undefined : result.data };
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
                    data: {cards: curr.data.cards.filter(item => item.id != id), list: null}
                }

            }else{
                return {
                    ...curr,
                    state: 'error',
                    data: result.data
                }
            }
        })

        return { ok: result.ok, error: result.ok ? undefined : result.data };
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
                    data: {cards: result.data, list: null}
                }
            }else{
                return {
                    ...curr,
                    state: "error",
                    error: result.data
                };
            }
        })

        return { ok: result.ok, error: result.ok ? undefined : result.data };
    }

    const value = {
        ...shListDto,
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