# API 服务器

要安装并启动 API 服务器，请在此目录中运行以下命令：

* `npm install`
* `node server`

## 使用服务器

### 包含 Authorization Header

所有请求应使用**Authorization header**来处理自己的数据：

```js
fetch(
    url,
    {
        headers: { 'Authorization': 'whatever-you-want' }
    }
)
```

### API 端点

有以下端点可用：

| 端点       | 用法          | 参数         |
|-----------------|----------------|----------------|
| `GET /categories` | 获取应用程序的所有类别。列表可在 `categories.js` 找到。 你可以随意添加或扩展这个列表。 |  |
| `GET /:category/posts` | 获取特定类别的所有帖子。 |  |
| `GET /posts` | 获取所有帖子。 当没有选择类别时，对主页有用。 |  |
| `POST /posts` | 新添一个帖子。 | **id** - UUID就好, 但任何唯一的ID也都可行 <br> **timestamp** - [Timestamp] 可以以任何你喜欢的格式，你也可以使用 `Date.now()` 。 <br> **title** - [String] <br> **body** - [String] <br> **owner** - [String] <br> **category** -  所有类别均列在 `categories.js`。 你可以随意添加或扩展这个列表。 |
| `GET /posts/:id` | 获取单个帖子的详细信息。 | |
| `POST /posts/:id` | 用于在帖子中投票。 | **option** - [String]: `"upVote"` 或 `"downVote"`. |
| `PUT /posts/:id` | 编辑现有帖子中的详细信息 | **title** - [String] <br> **body** - [String] |
| `DELETE /posts/:id` | 将帖子的已删除标志设置为“true”。 <br> 将所有子注释的 parentDeleted 标志设置为“true”。 | |
| `GET /posts/:id/comments` | 获取单个帖子的所有评论。 | |
| `POST /comments` | 在帖子中添加评论 | **id** - 任何唯一的ID。 与帖子一样，UUID可能是最好的。<br> **timestamp** - [Timestamp]  <br> **body** - [String] <br> **owner** - [String] <br> **parentId** - 需要匹配到数据库中的帖子 ID |
| `GET /comments/:id` | 获取单个评论的详细信息。 | |
| `POST /comments/:id` | 用于投票评论。 | |
| `PUT /comments/:id` | 编辑现有评论的详细信息。 | **timestamp** - 时间戳 <br> **body** - [String] |
| `DELETE /comments/:id` | 将评论的已删除标志设置为`true`. | &nbsp; |
