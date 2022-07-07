import 'zx/globals'
import verdaccioMigrate from './index.js'

const usage = (): void => {
  console.log(`
  Usage:
    npx verdaccio-migrate --from=<source registry url> --to=<target registry url>

  Example:
    npx verdaccio-migrate --from=https://registry.npmjs.org/ --to=http://localhost:4873/
  `)
}

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
if (!argv.from || !argv.to) {
  usage()
  process.exit(1)
}

const run = async (): Promise<void> => {
  const padName = (name: string): string => name.padEnd(80, ' ')
  const { succeeded, failed, skipped } = await verdaccioMigrate(argv.from, argv.to)
  for (const item of skipped) {
    console.log(chalk.yellow(`${padName(item)}\tskiped`))
  }
  for (const item of succeeded) {
    console.log(chalk.green(`${padName(item)}\tsucceeded`))
  }
  for (const item of failed) {
    console.log(chalk.red(`${padName(item)}\tfailed`))
  }
}

run().catch(console.error)
