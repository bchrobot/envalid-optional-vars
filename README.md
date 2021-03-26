# Envalid Optional Variables

Run:

```sh
yarn start
```

Expect:

```
{
  isDev: false,
  isProd: true,
  optionalVariable: undefined,
}
```

Get:

```
/path/to/envalid-mvp/node_modules/envalid/src/middleware.ts:41
        throw new ReferenceError(`[envalid] Env var not found: ${name}`)
              ^
ReferenceError: [envalid] Env var not found: OPTIONAL_VARIABLE
    at Object.get (/path/to/envalid-mvp/node_modules/envalid/src/middleware.ts:41:15)
    at Object.<anonymous> (/path/to/envalid-mvp/index.ts:11:25)
```
