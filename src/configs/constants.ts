export const PENDING_STATUS = 'pending'
export const SUCCESS_STATUS = 'success'
export const FAILED_STATUS = 'failed'
export const QUEUED_STATUS = 'queued'
export const FINISHED_STATUS = 'finished'
export const NO_RESULTS_STATUS = 'no-results'

export const ENV_DEVELOPMENT = 'development'
export const ENV_STAGE = 'testing'
export const ENV_PRODUCTION = 'production'
export const ENV_DEMO = 'demo'
export const ENV_SALES = 'sales'
export const breakLine = '\r\n'
export const UNAUTHORIZED_RESPONSE_STATUS_CODE = 401
export const CANCELED_API_BY_USER = 'canceled'

export const LOCAL_STORAGE_FILTERS_HISTORY = 'filters_history'
export const LS_SETTINGS_CURRENT_SECTION = 'settingsCurrentSection'

export const VALIDATION_REGEXPS = {
  phones: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]{6,16}$/g,
  email: /^(\S+@\S+\.\S+)$/gm,
  first_name: /^([\u00C0-\u017Fa-zA-Z']+)/g,
  name_with_space: /^([\u00C0-\u017Fa-zA-Z.\-\s']+)$/g,
  last_name: /^([\u00C0-\u017Fa-zA-Z']+)/g,
  hasNoSpace: /^\S+$/,
}
