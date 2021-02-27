# tm-donation

## ビルド

- **nodejs と yarn が必要**

- このリポジトリをクローンする
- 以下を実行

```sh
tm-donation > yarn
tm-donation > yarn build
```

- `tm-donation/build`配下にできたファイルたちを s3 にアップロード
  - バケット/index.html みたいになるように

## api 仕様

### /donations

#### GET

- response

```typescript
interface response {
  result: {
    error: boolean;
    message: string;
  };
  body: [
    {
      name: string;
      amount: number;
    },
  ];
}
```

#### POST

- request body

```typescript
interface requset {
  name: string;
  amount: number;
}
```

- response

```typescript
interface response {
  result: {
    error: boolean;
    message: string;
  };
}
```
