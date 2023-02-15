## v4.0.51 - 2023-02-09T08:03:43Z - https://github.com/umijs/umi/releases/tag/v4.0.51 
## What's Changed
- 新增 `history.push/history.replace` 对目标路由的类型提示 by @fz6m in https://github.com/umijs/umi/pull/10417
- 新增 `monorepoRedirect.peerDeps` 配置项避免可能出现的多实例问题 by @fz6m in https://github.com/umijs/umi/pull/10415
- 新增 `addOnDemandDeps` 插件 API，用于添加按需安装的依赖 by @fz6m in https://github.com/umijs/umi/pull/10438
- 新增 MF 插件 `mf.name` 的命名校验规则 by @AkaraChen in https://github.com/umijs/umi/pull/10428
- 新增 confetti 插件，用于在构建完成后撒花（需依赖 [Raycast](https://www.raycast.com/)） by @goo-yyh in https://github.com/umijs/umi/pull/10441
- 新增 prepare 阶段对源码里错误引用 mock 文件的校验 by @hanzebang in https://github.com/umijs/umi/pull/10447
- 修复 tailwindcss generator 生成的源码目录配置 by @hasa-ki in https://github.com/umijs/umi/pull/10386
- 修复 bundler-webpack 无法与 workerize-loader 共用的问题 by @xierenyuan in https://github.com/umijs/umi/pull/10425
- 修复 `addApiMiddlewares` 插件 API 在 Windows 下解析路径错误的问题 by @AkaraChen in https://github.com/umijs/umi/pull/10399
- 修复循环引用导致 `defineApp` 为 `undefined` 的问题 by @fz6m in https://github.com/umijs/umi/pull/10436
- 优化 Vite 模式应用测试逻辑、提升 esbuild target 的版本 by @fz6m in https://github.com/umijs/umi/pull/10414
- 优化 prepare 阶段处理非源代码文件的方式 by @fz6m in https://github.com/umijs/umi/pull/10400
- 优化 logger 缓存文件的生成目录为 `package.json` 同级 `node_modules` by @fz6m in https://github.com/umijs/umi/pull/10416
- 优化 babel 编译配置，禁用对 browserslist 配置的读取 by @fz6m in https://github.com/umijs/umi/pull/10396
- 升级 `@parcel/css` 为 `lightningcss` by @fz6m in https://github.com/umijs/umi/pull/10437

## New Contributors
* @hasa-ki made their first contribution in https://github.com/umijs/umi/pull/10386

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.50...v4.0.51
## v4.0.50 - 2023-02-09T07:41:05Z - https://github.com/umijs/umi/releases/tag/v4.0.50 
## What's Changed
- 修复 alias 循环引用导致 prepare 阶段执行报错的问题 by @fz6m in https://github.com/umijs/umi/pull/10406


**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.49...v4.0.50
## v4.0.49 - 2023-02-03T07:42:26Z - https://github.com/umijs/umi/releases/tag/v4.0.49 
## What's Changed
* 修复 `config set` 命令多次调用且不存在 `.umirc.ts` 时，最终配置会被覆盖的问题 by @goo-yyh in https://github.com/umijs/umi/pull/10390
* 修复 `prepare` stage 不识别部分文件后缀导致启动报错的问题 by @sorrycc in https://github.com/umijs/umi/pull/10395

## New Contributors
* @goo-yyh made their first contribution in https://github.com/umijs/umi/pull/10390

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.48...v4.0.49
## v4.0.48 - 2023-02-02T09:16:57Z - https://github.com/umijs/umi/releases/tag/v4.0.48 
## What's Changed
* 新增 `addPrepareBuildPlugins` 及 `onPrepareBuildSuccess` 插件 API，在构建之前采集项目的源码信息用于分析或实现插件功能 by @sorrycc in https://github.com/umijs/umi/pull/10367
* 优化 Webpack 编译时模块解析的文件识别顺序以提升性能 by @sorrycc in https://github.com/umijs/umi/pull/10326
* 优化 access 插件提供的运行时 API 类型定义 by @mmmml-zhao in https://github.com/umijs/umi/pull/10259
* 优化 Umi 的启动速度 by @sorrycc in https://github.com/umijs/umi/pull/10361
* 优化 phantomDependency 幽灵依赖检查特性的实现 by @sorrycc in https://github.com/umijs/umi/pull/10369
* 优化 mf 的产物名称，dev 下不启用 hash 便于调试 by @stormslowly in https://github.com/umijs/umi/pull/10374
* 优化 `exporStatic.extraRoutePaths` 配置项，支持对部分路由禁用预渲染 by @PeachScript in https://github.com/umijs/umi/pull/10371
* 优化 mf 插件的默认配置以兼容 MFSU by @stormslowly in https://github.com/umijs/umi/pull/10380
* 修复通过 `@` 别名引入的 icon 不识别的问题 by @fz6m in https://github.com/umijs/umi/pull/10339
* 修复 react-query 插件在 Windows 下包路径识别报错的问题 by @Jokergga in https://github.com/umijs/umi/pull/10344
* 修复 styled-components 插件在 Windows 下编译报错的问题 by @fz6m in https://github.com/umijs/umi/pull/10346
* 修复 MFSU eager 模式下 copy 插件未禁用的问题 by @stormslowly in https://github.com/umijs/umi/pull/10331
* 修复 tailwindcss 生成器不兼容无 `src` 项目的问题 by @sorrycc in https://github.com/umijs/umi/pull/10350
* 修复 mpa 特性在 Windows 下编译报错的问题 by @fz6m in https://github.com/umijs/umi/pull/10364
* 修复 Node.js v14.17.x 环境下执行 prettier 报错的问题 by @hanzebang in https://github.com/umijs/umi/pull/10366
* 修复 jest 生成器配置误识别框架测试环境配置 `.umirc.test.ts` 的问题 by @stormslowly in https://github.com/umijs/umi/pull/10221
* 更新 did you know 数据 by @fz6m in https://github.com/umijs/umi/pull/10365

## New Contributors
* @Jiacheng787 made their first contribution in https://github.com/umijs/umi/pull/10311
* @mmmml-zhao made their first contribution in https://github.com/umijs/umi/pull/10259
* @Jokergga made their first contribution in https://github.com/umijs/umi/pull/10344

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.47...v4.0.48
## v4.0.47 - 2023-01-18T02:31:36Z - https://github.com/umijs/umi/releases/tag/v4.0.47 
## What's Changed
* 优化 create-umi，simple app 模板换成配置式路由 by @sorrycc in https://github.com/umijs/umi/pull/10316
* 修复 hmr 时 process undefined 报错的问题 by @sorrycc in https://github.com/umijs/umi/pull/10315
* 升级 valtio 依赖到  1.19.0 by @BBBigCat in https://github.com/umijs/umi/pull/10313

## New Contributors
* @BBBigCat made their first contribution in https://github.com/umijs/umi/pull/10313

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.46...v4.0.47
## v4.0.46 - 2023-01-16T08:20:32Z - https://github.com/umijs/umi/releases/tag/v4.0.46 
## What's Changed
* fix(qiankun): not polyfill esnext.math.constant by @fz6m in https://github.com/umijs/umi/pull/10301


**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.45...v4.0.46
## v4.0.45 - 2023-01-16T04:26:52Z - https://github.com/umijs/umi/releases/tag/v4.0.45 
## What's Changed
* feat: changelog by prs by @txp1035 in https://github.com/umijs/umi/pull/10261
* fix(preset-umi): icons should handle externals before alias by @sorrycc in https://github.com/umijs/umi/pull/10292
* fix(renderer-react): the to props of Link might be undefined, for compatibility by @sorrycc in https://github.com/umijs/umi/pull/10293
* feat(plugins): styled-components support config global style in app.tsx by @sorrycc in https://github.com/umijs/umi/pull/10294
* fix: 🐛 antd 组件属性 visible 更换为 open by @huxinfeng in https://github.com/umijs/umi/pull/10296
* docs: 📝 typo in valtio doc by @stormslowly in https://github.com/umijs/umi/pull/10287


**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.44...v4.0.45
## v4.0.44 - 2023-01-12T12:42:39Z - https://github.com/umijs/umi/releases/tag/v4.0.44 
## What's Changed
* feat: auto detect jest version and revert sc version to v6 by @fz6m in https://github.com/umijs/umi/pull/10284


**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.43...v4.0.44
## v4.0.43 - 2023-01-12T09:52:06Z - https://github.com/umijs/umi/releases/tag/v4.0.43 
## What's Changed
* 新增 react-query 插件 by @sorrycc in https://github.com/umijs/umi/pull/10253
* 优化 icons 插件 by @sorrycc in https://github.com/umijs/umi/pull/10226
* 优化 vite 模式的 analyze 配置 by @AkaraChen in https://github.com/umijs/umi/pull/10236
* 升级 @typescript-eslint/eslint-plugin 和 @typescript-eslint/parser 依赖，兼容 TypeScript 4.9 by @wibus-wee in https://github.com/umijs/umi/pull/10232
* 优化脚手架模板，在 author 与模版之间增加空格 by @huxinfeng in https://github.com/umijs/umi/pull/10250
* 优化 ssr，支持 esbuild 构建使用 alias by @fz6m in https://github.com/umijs/umi/pull/10258
* 优化 ssr 下 esbuild 对于 externals 的支持 by @AkaraChen in https://github.com/umijs/umi/pull/10213
* 优化 qiankun 插件，新增 MicroAppLink 组件 by @ice-zjchen in https://github.com/umijs/umi/pull/10090
* 优化 icons 插件，支持 hover 时切换到另一个 icon by @sorrycc in https://github.com/umijs/umi/pull/10251
* 升级 father 和 typescript 依赖，可以用 `satisfies` 了 by @fz6m in https://github.com/umijs/umi/pull/10244
* 升级 webpack 相关依赖到最新 by @sorrycc in https://github.com/umijs/umi/pull/10279
* 升级 babel 相关依赖到最新 by @sorrycc in https://github.com/umijs/umi/pull/10281
* 升级大量依赖，包括 core-js、less-loader 等 by @sorrycc in https://github.com/umijs/umi/pull/10283
* 修复 webpack Compiling 日志在 dev 时丢失的问题 by @sorrycc in https://github.com/umijs/umi/pull/10238
* 修复 icons 插件 camelCase 不支持数字的问题 by @sorrycc in https://github.com/umijs/umi/pull/10245
* 修复 mfsu 在编译出错之后恢复时 cache 生成时机的问题 by @stormslowly in https://github.com/umijs/umi/pull/10272
* 修复 exportStatic 时 publicPath 为相对路径时的处理问题 by @PeachScript in https://github.com/umijs/umi/pull/10268
* 修复 `appData.routes` 的刷新问题，以支持热更 by @fz6m in https://github.com/umijs/umi/pull/10264

## New Contributors
* @wibus-wee made their first contribution in https://github.com/umijs/umi/pull/10232
* @huxinfeng made their first contribution in https://github.com/umijs/umi/pull/10250
* @ice-zjchen made their first contribution in https://github.com/umijs/umi/pull/10090

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.42...v4.0.43
## v4.0.42 - 2023-01-05T13:23:27Z - https://github.com/umijs/umi/releases/tag/v4.0.42 
## What's Changed
* 新增 phantomDependency 配置来做幽灵依赖校验 by @sorrycc in https://github.com/umijs/umi/pull/10183
* 新增 build 流程下会出现构建进度条 by @sorrycc in https://github.com/umijs/umi/pull/10197
* 新增 icons 方案（Beta，目前仅基础功能能用，待进一步完善） by @sorrycc in https://github.com/umijs/umi/pull/10202
* 优化 phantomDependency 的 exclude 配置，修改其包含的项为包名 by @sorrycc in https://github.com/umijs/umi/pull/10191
* 优化 `IRoute` 类型 by @fz6m in https://github.com/umijs/umi/pull/10185
* 优化 public 目录，使其在新增和删除时支持热更（之前需重启 dev server 才能生效）by @fz6m in https://github.com/umijs/umi/pull/10187
* 优化 error cause 的处理 by @fz6m in https://github.com/umijs/umi/pull/10188
* 优化 MFSU 对于 SWC 编译器的支持  by @fz6m in https://github.com/umijs/umi/pull/10198
* 修复 ssr 场景下 node 包 corejs 补丁失效的问题 by @fz6m in https://github.com/umijs/umi/pull/10184
* 修复 MFSU 在处理 npm link 包时的错误 by @stormslowly in https://github.com/umijs/umi/pull/10194
* 修复 vite 模式下 script type 的问题 by @PeachScript in https://github.com/umijs/umi/pull/10195
* 更新依赖 `autoprefixer` 和 `caniuse-lite` by @fz6m in https://github.com/umijs/umi/pull/10186


**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.41...v4.0.42
## v4.0.41 - 2022-12-29T08:05:18Z - https://github.com/umijs/umi/releases/tag/v4.0.41 
## What's Changed
* 新增 无网络连接启动 devServer 时提示无网络 by @AkaraChen in https://github.com/umijs/umi/pull/10153
* 修复 mfsu 依赖配置中有函数时导致缓存一直失效的问题 function by @xierenyuan in https://github.com/umijs/umi/pull/10166
* 修复 乾坤应用本地研发时热更新报错 by @HiLanXiao in https://github.com/umijs/umi/pull/10165
* 修复 移除 globalThis 以支持低版本浏览器 by @sorrycc in https://github.com/umijs/umi/pull/10179
* 修复 `import.meta.x` 导致的模块导出解析失败 by @fz6m in https://github.com/umijs/umi/pull/10149
* 修复 jest generator 生成的script 在 windows 可用 by @zhoudailin in https://github.com/umijs/umi/pull/10133
* 文档 增加使用 bunx 创建项目示例 by @fz6m in https://github.com/umijs/umi/pull/10143
* 文档 增加 overrides.less 功能介绍 by @PeachScript in https://github.com/umijs/umi/pull/10119
* 文档 增加 history.push state 参数的说明 by @stormslowly in https://github.com/umijs/umi/pull/10160

## New Contributors
* @conorzhong made their first contribution in https://github.com/umijs/umi/pull/10139
* @AkaraChen made their first contribution in https://github.com/umijs/umi/pull/10153

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.40...v4.0.41
## v4.0.40 - 2022-12-23T04:13:27Z - https://github.com/umijs/umi/releases/tag/v4.0.40 
## What's Changed

* 回滚 支持调用 history.push 时使用相对路径 https://github.com/umijs/umi/pull/10122 by @stormslowly in https://github.com/umijs/umi/pull/10134

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.39...v4.0.40
## v4.0.39 - 2022-12-22T08:19:03Z - https://github.com/umijs/umi/releases/tag/v4.0.39 
## What's Changed
* 新增 antd 插件运行时配置钩子 by @hanzebang in https://github.com/umijs/umi/pull/10051
* 支持调用 `history.push` 时使用相对路径 by @stormslowly in https://github.com/umijs/umi/pull/10122
* 修复子路由 path 为空时 `exportStatic` 产物缺失的问题 by @fz6m in https://github.com/umijs/umi/pull/10091
* 修复 MFSU 缓存在 `define` 配置项修改时不会刷新的问题 by @fz6m in https://github.com/umijs/umi/pull/10096
* 修复 bundler-esbuild 无法处理 dataurl 资源导致 MFSU 编译失败的问题 by @fz6m in https://github.com/umijs/umi/pull/10098
* 修复 `srcTranspiler` 配置项的类型错误 by @zhoudailin in https://github.com/umijs/umi/pull/10118
* 优化 Umi Max 脚手架内的文档链接 by @BoyYangzai in https://github.com/umijs/umi/pull/10099
* 优化 layout 插件以兼容旧的 `noFound` 和 `unAccessible` 配置 by @hanzebang in https://github.com/umijs/umi/pull/10110
* 优化 antd 插件允许对 antd v5 启用 `import`，同时不允许对 antd v5 设置 `style` by @PeachScript in https://github.com/umijs/umi/pull/10129
* 文档完善 patchClientRoutes 示例 by @hanzebang in https://github.com/umijs/umi/pull/10094
* 文档完善 `define` 配置项添加全局类型声明的示例 by @hanzebang in https://github.com/umijs/umi/pull/10093

## New Contributors
* @zhoudailin made their first contribution in https://github.com/umijs/umi/pull/10118

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.38...v4.0.39
## v4.0.38 - 2022-12-16T11:59:25Z - https://github.com/umijs/umi/releases/tag/v4.0.38 
## What's Changed

* Revert "fix(route): `absPath` missing slash" by @sorrycc in https://github.com/umijs/umi/pull/10086
* Revert "feat: terminal shortcuts" by @sorrycc in https://github.com/umijs/umi/pull/10089


**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.37...v4.0.38
## v4.0.37 - 2022-12-16T09:28:13Z - https://github.com/umijs/umi/releases/tag/v4.0.37 
## What's Changed

* 新增交互式 terminal 快捷键 by @fz6m in https://github.com/umijs/umi/pull/10002
* 新增微生成器支持自定义页面和组件模板 by @mysteryven in https://github.com/umijs/umi/pull/9974
* 优化脚手架模板，默认使用 defineConfig 包裹配置 by @BoyYangzai in https://github.com/umijs/umi/pull/10022
* 优化 vite 模式，升级 vite 到 3.2.5 by @xierenyuan in https://github.com/umijs/umi/pull/10039
* 优化 qiankun 插件，增加默认的微应用容器样式 by @kuitos in https://github.com/umijs/umi/pull/10072
* 优化 bundler-esbuild 支持修改配置 by @fz6m in https://github.com/umijs/umi/pull/10026
* 修复 qiankun 插件当 slave 配了 basename 时 renderContext 可能不正确的问题 by @stormslowly in https://github.com/umijs/umi/pull/10012
* 修复 model 插件，解决 model state ref 在比较时可能不是最新的问题 by @sorrycc in https://github.com/umijs/umi/pull/10077
* 修复 vite 模式下 hot update 时 pluginManager 可能为 null 的问题 by @xierenyuan in https://github.com/umijs/umi/pull/10048
* 修复 vite 模式下 favicon middleware 不生效的问题 by @xierenyuan in https://github.com/umijs/umi/pull/10038
* 修复路由的 absPath 在一些场景下缺少 / 的问题 by @fz6m in https://github.com/umijs/umi/pull/10068
* 修复 mf 功能 remote.js 没有 follow hash 配置的问题 by @stormslowly in https://github.com/umijs/umi/pull/10082
* 文档新增「如何使用插件」 by @fz6m in https://github.com/umijs/umi/pull/10049
* 文档新增关于「压缩使用 utf8」的说明 by @fz6m in https://github.com/umijs/umi/pull/10030

## New Contributors
* @jiangkaifree made their first contribution in https://github.com/umijs/umi/pull/10015
* @bowen-wu made their first contribution in https://github.com/umijs/umi/pull/10006
* @jc1144096387 made their first contribution in https://github.com/umijs/umi/pull/10035

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.36...v4.0.37
## v4.0.36 - 2022-12-08T13:42:46Z - https://github.com/umijs/umi/releases/tag/v4.0.36 
## What's Changed
* 修复 webpack chunks 提取逻辑和 mpa 场景冲突的问题 by @sorrycc in https://github.com/umijs/umi/pull/10005


**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.35...v4.0.36
## v4.0.35 - 2022-12-08T08:08:51Z - https://github.com/umijs/umi/releases/tag/v4.0.35 
## What's Changed

* 新增 valtio 通过配置开启  (❗️breaking change) by @sorrycc in https://github.com/umijs/umi/pull/9971
* 新增 styled-components 插件 by @sorrycc in https://github.com/umijs/umi/pull/9970
* 新增  styled-components 插件 dev 开启 babel-plugin-styled-components by @sorrycc in https://github.com/umijs/umi/pull/9999
* 新增 MFSU eager 模式支持 esbuild 构建 by @stormslowly in https://github.com/umijs/umi/pull/9919
* 新增 codeSplitting 支持  auto load chunk by @xierenyuan in https://github.com/umijs/umi/pull/9859
* 新增 webpack analyze 配置项 by @fz6m in https://github.com/umijs/umi/pull/9941
* 新增 `useSelectedRoutes` API [文档](https://umijs.org/docs/api/api#useselectedroutes) by @fz6m in https://github.com/umijs/umi/pull/9975
* 新增 routes 配置修改不重启 dev 服务 by @xierenyuan in https://github.com/umijs/umi/pull/9873
* 新增 valtio 插件导出 derive by @sorrycc in https://github.com/umijs/umi/pull/9951
* 新增 valtio 插件导出 underive 和 subscribeKey by @sorrycc in https://github.com/umijs/umi/pull/9998
* 修复 plug-model model 文件加载顺序避免初始化失败 @elivoa in https://github.com/umijs/umi/pull/9846
* 修复 乾坤父应用同时存在重定向根路由时，父应用layout不会包裹子应用的bug by @HiLanXiao in https://github.com/umijs/umi/pull/9829
* 修复 plugin API onGenerateFiles 类型问题 by @mysteryven in https://github.com/umijs/umi/pull/9880
* 修复 配置 `test:false` 关闭 测试 by @fz6m in https://github.com/umijs/umi/pull/9870
* 修复 MFSU 独立使用是 支持 entry 相对路径 by @mysteryven in https://github.com/umijs/umi/pull/9800
* 新增 create-umi  新增 Antd 版本选功能 by @mysteryven in https://github.com/umijs/umi/pull/9918
* 修复 process.env.PORT 可能取不到正确的端口的问题 by @acg-developer in https://github.com/umijs/umi/pull/9952
* 修复 qiankun 子应用 history 参数获取错误问题 by @PeachScript in https://github.com/umijs/umi/pull/9953
* 修复  MFSU 解析依赖到 node 构建产物的问题 by @stormslowly in https://github.com/umijs/umi/pull/9976
* 修复 render 运行时配置中 history undefined 问题 by @xiaohuoni in https://github.com/umijs/umi/pull/9871
* 文档 更正国际化(多语言)链接 by @FriedRiceNoodles in https://github.com/umijs/umi/pull/9866
* 文档 修改 clientloader 实例代码 by @chenyanggis in https://github.com/umijs/umi/pull/9934
* 文档  更正 qiankun 运行时说明 by @kuitos in https://github.com/umijs/umi/pull/9981



## New Contributors
* @elivoa made their first contribution in https://github.com/umijs/umi/pull/9846
* @FriedRiceNoodles made their first contribution in https://github.com/umijs/umi/pull/9866
* @chenyanggis made their first contribution in https://github.com/umijs/umi/pull/9934
* @acg-developer made their first contribution in https://github.com/umijs/umi/pull/9952

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.34...v4.0.35
## v4.0.34 - 2022-12-01T06:44:12Z - https://github.com/umijs/umi/releases/tag/v4.0.34 
## What's Changed
* 修复给 qiankun 子应用传递字符串类型的 history 无法正常工作的问题 by @PeachScript in https://github.com/umijs/umi/pull/9860
* 修复 precommit generator 在 Windows 系统下执行 chmod 导致报错的问题 by @wyy0512 in https://github.com/umijs/umi/pull/9879
* 修复 `SPEED_MEASURE` 启用时 `mini-css-extract-plugin` 无法正常工作的问题 by @fz6m in https://github.com/umijs/umi/pull/9907
* 修复 MFSU eager 在使用 `APP_ROOT` 时编译不正常的问题 by @stormslowly in https://github.com/umijs/umi/pull/9884 https://github.com/umijs/umi/pull/9885
* 修复在项目存在 `.babelrc` 时 `polyfill.ts` 临时文件生成错误导致编译失败的问题 by @PeachScript in https://github.com/umijs/umi/pull/9901
* 修复 MFSU eager 在项目 tsconfig 设置保留 JSX 时执行错误的问题 by @stormslowly in https://github.com/umijs/umi/pull/9915
* 修复对相对路径引用的模块 splitChunk 时生成错误资源名的问题 by @fz6m in https://github.com/umijs/umi/pull/9857
* 新增 `onHistoryInit` 参数用于 qiankun `MicroApp` 组件获取子应用的 history 实例 by @PeachScript in https://github.com/umijs/umi/pull/9862
* 支持给 `umi config set` 传递 JSON 字符串值 by @stormslowly in https://github.com/umijs/umi/pull/9889

## New Contributors
* @BoyYangzai made their first contribution in https://github.com/umijs/umi/pull/9877

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.33...v4.0.34
## v4.0.33 - 2022-11-24T08:17:07Z - https://github.com/umijs/umi/releases/tag/v4.0.33 
## What's Changed

* 新增 modifyClientRenderOpts runtime hook by @fz6m in https://github.com/umijs/umi/pull/9787
* 优化 qiankun 插件，支持本地研发代理请求时携带请求头 by @HiLanXiao in https://github.com/umijs/umi/pull/9740
* 优化 onBuildHtmlComplete 插件 api，增加 htmlFiles 属性 by @stormslowly in https://github.com/umijs/umi/pull/9847
* 优化 history api 支持无 pathname 传入 by @stormslowly in https://github.com/umijs/umi/pull/9804
* 升级 esbuild 依赖以支持 TypeScript 新的 `satisfies` 语法 by @fz6m in https://github.com/umijs/umi/pull/9816
* 回滚 base config 要求 / 结尾的校验 by @stormslowly in https://github.com/umijs/umi/pull/9809
* 修复 dev 自动重启时端口由于没有释放而可能递增的问题 by @sorrycc in https://github.com/umijs/umi/pull/9802
* 修复 utils 中使用 ?? 导致 node 版本检测失效的问题 by @sorrycc in https://github.com/umijs/umi/pull/9803
* 修复 favicon 路径没有处理 publicPath 配置的问题 by @fz6m in https://github.com/umijs/umi/pull/9819
* 修复 dev 模式下 stats.toJson() 太慢导致请求 html 路由的性能问题 by @sorrycc in https://github.com/umijs/umi/pull/9840
* 修复 monorepo 场景下 route chunk 的兼容性问题 by @PeachScript in https://github.com/umijs/umi/pull/9834
* 修复 splitChunks 配置 base64 hash 包含非法字符的问题 by @fz6m in https://github.com/umijs/umi/pull/9851
* 修复 antd 5 场景下 layout 和 locale 对于 menu 的使用 by @chenshuai2144 in https://github.com/umijs/umi/pull/9842
* 修复 mfsu + monorepo 下的文件解析逻辑 by @stormslowly in https://github.com/umijs/umi/pull/9771
* 修复 mfsu + monorepo 下非 src 下文件改动进入到代码列表的问题 by @stormslowly in https://github.com/umijs/umi/pull/9772
* 修复 request 插件 dataField 类型推导问题 by @zenotsai in https://github.com/umijs/umi/pull/9747

## New Contributors
* @simonwong made their first contribution in https://github.com/umijs/umi/pull/9723

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.32...v4.0.33
## v4.0.32 - 2022-11-17T14:17:49Z - https://github.com/umijs/umi/releases/tag/v4.0.32 
## What's Changed

* fix(preset-umi): codeSplitting depPerChunk unmatch by @sorrycc in https://github.com/umijs/umi/pull/9797
* Revert "fix: history is undefined on render (#9765)" by @stormslowly in https://github.com/umijs/umi/pull/9798


**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.31...v4.0.32
## v4.0.31 - 2022-11-17T08:49:20Z - https://github.com/umijs/umi/releases/tag/v4.0.31 
## What's Changed

* 新增 precommit 生成器 by @wyy0512 in https://github.com/umijs/umi/pull/9784
* 新增 支持 wappalyzer 版本检测 by @fz6m in https://github.com/umijs/umi/pull/9777
* 新增 测试功能 by @chenshuai2144 in https://github.com/umijs/umi/pull/9792
* 优化 加载页面文字样式 by @rovoskarl in https://github.com/umijs/umi/pull/9742
* 修复 qiankun unmount 错误 by @chenshuai2144 in https://github.com/umijs/umi/pull/9745
* 修复 页面使用 NPM 中的组件时，分包名有转义字符的问题 by @PeachScript in https://github.com/umijs/umi/pull/9743
* 修复 使用内部 Helmet 渲染失败的问题 by @PeachScript in https://github.com/umijs/umi/pull/9744
* 修复 Helmet head 在 ssr 中丢失的问题 by @PeachScript in https://github.com/umijs/umi/pull/9769
* 修复 构建配置 publicPath 默认值 by @mysteryven in https://github.com/umijs/umi/pull/9786
* 修复 组件生成器在指定路径是文件名大小写问题 by @fz6m in https://github.com/umijs/umi/pull/9782
* 修复 Antd 插件 iconPrefixCls 配置对 message 无效的情况 by @hanzebang in https://github.com/umijs/umi/pull/9778
* 修复 base config 增加 '/' 结尾的限制 by @stormslowly in https://github.com/umijs/umi/pull/9776
* 修复  pro layout 类型定义 by @fz6m in https://github.com/umijs/umi/pull/9753
* 修复 defineConfig 类型错误 by @xiaohuoni in https://github.com/umijs/umi/pull/9774
* 修复 history 在 render 时未定义的问题 by @xiaohuoni in https://github.com/umijs/umi/pull/9765
* 修复  MFSU 依赖构建不使用 CopyPlugin by @stormslowly in https://github.com/umijs/umi/pull/9751
* 文档 修复 typo @learnsomesome in https://github.com/umijs/umi/pull/9738
* 文档 新增 legacy 和 code splitting 文档内容 by @fz6m in https://github.com/umijs/umi/pull/9754
* 示例 增加 tsconfig.json 示例 by @fz6m in https://github.com/umijs/umi/pull/9783

## New Contributors
* @learnsomesome made their first contribution in https://github.com/umijs/umi/pull/9738
* @mysteryven made their first contribution in https://github.com/umijs/umi/pull/9786

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.30...v4.0.31
## v4.0.30 - 2022-11-10T08:35:33Z - https://github.com/umijs/umi/releases/tag/v4.0.30 
## What's Changed

* 新增 `Helmet` 组件导出、以支持 SSR 下的 `Helmet` 渲染 by @PeachScript in https://github.com/umijs/umi/pull/9727
* 修复 `crossorigin` 配置项校验字段错误的问题 by @xierenyuan in https://github.com/umijs/umi/pull/9698
* 修复 Vite 模式下热更新失效的问题 by @2239559319 in https://github.com/umijs/umi/pull/9704
* 修复 MFSU 的 eager 模式下 polling 失败、等待 5s 的问题 by @stormslowly in https://github.com/umijs/umi/pull/9682
* 修复 404 路由预渲染失败的问题 by @PeachScript in https://github.com/umijs/umi/pull/9718
* 修复 SSR 的 `build-manifest.json` 在 Windows 下路径异常的问题 by @fz6m in https://github.com/umijs/umi/pull/9722
* 修复 Umi 默认静态资源的读取逻辑不兼容对象值的问题 by @sorrycc in https://github.com/umijs/umi/pull/9737
* 修复兜底 mf 依赖构建时有置顶 chunk 名的问题 by @stormslowly in https://github.com/umijs/umi/pull/9732
* 优化模块解析失败时的错误提示 by @hanzebang in https://github.com/umijs/umi/pull/9694
* 支持插件修改 appJS 的注册路径 by @PeachScript in https://github.com/umijs/umi/pull/9726
* 回滚用于测试的 `TestBrowser` 接口，优化后再重新发布 by @sorrycc in https://github.com/umijs/umi/pull/9729


**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.29...v4.0.30
## v4.0.29 - 2022-11-04T03:37:42Z - https://github.com/umijs/umi/releases/tag/v4.0.29 
## What's Changed
* 新增 codeSplitting 配置，提供 3 个策略供选择 by @sorrycc in https://github.com/umijs/umi/pull/9646
* 新增 test 方案，可基于路由测试应用 by @chenshuai2144 in https://github.com/umijs/umi/pull/9556
* 新增 onBeforeMiddleware 插件接口 by @xierenyuan in https://github.com/umijs/umi/pull/9685
* 优化 exportStatic，支持与 ssr 搭配渲染 html 内容 by @PeachScript in https://github.com/umijs/umi/pull/9656
* 优化 dev 启动时的 loading 页，补充构建详情 by @rovoskarl in https://github.com/umijs/umi/pull/9666
* 优化 logger util，提供 time 方法 by @fz6m in https://github.com/umijs/umi/pull/9661
* 优化 analytics 插件，支持 ga4 by @fz6m in https://github.com/umijs/umi/pull/9658
* 优化 antd 插件，在使用 antd 5 时禁用 import 配置项 by @stormslowly in https://github.com/umijs/umi/pull/9552
* 修复 monorepoRedirect + APP_ROOT 使用场景下的问题 by @fz6m in https://github.com/umijs/umi/pull/9660
* 修复 chainWebpack 的类型问题 by @fz6m in https://github.com/umijs/umi/pull/9659
* 修复 jsx import source 使用 auto 模式 by @fz6m in https://github.com/umijs/umi/pull/9641
* 修复 mfsu eager 模式下 JS 的代码预处理问题 by @stormslowly in https://github.com/umijs/umi/pull/9647
* 修复 locale 插件 getIntl 没有传 locale 时未获取默认 locale 的问题 by @hanzebang in https://github.com/umijs/umi/pull/9672
* 修复 polyfill targets 未生效的问题 by @2239559319 in https://github.com/umijs/umi/pull/9298
* 修复 overrides.less 和 vite 模式的兼容问题 by @xierenyuan in https://github.com/umijs/umi/pull/9688
* 修复 devtool api 和 vite 模式的兼容问题 by @xierenyuan in https://github.com/umijs/umi/pull/9690
* 更新 webpack 依赖到 5.74.0，修复可能会导致多次热编译的问题 by @xierenyuan in https://github.com/umijs/umi/pull/9693

## New Contributors
* @rovoskarl made their first contribution in https://github.com/umijs/umi/pull/9666

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.28...v4.0.29
## v4.0.28 - 2022-10-28T04:06:49Z - https://github.com/umijs/umi/releases/tag/v4.0.28 
## What's Changed

* 修复 layout 插件没有处理 props.route 为空的场景 by @chenshuai2144 in https://github.com/umijs/umi/pull/9643

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.27...v4.0.28
## v4.0.27 - 2022-10-27T08:46:48Z - https://github.com/umijs/umi/releases/tag/v4.0.27 
## What's Changed

* 新增 导出静态站点功能  by @PeachScript in https://github.com/umijs/umi/pull/9602
* 新增 umi 命令行提示是否想使用这个命令提示 by @fz6m in https://github.com/umijs/umi/pull/9599
* 修复 useMatch 返回空值的问题 by @iamkun in https://github.com/umijs/umi/pull/9582
* 修复 rootContainer 运行时参数，与文档描述保持一致 by @minwe in https://github.com/umijs/umi/pull/9596
* 修复 locale 插件 intl 依赖丢失问题  by @sorrycc in https://github.com/umijs/umi/pull/9620
* 修复 overrides.less 和 antd 动态加载不兼容的问题  by @PeachScript in https://github.com/umijs/umi/pull/9595
* 修复 children 和 layout 混用导致的权限失效问题 by @chenshuai2144 in https://github.com/umijs/umi/pull/9587
* 文档 更新 MFSU faq by @sorrycc in https://github.com/umijs/umi/pull/9590

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.26...v4.0.27
## v4.0.26 - 2022-10-20T07:43:48Z - https://github.com/umijs/umi/releases/tag/v4.0.26 
## What's Changed
* 新增 qiankun 插件的 threshold 配置，避免低端机场景 prefetch 造成的 oom by @kuitos in https://github.com/umijs/umi/pull/9548
* 新增约定式 `overrides.less` 用于覆盖依赖样式，该文件内的样式表会被自动提升优先级 by @PeachScript in https://github.com/umijs/umi/pull/9527
* 新增源码检测规则，不允许从 `.umi` 下引入、以免构建出现问题 by @sorrycc in https://github.com/umijs/umi/pull/9553
* 修复 MFSU eager 模式挂载多余的 babel-plugin-import 导致编译失败的问题  by @stormslowly in https://github.com/umijs/umi/pull/9549
* 修复 MFSU eager 模式意外探测 `.umi-test` 目录的问题 by @stormslowly in https://github.com/umijs/umi/pull/9528
* 修复 layout 插件 routes 数据结构的兼容性问题 by @chenshuai2144 in https://github.com/umijs/umi/pull/9567
* 优化 MFSU eager 模式引起的 Node.js 运行时警告 by @fz6m in https://github.com/umijs/umi/pull/9534
* 优化 esbuild 压缩反向优化引起的兼容性问题，指定 esbuild 压缩产物目标为 es2015 by @sorrycc in https://github.com/umijs/umi/pull/9573

## New Contributors
* @maquannene made their first contribution in https://github.com/umijs/umi/pull/9557

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.25...v4.0.26
## v4.0.25 - 2022-10-13T09:00:51Z - https://github.com/umijs/umi/releases/tag/v4.0.25 
## What's Changed

* 新增 MFSU 模式默认开启 eager 模式 by @stormslowly in https://github.com/umijs/umi/pull/9490
* 新增 antd 插件支持 v5 的 theme token by @PeachScript in https://github.com/umijs/umi/pull/9509
* 修复 MFSU eager 模式下样式修改需要等待 5s 的问题 by @stormslowly in https://github.com/umijs/umi/pull/9489
* 修复 Link 组件透传 prefetch 导致的警告 by @wkeylin in https://github.com/umijs/umi/pull/9499
* 修复从隐藏目录下引入路由组件会产出隐藏 chunk 产物的问题 by @PeachScript in https://github.com/umijs/umi/pull/9498
* 修复 qiankun 插件的路由匹配问题 by @iamkun in https://github.com/umijs/umi/pull/9511
* 修复 MFSU eager 模式不支持 import() 语法的问题 by @stormslowly in https://github.com/umijs/umi/pull/9517

## New Contributors
* @iamkun made their first contribution in https://github.com/umijs/umi/pull/9511
* @wujunyi792 made their first contribution in https://github.com/umijs/umi/pull/9518

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.24...v4.0.25
## v4.0.24 - 2022-09-29T14:14:00Z - https://github.com/umijs/umi/releases/tag/v4.0.24 
## What's Changed
* Revert "Remove route from chenshuai2144" by @sorrycc in https://github.com/umijs/umi/pull/9471


**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.23...v4.0.24
## v4.0.23 - 2022-09-29T08:51:02Z - https://github.com/umijs/umi/releases/tag/v4.0.23 
## What's Changed

* 新增 valtio 插件, 欢迎尝鲜 [文档](https://umijs.org/docs/max/valtio) [示例](https://github.com/umijs/example-with-valtio)  by @sorrycc in https://github.com/umijs/umi/pull/9442
* 优化 access 插件, 子路由的访问权限码未设定继承父路由 by @sorrycc in https://github.com/umijs/umi/pull/9431
* 优化 MFSU 缓存损坏的情况下缓存恢复和错误提示 by @stormslowly in https://github.com/umijs/umi/pull/9433
* 优化 Dva 插件类型提示 by @xiaohuoni in https://github.com/umijs/umi/pull/9444
* 优化 chainWebpack 插件类型提示 by @Jetsly in https://github.com/umijs/umi/pull/9445
* 优化 ignoreMomentLocale 默认开启  by @xierenyuan in https://github.com/umijs/umi/pull/9466
* 修复 MFSU 支持 js 文件中使用 jsx 语法 by @stormslowly in https://github.com/umijs/umi/pull/9463
* 文档 优化插件 API 介绍  by @sogud in https://github.com/umijs/umi/pull/9441

## New Contributors
* @sogud made their first contribution in https://github.com/umijs/umi/pull/9441

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.22...v4.0.23
## v4.0.22 - 2022-09-22T09:38:19Z - https://github.com/umijs/umi/releases/tag/v4.0.22 
## What's Changed

* 新增 mpa 全局 layout 配置 by @sorrycc in https://github.com/umijs/umi/pull/9360
* 新增 mpa 支持配置全局入口文件 by @sorrycc in https://github.com/umijs/umi/pull/9395
* 新增 构建命令显示构建产物文件大小显示  by @fz6m in https://github.com/umijs/umi/pull/9259
* 新增 did-you-know 条目 by @stormslowly in https://github.com/umijs/umi/pull/9205
* 新增 dva 插件跳过模型文件校验配置 by @sorrycc in https://github.com/umijs/umi/pull/9388
* 新增 MFSU esbuild 下 对 wasm 支持 by @notcold in https://github.com/umijs/umi/pull/9366
* 新增 onRouteChange api 增加 basename 参数 by @sorrycc in https://github.com/umijs/umi/pull/9405
* 新增 babel 插件 classPropertiesLoose 的支持 by @xierenyuan in https://github.com/umijs/umi/pull/9413
* 新增 vite optimizeDeps 支持 dva$ 别名的写法 by @xierenyuan in https://github.com/umijs/umi/pull/9411
* 新增 对 npm worksspace monorepoRedirect 支持 by @sorrycc in https://github.com/umijs/umi/pull/9409
* 优化 node 版本 < v16.9.0 配置错误信息展示 by @stormslowly in https://github.com/umijs/umi/pull/9315
* 优化 MFSU 依赖缺失报错 by @stormslowly in https://github.com/umijs/umi/pull/9365
* 优化 vite 模式下禁用 polyfill，提升加载速度 by @xierenyuan in https://github.com/umijs/umi/pull/9371
* 修复 mpa 在 windows 下兼容性 by @fz6m in https://github.com/umijs/umi/pull/9348
* 修复 使用淘宝源依赖安装错误的问题 by @fz6m in https://github.com/umijs/umi/pull/9380
* 修复 乾坤插件对 rootElement 兜底 by @sorrycc in https://github.com/umijs/umi/pull/9414
* 文档  新增 一个 mpa 实例 by @arvinxx in https://github.com/umijs/umi/pull/9368

## New Contributors
* @notcold made their first contribution in https://github.com/umijs/umi/pull/9366

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.21...v4.0.22
## v4.0.21 - 2022-09-15T07:52:44Z - https://github.com/umijs/umi/releases/tag/v4.0.21 
## What's Changed
* 修复 client 产物对 `< react@16.14.0` 的兼容性 by @PeachScript
* 修复 `extraBabelIncludes` 不兼容 tnpm 安装目录的问题 by @PeachScript in https://github.com/umijs/umi/pull/9310
* 修复 generator 的 prompts 无法正确退出的问题 by @Binbiubiubiu in https://github.com/umijs/umi/pull/9302
* 修复 routes 配置组件路径为绝对路径时不能正常解析的问题 by @fz6m in https://github.com/umijs/umi/pull/9303

## New Contributors
* @wkeylin made their first contribution in https://github.com/umijs/umi/pull/9312
* @Binbiubiubiu made their first contribution in https://github.com/umijs/umi/pull/9302
* @2239559319 made their first contribution in https://github.com/umijs/umi/pull/9300

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.20...v4.0.21
## v4.0.20 - 2022-09-13T06:13:04Z - https://github.com/umijs/umi/releases/tag/v4.0.20 
## What's Changed
* 修复 `history.push` 和 `history.replace` 工作不正常的问题 by @fz6m in https://github.com/umijs/umi/pull/9296
* 支持通过 `DID_YOU_KNOW=none` 环境变量禁用『你知道吗？』 by @sorrycc in https://github.com/umijs/umi/pull/9279

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.19...v4.0.20
## v4.0.19 - 2022-09-08T09:56:34Z - https://github.com/umijs/umi/releases/tag/v4.0.19 
## What's Changed

* 新增配置 historyWithQuery，兼容方案，非必要不使用 by @sorrycc in https://github.com/umijs/umi/pull/9277
* 修复从 umi 中 import 的 history 的 location 不会更新的问题 by @sorrycc in https://github.com/umijs/umi/pull/9276
* 修复 tsconfig.json 的文件 include 问题 by @ye-will in https://github.com/umijs/umi/pull/9275
* 修复 layout 插件面包屑在设置 base 之后的跳转问题 by @wyy0512 in https://github.com/umijs/umi/pull/9173
* 修复 tailwind 插件的 bin 路径问题 by @fz6m in https://github.com/umijs/umi/pull/9255

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.18...v4.0.19
## v4.0.18 - 2022-09-07T08:45:59Z - https://github.com/umijs/umi/releases/tag/v4.0.18 
## What's Changed

* 新增 reactRouter5Compat 配置，启用 react-router 5 兼容模式，缺点是会有额外的 re-render by @xierenyuan @sorrycc in https://github.com/umijs/umi/pull/9240 https://github.com/umijs/umi/pull/9251
* 优化 layout 插件，默认使用 pro components by @chenshuai2144 in https://github.com/umijs/umi/pull/9085
* 优化 vite 模式下 proxy 的行为，和 webpack 模式下保持一致 by @xierenyuan in https://github.com/umijs/umi/pull/9206
* 修复 .umirc.ts 里 defineConfig 类型在 vscode 下不生效的问题 by @xiaohuoni in https://github.com/umijs/umi/pull/9246

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.17...v4.0.18
## v4.0.17 - 2022-09-01T13:09:30Z - https://github.com/umijs/umi/releases/tag/v4.0.17 
## What's Changed

* 优化 webpack 编译后产物，让 package.json 中有 version 属性 by @xierenyuan in https://github.com/umijs/umi/pull/9201
* 修复 qiankun 插件判断 isMasterApp 的逻辑问题 by @liangskyli in https://github.com/umijs/umi/pull/9203


**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.16...v4.0.17
## v4.0.16 - 2022-09-01T09:29:49Z - https://github.com/umijs/umi/releases/tag/v4.0.16 
## What's Changed

* 新增「你知道吗」贴士 by @sorrycc in https://github.com/umijs/umi/pull/9200
* 优化约定式路由，支持约定的 404 文件 by @zenotsai in https://github.com/umijs/umi/pull/9145
* 优化 qiankun 插件支持本地研发 by @HiLanXiao in https://github.com/umijs/umi/pull/8812
* 优化 mpa 模式，默认使用 config.json 作为 entry 配置 by @sorrycc in https://github.com/umijs/umi/pull/9115
* 优化 mpa 模式，支持通过 mpa.template 配置默认模板 by @sorrycc in https://github.com/umijs/umi/pull/9189
* 优化 MFSU 的 eager 模式，让依赖构建跑在 worker 里 by @stormslowly in https://github.com/umijs/umi/pull/9087
* 优化 run 命令，执行时支持参数 by @txp1035 in https://github.com/umijs/umi/pull/9175
* 优化 test 命令，改进插件相关测试 by @stormslowly in https://github.com/umijs/umi/pull/9131
* 优化 webpack hash 函数，使用 xxhash64 以提升性能 by @903040380 in https://github.com/umijs/umi/pull/9168
* 修复 legacy 配置不应该 transform 补丁的问题 by @fz6m in https://github.com/umijs/umi/pull/9129
* 修复 IBabelPlugin 类型定义 by @kingback in https://github.com/umijs/umi/pull/9133
* 修复 run 命令的 tsx bin 路径查找失败问题 by @fz6m in https://github.com/umijs/umi/pull/9152
* 修复 deadCode 功能 exclude 不工作的问题 by @fz6m in https://github.com/umijs/umi/pull/9155
* 修复 proxy 配置的类型定义 by @PeachScript in https://github.com/umijs/umi/pull/9139
* 修复 config 合并时可能意外修改了 defaultConfig 的问题 by @July-ing in https://github.com/umijs/umi/pull/9153
* 修复 plugin-docs 插件的搜索问题 by @txp1035 in https://github.com/umijs/umi/pull/8926
* 修复 plugin-docs 插件 classname 依赖丢失的问题 by @stormslowly in https://github.com/umijs/umi/pull/9180
* 修复 lint，升级 typescript-eslint 以兼容 TypeScript 4.8 by @PeachScript in https://github.com/umijs/umi/pull/9181

## New Contributors
* @HiLanXiao made their first contribution in https://github.com/umijs/umi/pull/8812
* @903040380 made their first contribution in https://github.com/umijs/umi/pull/9168

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.15...v4.0.16
## v4.0.15 - 2022-08-26T01:08:52Z - https://github.com/umijs/umi/releases/tag/v4.0.15 
## What's Changed

* 回滚 UMI_ENV 不能使用 dev、build 和 test 的问题，因为 antdpro 用了 dev，影响面比较大 by @sorrycc in https://github.com/umijs/umi/pull/9105
* 修复 umi-test 没有 transform 包含 jest.doMock 代码文件的问题 by @miracles1919 in https://github.com/umijs/umi/pull/9102

## New Contributors
* @miracles1919 made their first contribution in https://github.com/umijs/umi/pull/9102

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.14...v4.0.15
## v4.0.14 - 2022-08-25T08:18:07Z - https://github.com/umijs/umi/releases/tag/v4.0.14 
## What's Changed

* 新增 `legacy` 配置项一键支持非现代浏览器 by @fz6m in https://github.com/umijs/umi/pull/9028
* 新增 `umi run` 命令（基于 [`google/zx`](https://github.com/google/zx/)）以便用户能更高效地编写项目脚本 by @txp1035 in https://github.com/umijs/umi/pull/9014
* 新增 MPA 研发模式支持 https://github.com/umijs/umi/pull/9054
* 新增 MF 的 `safeMfLoad` API https://github.com/umijs/umi/pull/9067
* 新增 MF 的 React 高阶组件 `safeRemoteComponent` https://github.com/umijs/umi/pull/9083
* 新增 `antd@5` 支持 by @chenshuai2144 in https://github.com/umijs/umi/pull/9044
* 修复 Ant Design Pro 脚手架中 Mock 数据缺少 id 导致渲染异常的问题 by @lushevol in https://github.com/umijs/umi/pull/9011
* 修复 Vue.js 路由处理错误 by @xierenyuan in https://github.com/umijs/umi/pull/9022
* 修复构建初始化之前访问不到 ws 的问题 https://github.com/umijs/umi/pull/9029
* 修复 host 变更时 SSL 证书未更新的问题 https://github.com/umijs/umi/pull/9031
* 修复 MFSU 资源在非 localhost 环境下加载失败的问题 in https://github.com/umijs/umi/pull/9032
* 修复 Vue.js 项目包含未设置 `component` 路由会编译失败的问题 by @xierenyuan in https://github.com/umijs/umi/pull/9041
* 修复 cjs 模块在编译时会被处理为静态资源的问题 https://github.com/umijs/umi/pull/9056
* 修复 api routes 的 URL 数据编解码逻辑 by @Summrry-top in https://github.com/umijs/umi/pull/9058
* 修复嵌套路由的 index 路由路径 by @fz6m in https://github.com/umijs/umi/pull/9057
* 修复 `clientLoader` 在有 `base` 的时候无法工作的情况 by @zenotsai in https://github.com/umijs/umi/pull/9073
* 优化 `UMI_ENV` 能被设置为 `dev/test/prod` 的问题 by @fz6m in https://github.com/umijs/umi/pull/9069

## New Contributors
* @xiaohp made their first contribution in https://github.com/umijs/umi/pull/9013
* @lushevol made their first contribution in https://github.com/umijs/umi/pull/9011
* @Summrry-top made their first contribution in https://github.com/umijs/umi/pull/9058

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.13...v4.0.14
## v4.0.13 - 2022-08-18T06:30:38Z - https://github.com/umijs/umi/releases/tag/v4.0.13 
## What's Changed
* 新增 支持配置 publicPath 为 auto by @huarse in https://github.com/umijs/umi/pull/8983
* 优化 withRouter 参数变为可选 by @xierenyuan in https://github.com/umijs/umi/pull/8986
* 优化 request 插件导出 getRequestInstance by @komagic in https://github.com/umijs/umi/pull/9000
* 修复 mock 无法热更新的问题  (#8882) by @liangskyli in https://github.com/umijs/umi/pull/8927
* 修复 dev 地址显示问题 by @PeachScript in https://github.com/umijs/umi/pull/8979
* 修复 乾坤应用中重定向路由无法重定向的问题 by @PeachScript in https://github.com/umijs/umi/pull/8980
* 修复 jest 使用内置 esbuild transformer 收集不到覆盖率信息的问题 by @stormslowly in https://github.com/umijs/umi/pull/8913
* 文档 解释通配符路由在微应用下的意义 by @PeachScript in https://github.com/umijs/umi/pull/8993

## New Contributors
* @liangskyli made their first contribution in https://github.com/umijs/umi/pull/8927
* @huarse made their first contribution in https://github.com/umijs/umi/pull/8983
* @komagic made their first contribution in https://github.com/umijs/umi/pull/9000

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.12...v4.0.13
## v4.0.12 - 2022-08-11T08:05:06Z - https://github.com/umijs/umi/releases/tag/v4.0.12 
## What's Changed

* 新增 umi 包导出 generatePath 接口，reexport 自 react-router-dom by @ye-will in https://github.com/umijs/umi/pull/8925
* 优化 dev 启动 banner，加了个 Box 后更显眼了 by @PeachScript in https://github.com/umijs/umi/pull/8888
* 优化 mfsu 功能，让依赖编译也处理 `extraBabelIncludes` by @fz6m in https://github.com/umijs/umi/pull/8887
* 优化 verifyCommit 命令，支持所有 emoji by @drizzlesconsin in https://github.com/umijs/umi/pull/8924
* 优化 qiankun 插件，支持 insertBefore and appendChildTo by @sorrycc in https://github.com/umijs/umi/pull/8916
* 优化 docs 插件，支持 md 文件热更 by @xierenyuan in https://github.com/umijs/umi/pull/8947
* 修复 wrappers 没有继承 `layout: false` 属性的问题 by @fz6m in https://github.com/umijs/umi/pull/8908
* 修复 regenerate 依赖丢失的问题 by @sorrycc in https://github.com/umijs/umi/pull/8917
* 修复 layout 插件在 vite 模式下编译失败的问题 by @xierenyuan in https://github.com/umijs/umi/pull/8919
* 修复 runtimePublicPath 中 globalThis 的检测逻辑问题 by @PeachScript in https://github.com/umijs/umi/pull/8929
* 修复 CSSMinifier 和 Transpiler 的类型问题 by @drizzlesconsin in https://github.com/umijs/umi/pull/8923

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.11...v4.0.12
## v4.0.11 - 2022-08-04T13:33:11Z - https://github.com/umijs/umi/releases/tag/v4.0.11 
## What's Changed

* 优化 umi g test，自动开启 jsx: automatic by @stormslowly in https://github.com/umijs/umi/pull/8867
* 修复 dev 命令下使用 0.0.0.0 和代理可能冲突的问题 by @stormslowly in https://github.com/umijs/umi/pull/8872
* 修复 proxy 没有透传 origin 的问题 by @citrusjunoss in https://github.com/umijs/umi/pull/8877


**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.10...v4.0.11
## v4.0.10 - 2022-08-04T08:55:24Z - https://github.com/umijs/umi/releases/tag/v4.0.10 
## What's Changed

* 新增 defineApp 接口，让 app.ts 拥有类型 by @zenotsai in https://github.com/umijs/umi/pull/8802
* 新增 mf 插件，支持 umi 结合 module federation 使用 by @stormslowly in https://github.com/umijs/umi/pull/8450
* 优化 umi g tsconfig 命令，新增 react 和 react-dom 类型，同时处理 assets 资源 by @zzcan in https://github.com/umijs/umi/pull/8788
* 优化 verify-commit 命令的规则 by @zzcan in https://github.com/umijs/umi/pull/8774
* 优化 tailwindcss 插件，支持使用 APP_ROOT 的场景 by @yuaanlin in https://github.com/umijs/umi/pull/8776
* 优化 test 方案，支持 jsx automatic，配置开启 by @stormslowly in https://github.com/umijs/umi/pull/8863
* 优化 dev mode，publicPath 配置了 ./ 时直接报错 by @sorrycc in https://github.com/umijs/umi/pull/8775
* 修复 package.json 被监听时可能 crash 的问题 by @sorrycc in https://github.com/umijs/umi/pull/8777
* 修复 request 插件的类型问题 by @dohooo in https://github.com/umijs/umi/pull/8648
* 修复 mock 功能在 windows 下不能正常热更的问题 by @sorrycc in https://github.com/umijs/umi/pull/8842
* 修复带 * 的路由使用 wrappers 没有继承 * 功能的问题 by @fz6m in https://github.com/umijs/umi/pull/8790
* 修复嵌套空路由 Outlet Context 值丢失的问题 by @fz6m in https://github.com/umijs/umi/pull/8789
* 修复 regenerate 包多实例问题，这会导致正则 u Flag 不生效 by @YdreamW in https://github.com/umijs/umi/pull/8846
* 修复 mfsu 让依赖编译产物的 publicPath 为 auto by @stormslowly in https://github.com/umijs/umi/pull/8783
* 修复 vue preset 下，vue 依赖获取错误的问题 by @xierenyuan in https://github.com/umijs/umi/pull/8836
* 修复 vite 模式下插件或配置不能引用到 vite 的问题 by @xierenyuan in https://github.com/umijs/umi/pull/8835
* 修复 layout 插件的 RunTimeLayoutConfig 类型问题 by @hanzebang in https://github.com/umijs/umi/pull/8740
* 修复 locale 插件中 formatMessage 方法 g_intl 变量没有初始化的问题 by @YdreamW in https://github.com/umijs/umi/pull/8759
* 修复 locale 插件导出 API TS 类型失效的问题 by @YdreamW in https://github.com/umijs/umi/pull/8778
* 修复 locale 插件来自 react-intl 的部分 api 丢失的问题 by @kokiy in https://github.com/umijs/umi/pull/8822
* 修复 access 插件权限属性，使其兼容 umi 3 by @txp1035 in https://github.com/umijs/umi/pull/8757

## New Contributors
* @zenotsai made their first contribution in https://github.com/umijs/umi/pull/8760
* @YdreamW made their first contribution in https://github.com/umijs/umi/pull/8759
* @findmio made their first contribution in https://github.com/umijs/umi/pull/8795
* @juetan made their first contribution in https://github.com/umijs/umi/pull/8837
* @kokiy made their first contribution in https://github.com/umijs/umi/pull/8822
* @zhousg made their first contribution in https://github.com/umijs/umi/pull/8806

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.9...v4.0.10
## v4.0.9 - 2022-07-28T08:13:36Z - https://github.com/umijs/umi/releases/tag/v4.0.9 
## What's Changed
* 升级 babel 相关依赖到 7.18.x https://github.com/umijs/umi/pull/8702
* 升级 esbuild 到 0.14.49 https://github.com/umijs/umi/pull/8661
* 修复 antd 插件通过 env 开启时用户配置覆盖无效的问题 https://github.com/umijs/umi/pull/8694
* 修复 Linux 下 `mkcert` 检测异常的问题 by @OrekiSH in https://github.com/umijs/umi/pull/8707
* 修复 `public` 文件夹为空时仍然被拷贝到构建输出目录的问题 by @fz6m in https://github.com/umijs/umi/pull/8677
* 修复 `defineConfig` 中 `jsMinifier` 及各插件 key 的类型 https://github.com/umijs/umi/pull/8693
* 修复 `routes` 配置重定向后无法返回的问题 by @chenshuai2144 in https://github.com/umijs/umi/pull/8662
* 修复 Vue 项目中 SVG 仍然走 svgr 的问题 (resolve #8593) by @fz6m in https://github.com/umijs/umi/pull/8646
* 修复 locale 插件与 fastRefresh 共用偶现循环依赖的问题 https://github.com/umijs/umi/pull/8713
* 修复 `https` 配置项中 `key`、`cert` 不能正常工作的问题 by @xierenyuan in https://github.com/umijs/umi/pull/8716
* 修复 qiankun 场景下 React 18 unmount 失效的问题 by @xierenyuan in https://github.com/umijs/umi/pull/8715
* 修复 Vue 单文件组件在 MFSU 编译时 babel 缓存异常的问题 by @xierenyuan in https://github.com/umijs/umi/pull/8665
* 修复 qiankun 插件 `appNameKeyAlias` 参数的兼容性 https://github.com/umijs/umi/pull/8728
* 修复 MFSU 在修改路由配置时缓存概率性失效的问题 https://github.com/umijs/umi/pull/8727
* 修复 bundler-webpack HMR 失效的问题 https://github.com/umijs/umi/pull/8730
* 修复 `publicPath` 为绝对路径网址时 MFSU 的判断逻辑错误 by @kingback in https://github.com/umijs/umi/pull/8725
* 优化 bundler-vite 中 `less` 依赖的 patch 方式 https://github.com/umijs/umi/pull/8675
* 优化 create-umi 中 husky 及 monorepo 相关问题 by @fz6m in https://github.com/umijs/umi/pull/8683
* 优化 `styles` 配置项样式插入的位置，在 `umi.css` 之前 by @xierenyuan in https://github.com/umijs/umi/pull/8647
* 优化 `app.ts` 编译报错信息 https://github.com/umijs/umi/pull/8714
* 优化 bundler-vite 启动服务的日志输出颜色 @xierenyuan in https://github.com/umijs/umi/pull/8734

## New Contributors
* @OrekiSH made their first contribution in https://github.com/umijs/umi/pull/8707

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.8...v4.0.9
## v4.0.8 - 2022-07-21T07:39:07Z - https://github.com/umijs/umi/releases/tag/v4.0.8 
## What's Changed

* 新增 @umijs/codemod ，一键升级 Umi 3 项目到 Umi 4 by @sorrycc in https://github.com/umijs/umi/pull/8581
* 新增 使用 @umijs/case-sensitive-paths-webpack-plugin，彻底解决 mac OS 文件系统大小写不敏感问题 by @PeachScript in https://github.com/umijs/umi/pull/8556
* 新增  withRouter API by @xierenyuan in https://github.com/umijs/umi/pull/8546
* 新增 MFSU exclude 配置项 by @xierenyuan in https://github.com/umijs/umi/pull/8543
* 新增 支持 .env 文件变量展开 by @iamnotblank in https://github.com/umijs/umi/pull/8431
* HTML meta 信息支持配置  by @fz6m in https://github.com/umijs/umi/pull/8539
* 新增 proxy 支持 bypass 配置和 数组形式配置 by @sorrycc in https://github.com/umijs/umi/pull/8639
* 修复 request 类型定义 by @feibi in https://github.com/umijs/umi/pull/8544
* 修复 fork-ts-checker-webpack-plugin 无法使用的问题 by @xierenyuan in https://github.com/umijs/umi/pull/8584
* 修复 umi 框架 import 老版本 umi 和 umi 插件的错误 by @sorrycc in https://github.com/umijs/umi/pull/8585
* 修复 runtimePublicPath 对老版本浏览器的兼容问题  by @PeachScript in https://github.com/umijs/umi/pull/8650
* 修复 config 读取逻辑，.local 配置仅在 dev 阶段生效 by @xierenyuan in https://github.com/umijs/umi/pull/8579
* 修复 favicon 配置读取的错误 by @fz6m in https://github.com/umijs/umi/pull/8602
* 修复 NavigateWithParams 参数传递错误的问题 by @ye-will in https://github.com/umijs/umi/pull/8604
* 其他: 替换 tsc 使用 father 构建项目 by @PeachScript in https://github.com/umijs/umi/pull/8297

## New Contributors

* @feibi made their first contribution in https://github.com/umijs/umi/pull/8544
* @iamnotblank made their first contribution in https://github.com/umijs/umi/pull/8431
* @Fengjing95 made their first contribution in https://github.com/umijs/umi/pull/8575
* @cc7gs made their first contribution in https://github.com/umijs/umi/pull/8630

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.7...v4.0.8
## v4.0.7 - 2022-07-14T07:35:41Z - https://github.com/umijs/umi/releases/tag/v4.0.7 
## What's Changed

* 新增 cacheDirectoryPath 配置，默认是 `node_modules/.cache/umi` by @July-ing in https://github.com/umijs/umi/pull/8465
* 新增 FS_LOGGER 环境变量，配为 none 时不保存日志到物理文件 by @sorrycc in https://github.com/umijs/umi/pull/8512
* 优化 qiankun 插件支持 MicroAppWithMemoHistory by @xierenyuan in https://github.com/umijs/umi/pull/8508
* 优化 html 返回逻辑，对于 base path 总是返回 html by @PeachScript in https://github.com/umijs/umi/pull/8468
* 优化 preview 命令对于 base 配置的支持 by @xierenyuan in https://github.com/umijs/umi/pull/8464
* 优化 define 配置，默认添加 PUBLIC_PATH 指向开发者配置的 publicPath by @xierenyuan in https://github.com/umijs/umi/pull/8467
* 优化 api routes 对于 body 的解析，支持更多类型 by @yuaanlin in https://github.com/umijs/umi/pull/8432
* 优化 layout 插件和 wrappers 配置的兼容性 by @xierenyuan in https://github.com/umijs/umi/pull/8509
* 优化 preload 功能，同时支持 css 和 js 的预加载 by @KieSun in https://github.com/umijs/umi/pull/8378
* 优化 locale 插件，新增 addLocale 方法 by @sorrycc in https://github.com/umijs/umi/pull/8498
* 修复 svgr React Component 的类型问题 (resolve #8430) by @fz6m in https://github.com/umijs/umi/pull/8435
* 修复 request 插件类型定义 by @shiyiya in https://github.com/umijs/umi/pull/8473
* 修复本地 JS 文件 debug 路由的顺序问题 by @stormslowly in https://github.com/umijs/umi/pull/8445
* 修复 locale 插件的一处 lang 拼写错误 by @txp1035 in https://github.com/umijs/umi/pull/8507
* 修复 mock 文件解析失败后恢复的场景下不能 reload 成功的问题 by @sun0day in https://github.com/umijs/umi/pull/8511
* 修复约定式路由对于 $index 的处理问题 by @xiaohuoni in https://github.com/umijs/umi/pull/8510

## New Contributors

* @wanghaida made their first contribution in https://github.com/umijs/umi/pull/8489
* @shiyiya made their first contribution in https://github.com/umijs/umi/pull/8473
* @July-ing made their first contribution in https://github.com/umijs/umi/pull/8465
* @txp1035 made their first contribution in https://github.com/umijs/umi/pull/8507
* @sun0day made their first contribution in https://github.com/umijs/umi/pull/8511

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.6...v4.0.7
## v4.0.6 - 2022-07-07T08:22:46Z - https://github.com/umijs/umi/releases/tag/v4.0.6 
## What's Changed
* 新增 `clickToComponent` 配置项启用 [click-to-component](https://github.com/ericclemmons/click-to-component) by @cnyballk in https://github.com/umijs/umi/pull/8331
* 新增 plugin-docs 的锚点链接图标 by @ahwgs in https://github.com/umijs/umi/pull/8377
* create-umi 新增 `author` 字段 by @ahwgs in https://github.com/umijs/umi/pull/8348
* `api.logger` 支持 `debug` 方法 https://github.com/umijs/umi/pull/8413
* 不允许 max 项目依赖 umi https://github.com/umijs/umi/pull/8420
* 修复 plugin-docs 搜索结果中锚点链接失效的 bug https://github.com/umijs/umi/pull/8358
* 修复 `getAllLocales` 没有导出的问题 https://github.com/umijs/umi/pull/8368 Close #8338
* 修复 `useAccessMarkedRoutes` 的副作用依赖 by @xc1427 in https://github.com/umijs/umi/pull/8374
* 修复 `public/favicon` 无效的问题 by @fz6m in https://github.com/umijs/umi/pull/8372
* 修复配置式路由中 `redirect` 不能正确处理 URL Params 的问题 by @ye-will in https://github.com/umijs/umi/pull/8395
* 修复 max 错误提示中的框架名称 https://github.com/umijs/umi/pull/8422
* 使用 `localhost` 替代 `127.0.0.1` https://github.com/umijs/umi/pull/8367
* 优化 stylelint 规则，`className` 允许小驼峰命名 by @winedk in https://github.com/umijs/umi/pull/8308
* 优化 bundler-webpack，不压缩 `public` 目录下的文件 https://github.com/umijs/umi/pull/8362
* 优化 lint 命令，默认不启用 `quiet` 参数 Close #8269 
* 优化 `webpackChunkName`，基于模块路径生成 `chunkName` by @xierenyuan in https://github.com/umijs/umi/pull/8406
* 优化配置文件编译出错的错误日志 https://github.com/umijs/umi/pull/8386
* 移除 API Routes 的警告信息 https://github.com/umijs/umi/pull/8418

## New Contributors
* @winedk made their first contribution in https://github.com/umijs/umi/pull/8308
* @zzcan made their first contribution in https://github.com/umijs/umi/pull/8340
* @sakuraNouta made their first contribution in https://github.com/umijs/umi/pull/8415
* @ye-will made their first contribution in https://github.com/umijs/umi/pull/8395
* @sushi-su made their first contribution in https://github.com/umijs/umi/pull/8448

**Full Changelog**: https://github.com/umijs/umi/compare/v4.0.5...v4.0.6
## v4.0.4 - 2022-07-01T02:27:53Z - https://github.com/umijs/umi/releases/tag/v4.0.4 
🎉 恭喜 siyi98 成为新的 maintainer

🎸新增功能:

* `create-umi` 生成的脚手架项目默认开启 husky 和 lint-staged
* `create-umi` 生成的脚手架项目 `tsconfig.json` 继承 `.umi/tsconfig.json`
* mfsu 新增 eager 策略，使用[文档](https://umijs.org/docs/api/config#mfsu)
* layout 插件支持约定式 layout
* qiankun 插件支持 `MicroAppWithMemoHistory`
* 使用环境变量 HMR=none 关闭热更新功能

🐛修复：
* 修复 copy插件复制路径解析问题 https://github.com/umijs/umi/issues/8237
* 多语言插件导出 `getIntl` API
* 修复 `preview` 和 `dev` 下 `onProxyRes` 配置失效的问题
* 修复 jest 测试用例中无法 `import from 'umi'` 的问题
* 修复乾坤主应用懒加载兼容未导出 `default` 的子应用
* 修复 `umi lint` 在 ling-staged 无法获取参数的问题
* 修复 CSS loader 解析绝对路径图片的问题
* `EmptyRoute` 兼容 React 16.x
* 约定式 layout 文件支持 `.js` `.jsx` 文件
* 修复 vue 项目热更新失败的问题

📄文档更新: 
这里感谢所有提 PR 的小伙伴

## v4.0.2 - 2022-06-24T15:13:48Z - https://github.com/umijs/umi/releases/tag/v4.0.2 
修复 vue 模式下白屏的问题
修复非启用 ssr 插件时对于 parcel css 的强依赖，改用延迟 import 的方式
tailwindcss：修复 build 模式下可能找不到 tailwindcss.css 的情况