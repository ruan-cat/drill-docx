# drill-docx

插件文档静态存储仓库，存放插件详细手册、插件小工具、升级说明等文档资料。

## Git 提交与钩子

本仓库使用 `simple-git-hooks` 在 commit 时自动执行两个钩子：

| 钩子         | 行为                                                                        |
| ------------ | --------------------------------------------------------------------------- |
| `pre-commit` | `lint-staged`：对暂存区所有文件运行 prettier 格式化，并把格式化结果重新暂存 |
| `commit-msg` | `commitlint`：校验提交信息是否符合规范（需带 type 前缀，如 `docs: v3.82`）  |

正常提交：

```bash
git commit -m "docs: v3.82"
```

## 已知问题：批量重命名/删除文件时提交被拦截

**症状**：`git commit` 报错：

```plain
✖ Failed to stage changes from tasks!
fatal: pathspec '注意_v3.80升级说明.docx' did not match any files
```

**原因**：当暂存区包含「重命名」或「已删除」的文件（例如 `注意_v3.80升级说明.docx` 重命名为 `注意_v3.82升级说明.docx`）时，旧路径在磁盘上已不存在，但仍登记在暂存区里。lint-staged 跑完 prettier 后会重新 `git add` 全部原暂存路径，`git add` 遇到不存在的旧路径即整体失败（退出码 128），提交被中止。配置文件本身没有问题，这是 lint-staged 的行为边界。

**绕过方案**：跳过钩子直接提交。

```bash
SKIP_SIMPLE_GIT_HOOKS=1 git commit -m "docs: v3.82"
```

等价写法：`git commit --no-verify -m "..."`（同样会跳过两个钩子）。

提交成功后，清理 lint-staged 失败时留下的自动备份 stash（其内容已包含在提交里）：

```bash
git stash drop
```
