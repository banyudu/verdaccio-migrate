import axios from 'axios'
import npmMigrateAll from 'npm-migrate-all'

const verdaccioMigrate = async (from: string, to: string): ReturnType<typeof npmMigrateAll> => {
  const packagesUrl = `${from}/-/verdaccio/packages`.replace(
    /([^:]\/)\/+/g,
    '$1'
  )
  const res = await axios.get(packagesUrl)
  const pkgs: string[] = res.data?.map((e: any) => e.name)
  return await npmMigrateAll(from, to, pkgs)
}

export default verdaccioMigrate
