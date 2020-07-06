# README

#### アプリ名：chat-space(チャットスペース)
![チャットスペース](https://user-images.githubusercontent.com/64763739/86558997-ce46cc00-bf95-11ea-92d0-07fa05f7e371.png)

### 制作背景
スクール課題です。多くのgemを使用し実装する経験を学習するため。

### 使用gem:
device<br>
mini_magic<br>
pry-rails<br>
faker<br>
factory_bot_rails<br>
rspec-rails　など・・・<br>

### 本番環境:
aws 

### 概要:
コメント機能(画像投稿が可能です。)<br>
ajax非同期通信<br>
グループ登録機能/検索機能(メンバーの追加・削除・グループ名変更・作成が可能です。)<br>
ログイン・新規登録機能<br>

### 今後実装したい機能
投稿した内容を削除する機能<br>
動画を投稿できるようにする機能

### 作成者
下中 美奈

### DB設計
#### messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

#### Association
- belongs_to :group
- belongs_to :user

#### usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, add_index: true|
|email|string|null: false, foreign_key: true|
|password|string|null:false|

#### Association
- has_many :messages
- has_many :groups_users
- has_many :groups thorough: group_users

#### groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false, unique: true|

#### Association
- has_many :messages
- has_many :users through: group_users
- has_many :group_users

#### groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

#### Association
- belongs_to :group
- belongs_to :user

