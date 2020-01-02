import DEV_ENV from './dev.env'
import PROD_ENV from './prod.env'

let ENV = {}
if (process.env.NODE_ENV === "production") {
  ENV = PROD_ENV
} else if (process.env.NODE_ENV === "development") {
  ENV = DEV_ENV
}

export default ENV