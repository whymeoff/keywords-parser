import { buildApp } from '@modules/web/app.js'
import { getLogger } from '@lib/utils/logger.js'
import dotenv from 'dotenv'

async function init() {
  dotenv.config({ path: '.env' })

  const { PORT } = process.env

  const app = buildApp()

  app.listen(PORT, () => {
    getLogger().info(`Server is started on port ${PORT}`)
  })
}

init().catch((err) => {
  getLogger().error(err, '[GLOBAL ERROR]')
  process.exit(100)
})
