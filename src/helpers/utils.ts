export const findInString = (string, value) => {
  if (!string || !value) return true

  return string.toLowerCase().includes(value.toLowerCase())
}

export const downloadLink = (link, fileName) => {
  const a = document.createElement('a')
  a.style.display = 'none'
  a.href = link
  a.setAttribute('download', fileName)
  a.setAttribute('target', '_blank')
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

export const replaceInArray = (array, find, replace) => {
  const index = array.indexOf(find)

  if (index !== -1) {
    array[index] = replace
  }

  return array
}

export const sortAlphabetically = (array, keyInObject, ordering = 'asc') => {
  const orderingNumber = ordering === 'asc' ? 1 : -1

  return array.sort((item1, item2) => {
    const value1 = item1[keyInObject]
    const value2 = item2[keyInObject]

    if (value1.match(/[1-9]/g) && !value2.match(/[1-9]/g)) {
      return 1
    }

    if (value1 < value2) {
      return -1 * orderingNumber
    }

    if (value1 > value2) {
      return 1 * orderingNumber
    }

    return 0
  })
}

export const getTranslatedMessage = (error, langPrefix) => {
  const errorTranslated = langPrefix ? langPrefix + '.' + error : error
  if (i18nextTasks.exists(errorTranslated)) {
    return i18nextTasks.t(errorTranslated)
  }

  return error
}

const getErrorMessage = (error, methodName = '', langPrefix = '') => {
  if (!error) {
    return i18nextTasks.t('Something went wrong')
  }

  if (typeof error === 'string') {
    if (
      error === 'Network Error' ||
      error.includes('502 Bad Gateway') ||
      error.includes('<title>Error</title>') ||
      error.includes('<title>500 Internal Server Error</title>')
    ) {
      return i18nextTasks.t('Please check your VPN and internet connection')
    }

    if (error.includes('503 Service Temporarily Unavailable')) {
      return i18nextTasks.t('Maintenance mode, we will back soon')
    }

    if (error === CANCELED_API_BY_USER) {
      return ''
    }

    return getTranslatedMessage(error, langPrefix)
  }

  if (typeof error === 'object') {
    if (error instanceof Error) {
      return `Error in ${methodName}:${breakLine}(${error.name}) - ${error.message}`
    }

    const code = error.code ? `${breakLine} (${error.code})` : null

    if (typeof error.error === 'string') {
      return getErrorMessage(error.error, '', langPrefix) + code
    }

    if (typeof error.error === 'object') {
      const errorsCategorisedByAttribute = Object.values(error.error)
      const errors = [].concat(...errorsCategorisedByAttribute)
      const errorsWithTranslation = errors
        .filter(error => typeof error === 'string')
        .map(error => getTranslatedMessage(error, langPrefix))
      const uniqueErrors = makeUniqueArray(errorsWithTranslation)

      return uniqueErrors.join(breakLine) + code
    }

    if (typeof error.message === 'string') {
      return getErrorMessage(error.message, '', langPrefix)
    }
  }
}

export const toastErrorMessage = (error, methodName = '', langPrefix = '') => {
  const message = getErrorMessage(error, methodName, langPrefix)
  if (!message) return
  if (isDevelopmentOrStage()) {
    console.warn('Error:', error)
    console.warn('MethodName: ', methodName)
    console.warn('Message:', message)
  }
  toastError({ message })
}

export const makeUniqueArray = initialArray => {
  const arrayOfJsons = initialArray.map(value => JSON.stringify(value))

  return initialArray.filter(
    (value, index) => arrayOfJsons.indexOf(JSON.stringify(value)) === index,
  )
}

export const makeUniqueArrayByPropery = (initialArray, property) => {
  const arrayOfProperty = initialArray.map(object => object[property])

  return initialArray.filter((object, index) => arrayOfProperty.indexOf(object[property]) === index)
}

export const isBoolean = variable => typeof variable === 'boolean'

export const isString = variable => typeof variable === 'string'

export const isNumber = variable => typeof variable === 'number'

export const isObject = variable => typeof variable === 'object'

export const isArray = variable => Array.isArray(variable)

export const isUndefined = variable => typeof variable === 'undefined'

export const isObjectEmpty = object => !object || !isObject(object) || !Object.keys(object).length

export const isThereCommonItemsInArrays = (array1, array2) =>
  array1.some(item => array2.includes(item))

export const getLastStateOfFilters = (filterName, defaultValue) => {
  try {
    const jsonFilters = localStorage.getItem(LOCAL_STORAGE_FILTERS_HISTORY)
    const filters = JSON.parse(jsonFilters)
    if (isObjectEmpty(filters) || isUndefined(filters[filterName])) {
      return defaultValue
    }

    return filters[filterName]
  } catch (error) {
    return defaultValue
  }
}

export const saveLastStateOfFilters = (filterName, filterValue) => {
  const jsonFilters = localStorage.getItem(LOCAL_STORAGE_FILTERS_HISTORY)
  const filters = JSON.parse(jsonFilters) || {}
  const newFilters = { ...filters, [filterName]: filterValue }
  localStorage.setItem(LOCAL_STORAGE_FILTERS_HISTORY, JSON.stringify(newFilters))
}

export const shortenString = (string, maxLength, ending = '...') =>
  string.length > maxLength ? `${string.slice(0, maxLength - ending.length)}${ending}` : string

export function debounceMethod(funcx, debounceTime = 500) {
  let timer

  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      funcx.apply(this, args)
    }, debounceTime)
  }
}

export const stopPropagation = e => e.stopPropagation()
