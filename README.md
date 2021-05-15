# tm-donation

## デプロイ

### 変更の必要がない場合

- `tm-donation/build`配下にのファイルたちを s3 にアップロード
  - バケット/index.html になるように

## ビルド

- **nodejs と yarn が必要**

- このリポジトリをクローンする
- 以下を実行

```sh
tm-donation > yarn
tm-donation > yarn build
```

- `tm-donation/build`配下にできたファイルたちを s3 にアップロード
  - バケット/index.html になるように

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
      comment: string;
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
  email: string;
  comment: string;
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
