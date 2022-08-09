# verdaccio-migrate

Migrate all packages in a verdaccio to another npm registry with npm publish.

## Install

```bash
npm i verdaccio-migrate
```

## Usage

```typescript
import verdaccioMigrate from "verdaccio-migrate";

const from = "https://registry.npmjs.org/"; // source registry url
const to = "http://localhost:4873/"; // target registry url

verdaccioMigrate(from, to).then(
  ({
    succeeded, // ['@my/pkg1@0.0.1', '@my/pkg1@0.0.2']
    failed,
    skipped,
  }) => {
    // migrated
  }
);
```

## Cli Usage

```bash
npx verdaccio-migrate --from=https://registry.npmjs.org/ --to=http://localhost:4873/
```

## Details

For more details, checkout [npm-migrate-all](https://github.com/banyudu/npm-migrate-all).
