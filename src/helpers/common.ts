// @ts-nocheck
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

export const stopPropagation = e => e.stopPropagation()

export function debounceMethodWithAllPromises(funcx, debounceTime = 500) {
  let timer = null
  let resolves = []

  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      const result = funcx(...args)
      resolves.forEach(r => r(result))
      resolves = []
    }, debounceTime)

    /*eslint no-promise-executor-return: "off"*/
    return new Promise(resolve => {
      resolves.push(resolve)
    })
  }
}

export function debounceMethodWithPromise(funcx, debounceTime = 500) {
  let timer = null
  let lastResolvMethod = null

  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      const result = funcx(...args)
      lastResolvMethod(result)
      lastResolvMethod = null
    }, debounceTime)

    /*eslint no-promise-executor-return: "off"*/
    return new Promise(resolve => {
      lastResolvMethod = resolve
    })
  }
}

export function debounceMethod(funcx, debounceTime = 500) {
  let timer

  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      funcx.apply(this, args)
    }, debounceTime)
  }
}
