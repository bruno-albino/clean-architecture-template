
import server from './main/server/server'
import { PORT, DEV_MODE, MONGODB_URI } from './main/config/constants'
import { MongodbHelper } from 'external/repositories/helpers/mongodb-helper';

MongodbHelper.connect(MONGODB_URI)
.then(() => {
  server.start(() => {
    console.log(`API listening on PORT: ${PORT} in ${DEV_MODE ? 'development' : 'production'}`)
  });
})
.catch(err => {
  console.error(err)
  process.exit(1)
})
