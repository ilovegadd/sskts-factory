# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/).

## Unreleased

### Added

### Changed

### Deprecated

### Removed

### Fixed

### Security

## v5.3.1 - 2018-12-11

### Changed

- 上映イベントの検索条件を拡張

## v5.3.0 - 2018-12-10

### Added

- タスク検索条件を追加
- 組織の対応決済方法にクレジットカードを追加
- 劇場にCOAのスケジュールXML情報属性を追加
- 上映イベントインポートタスクを追加
- 取引検索条件インターフェースを追加
- アクション検索ソート条件インターフェースを追加

### Changed

- 注文検索条件強化
- install @waiter/factory@2.0.0
- イベントにID属性を追加

## v5.2.0 - 2018-10-08

### Added

- Cognitoインターフェースをエクスポート。

## v5.1.0 - 2018-10-08

### Added

- トリガーウェブフックタスクインターフェースを追加。
- 人物識別子インターフェースを追加。
- 
## v5.0.1 - 2018-10-06

### Changed

- 注文検索条件を強化。

## v5.0.0 - 2018-08-!2

### Changed

- 会員検索追加

## v4.4.0 - 2018-07-31

### Changed

- 口座タイプを追加して、Pecorinoに指定するように変更。

## v4.2.0 - 2018-06-13

### Changed

- 注文検索条件を拡張。

## v4.1.0 - 2018-06-12

### Changed

- 注文検索条件を拡張。

## v4.0.0 - 2018-06-07

### Added

- Pecorinoファクトリーをエクスポート。
- Pecorino口座関連のインターフェースを追加。
- 脆弱性のあるパッケージをアップデート。
- 単位符号を追加。
- 定量値インターフェースを追加。
- Pecorino付与アクションインターフェースを追加。
- Pecorino入金タスクを追加。
- Pecorino返金タスクを追加。
- Pecorino取引中止タスクを追加。
- Pecorinoインセンティブ承認アクションを追加。
- Pecorinoインセンティブ返却アクション、Pecorinoインセンティブ返却タスクを追加。
- 会員プログラム登録タスク、会員プログラム登録アクションを追加。
- 会員プログラム登録解除タスク、会員プログラム登録解除アクションを追加。
- 会員プログラムオファー承認アクションインターフェースを追加。
- Pecorinoインセンティブ承認取消タスクを追加。
- 注文検索条件インターフェースを追加。

### Changed

- update packages.
- 組織に受け入れ可能決済方法属性を追加。
- オファーを期間や量で制御できるようにオファーインターフェースを拡張。
- 所有権の対象物を拡張。
- 会員プログラムインターフェースを拡張。
- 注文アクションの潜在アクションにPecorino付与アクション属性を追加。
- 決済と返金アクションを決済方法に対して動的なインターフェースに変更。
- アクションインターフェースの汎用性を向上。
- 注文配送のポストアクションに会員プログラム登録タスクを追加。
- アクション実行者や取引進行者のインターフェースを拡張。
- 取引インターフェースを取引タイプに対して動的に変更。
- 所有対象タイプに口座を追加。

### Removed

- イベント予約データ作成アルゴリズムをdomainへ移動。

## v3.0.0 - 2018-02-27

### Added

- 注文返品取引インターフェースを追加。
- 注文返品アクションインターフェースを追加。
- クレジットカード売上取消タスクインターフェースを追加。
- 注文返品タスクインターフェースを追加。
- 注文アクションを追加。
- 支払アクションを追加。
- 返金アクションを追加。
- 注文配送アクションを追加。
- 使用アクションを追加。
- 注文配送タスクを追加。
- Eメール送信アクションをパラメーターに持つ、新しいEメール送信タスクを追加。
- Pecorino支払タスクを追加。
- Pecorino口座承認アクションを追加。

### Changed

- アクションインターフェースを拡張。
- アクションと取引に対して潜在アクション属性を定義。
- 承認アクションのobjectに型を定義し、purposeを取引型に変更。
- 注文取引オブジェクトのWAITER許可証属性を必須に変更。
- typescriptコンパイルターゲットをes5に変更。

### Removed

- 取引から注文を作成するファンクションを削除。
- 取引スコープファクトリーを削除。
- イベント検索条件属性からdayとtheaterを削除。

## v2.3.1 - 2017-11-28
### Fixed
- add a node security exception [Regular Expression Denial of Service](https://nodesecurity.io/advisories/532).

## v2.3.0 - 2017-11-23
### Added
- 注文取引のオブジェクトにWAITER許可証プロパティを追加。
- RateLimitExceededエラーを追加。

## v2.2.0 - 2017-11-15
### Added
- 個々の上映イベントの検索条件にプロパティを追加。
- 上映イベントの場所に識別子プロパティを追加。

### Security
- テストコードを補強。

## v2.1.0 - 2017-10-23
### Added
- 人物タイプインターフェースを追加。
- 決済方法タイプインターフェースを追加。

## v2.0.0 - 2017-10-21
### Changed
- 座席予約の供給情報インターフェースを調整。
- イベントステータスをエクスポート。

## v1.0.2 - 2017-09-27
### Changed
- transfer repository to organization.

### Security
- update dependencies.

## v1.0.1 - 2017-09-25
### Added
- READMEにバッジを追加。

## v1.0.0 - 2017-09-25
### Added
- v1.0.0をリリース。
