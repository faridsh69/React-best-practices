import { getLocalstorage, removeLocalsotrage, setLocalsotrage } from 'src/helpers/common'
import { LOCAL_STORAGE_ACCESS_TOKEN_KEY } from 'src/configs/constants'

export const getToken = () => getLocalstorage(LOCAL_STORAGE_ACCESS_TOKEN_KEY)

export const setToken = token => setLocalsotrage(LOCAL_STORAGE_ACCESS_TOKEN_KEY, token)

export const removeToken = () => removeLocalsotrage(LOCAL_STORAGE_ACCESS_TOKEN_KEY)
