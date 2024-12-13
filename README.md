# 匿名掲示板


## 事前準備

1. 本リポジトリを各自のPC（ロカール環境）にクローンする（[参考](https://zenn.dev/gachigachi/articles/329952348817d7)）

2. nodeがインストールされているかを確認する。ない場合は[こちら](https://prog-8.com/docs/nodejs-env-win)を参考に手順を実施
```bash
# nodeのバージョンを確認
node -v
```

3. npmがインストールされているかを確認する。
```bash
# npmのバージョンを確認
npm -v
```
＊もしこのエラーがあった場合は、以下のコマンドを実行し、もう一度npmのバージョンを確認
> npm : このシステムではスクリプトの実行が無効になっているため、ファイル C:\Program Files\nodejs\npm.ps1 を読み込むことができません。
```bash
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
```

## 開発環境構築
packageをインストール
```bash
npm install
```
ロカール環境を起動する
```bash
npm run dev
```

   
   
