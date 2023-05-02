## JSON SERVER
https://github.com/typicode/json-server

```bash
dev:server
```

## Forms behaviour

* Controlled
-> Getting info through inserting
-> If info is not getting for a native component

* Uncontrolled
-> Search for info

## Use Context Selector
https://github.com/dai-shi/use-context-selector


## UseCallback
- Vai evitar que uma função seja recriada, ao menos que suas dependencies mudem

## React Render
Por que um component renderiza?
- Hooks changed
- Props changed
- Parent rerendered

Qual fluxo do react?
- 1: React recria o html do component
- 2: Compara a versão recriada com a versão anterior
- 3: Se mudou algo, reescreve

MEMO:
Usando Memo é adicionado um passo 0.
- 0: Verifica Hooks, props com Deep comparison
- 0.1: Compara versão anterior de hooks e props
- 0.2: Se mudou, ele permitie renderizar

