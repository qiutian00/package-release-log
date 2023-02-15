## v3.5.36 - 2022-12-22T08:32:06Z - https://github.com/umijs/umi/releases/tag/v3.5.36 
- fix(bundler-webpack): compatibility of extraBabelIncludes config (#8811) e7e2688a0

https://github.com/umijs/umi/compare/v3.5.35...v3.5.36
## v3.5.35 - 2022-12-22T08:31:07Z - https://github.com/umijs/umi/releases/tag/v3.5.35 
- feat(umi): export deps that bigfish depend on (#9584) 47cbe0963
- feat(preset-built-in): add env to disable app runtime plugin (#9579) fa3f62a00
- dep(bundler-webpack): bump terser to 5.14.2 (#9242) 2636ef266
- dep(preset-built-in): bump ansi-html to ^0.0.8 (#9223) 7e79dfd38
- dep(preset-built-in): bump mime to 1.4.1 (#9209) 006fe5929

https://github.com/umijs/umi/compare/v3.5.34...v3.5.35
## v3.5.34 - 2022-09-01T09:40:59Z - https://github.com/umijs/umi/releases/tag/v3.5.34 
- fix(server): keep origin by default in proxy (#9193)  4fdf4782c

https://github.com/umijs/umi/compare/v3.5.33...v3.5.34
## v3.5.33 - 2022-08-25T07:37:33Z - https://github.com/umijs/umi/releases/tag/v3.5.33 
- fix(preset-built-in): babel warn from mfsu (#8949)  2fa6b5d34
- fix(server): 处理用户传入的自定义 proxyReq 回调 (#8874)  9cd06d848
- fix(server): remove dev server backlog limit (#8861)  597ac1378
- fix(server): proxy throw error 403 (#8828)  8cdb9bc69

https://github.com/umijs/umi/compare/v3.5.32...v3.5.33
## v3.5.32 - 2022-08-02T07:45:57Z - https://github.com/umijs/umi/releases/tag/v3.5.32 
## What's Changed
* fix(utils): utils resolve wrong babel preset when dev https://github.com/umijs/umi/pull/8826


**Full Changelog**: https://github.com/umijs/umi/compare/v3.5.31...v3.5.32
## v3.5.31 - 2022-07-29T02:28:03Z - https://github.com/umijs/umi/releases/tag/v3.5.31 
## What's Changed
* feat: enable [@umijs/case-sensitive-paths-webpack-plugin](https://github.com/umijs/case-sensitive-paths-webpack-plugin) https://github.com/umijs/umi/pull/8555


**Full Changelog**: https://github.com/umijs/umi/compare/v3.5.30...v3.5.31
## v3.5.30 - 2022-07-14T09:33:43Z - https://github.com/umijs/umi/releases/tag/v3.5.30 
## What's Changed
* Revert "fix(bundler-webpack): 修复 extraBabelIncludes 不能支持 htmlparser2 特例的问题" by @sorrycc in https://github.com/umijs/umi/pull/8536


**Full Changelog**: https://github.com/umijs/umi/compare/v3.5.29...v3.5.30
## v3.5.29 - 2022-07-14T07:52:17Z - https://github.com/umijs/umi/releases/tag/v3.5.29 
## What's Changed
* feat: Notify Umi3 update to Umi4 by @zzcan in https://github.com/umijs/umi/pull/8434
* feat: improve error message for guide to feedback by @timeTravelCYN in https://github.com/umijs/umi/pull/8492
* feat: upgrade babel org deps to 7.18.x by @PeachScript in https://github.com/umijs/umi/pull/8503
* Revert "feat: Notify Umi3 update to Umi4" by @sorrycc in https://github.com/umijs/umi/pull/8524
* fix(bundler-webpack): 修复 extraBabelIncludes 不能支持 htmlparser2 特例的问题 by @hanzebang in https://github.com/umijs/umi/pull/8480
* chore: correct release tag by @PeachScript in https://github.com/umijs/umi/pull/8458
* docs: umi3 repo link update by @stormslowly in https://github.com/umijs/umi/pull/8477

## New Contributors
* @hanzebang made their first contribution in https://github.com/umijs/umi/pull/8480

**Full Changelog**: https://github.com/umijs/umi/compare/v3.5.28...v3.5.29
## v3.5.28 - 2022-07-07T08:47:28Z - https://github.com/umijs/umi/releases/tag/v3.5.28 
## What's Changed
* fix(bundler-webpack): do not minimize files under publicPath https://github.com/umijs/umi/pull/8370
* fix(deps): cannot get lan ip in node 18 by @GoodbyeNJN in https://github.com/umijs/umi/pull/8153 Close #8133
* fix: declare @umijs/core in server & preset-built-in https://github.com/umijs/umi/pull/8425


**Full Changelog**: https://github.com/umijs/umi/compare/v3.5.27...v3.5.28
## v3.5.27 - 2022-07-04T05:37:04Z - https://github.com/umijs/umi/releases/tag/v3.5.27 
- fix(bundler-webpack): terser sourcmap option (#8365)  4076f3ac4
- fix(babel-preset): declare @umijs/utils in dependencies (#8345)  740e338bc
- fix: add contentType for devScripts.js (#8280)  20bbf8f4d

https://github.com/umijs/umi/compare/v3.5.27...v3.5.27
## v3.5.26 - 2022-06-08T09:12:30Z - https://github.com/umijs/umi/releases/tag/v3.5.26 
- feat(umi): export _getHtmlGenerator  20da0fdc0

https://github.com/umijs/umi/compare/v3.5.25...v3.5.26
## v3.5.25 - 2022-06-02T06:59:53Z - https://github.com/umijs/umi/releases/tag/v3.5.25 
- fix: inline mode build failed for worker-loader (#8130)  af0cf1995
- docs: update company name (#8113)  66bd29a3a

https://github.com/umijs/umi/compare/v3.5.24...v3.5.25
## v3.5.24 - 2022-05-19T08:02:59Z - https://github.com/umijs/umi/releases/tag/v3.5.24 
- fix(preset-built-in): react 18 version check (#8105)  3ad183f57
- fix(preset-built-in): absolute path in runtime plugin register (#7983)  61a97639c
- feat: Add react 18 support (#8031)  a87b92b61
- refactor(test): use builtin jsdom from jest (#8081)  82ae9171e
- docs: update site url for joi (#8020)  7b224cef9

https://github.com/umijs/umi/compare/v3.5.23...v3.5.24
## v3.5.23 - 2022-04-15T03:25:15Z - https://github.com/umijs/umi/releases/tag/v3.5.23 
- Revert &quot;fix(bundler-webpack): support node: prefix import (#7994)&quot; (#8022)  1aa26babd

https://github.com/umijs/umi/compare/v3.5.22...v3.5.23
## v3.5.22 - 2022-04-11T04:24:02Z - https://github.com/umijs/umi/releases/tag/v3.5.22 
- fix(bundler-webpack): support node: prefix import (#7994)  64d106f5e
- fix(deps): lock regenerate-unicode-properties to 9.0.0 (#7972)  311d721a9

https://github.com/umijs/umi/compare/v3.5.21...v3.5.22
## v3.5.21 - 2022-02-25T06:41:19Z - https://github.com/umijs/umi/releases/tag/v3.5.21 
- fix(deps): browserslists unexpected warning (#7852)  0c1e571f8
- refactor(babel-preset-umi): enable unicode-regex (#7837)  8fe169608
- chore: update yarn.lock  cf972fe75
- fix(babel-preset-umi): correct absoluteRuntime option (#7816)  ce3cde070
- doc: 文档符号修复 (#7726)  b9381b866
- feat: exportStatic support supportWin config (#7713)  820440f95
- docs: add plugin-antd-mobile (#7698)  d85583056
- fix(mfsu): 修复 dev 时读取字体/图片二进制文件使用 utf8 格式导致出错的问题 (#7684)  26646d581
- docs: plugin access (#7655)  ac6e72daf
- docs: Translation boost-compile-speed to English (#7419)  3faec3416
- chore: fix ci (#7443)  4e2c1d4ad

https://github.com/umijs/umi/compare/v3.5.20...v3.5.21
## v3.5.20 - 2021-09-28T05:56:20Z - https://github.com/umijs/umi/releases/tag/v3.5.20 
- fix(preset-built-in): mfsu monaco worker (#7397)  fe0229471

https://github.com/umijs/umi/compare/v3.5.19...v3.5.20
## v3.5.19 - 2021-09-17T05:10:44Z - https://github.com/umijs/umi/releases/tag/v3.5.19 
- fix: issue #7122 (#7299)  ec96ba906

https://github.com/umijs/umi/compare/v3.5.18...v3.5.19
## v3.5.18 - 2021-09-08T07:31:06Z - https://github.com/umijs/umi/releases/tag/v3.5.18 
- fix: add union type for fn (#7283)  30c09d28d
- Revert &quot;feat: add ssr.prerender configuration for umi build prerender (#7269)&quot; (#7282)  c15f5b609
- feat: add ssr.prerender configuration for umi build prerender (#7269)  d1ac759af
- feat: support avif file resolve (#7273)  badc5c703
- docs: update read more url (#7220)  7f8abd5e1
- fix: mfsu error because of filename config (#7248)  9e11d681f
- chore: add emoji (#7166)  cd22d37a3
- docs: add doc for autoCaptureError and errorBoundary api (#7191)  877aa8c5a
- fix(preset-built-in): ssr failed with node 10 (#7161)  696ab8992
- chore: remove hire dumi plugin  7882808f5

https://github.com/umijs/umi/compare/v3.5.17...v3.5.18
## v3.5.17 - 2021-08-11T05:28:45Z - https://github.com/umijs/umi/releases/tag/v3.5.17 
- fix: mfsu externals again (#7153)  8712b960e

https://github.com/umijs/umi/compare/v3.5.16...v3.5.17
## v3.5.16 - 2021-08-11T04:05:34Z - https://github.com/umijs/umi/releases/tag/v3.5.16 
- fix: mfsu externals support function and array (#7151)  23eec18da
- fix: mfsu problem with node built-in modules (#7146)  e9f5fe401
- optimize tip for `umi plugin` (#7116)  e4a8ac29a

https://github.com/umijs/umi/compare/v3.5.15...v3.5.16
## v3.5.15 - 2021-08-03T07:16:32Z - https://github.com/umijs/umi/releases/tag/v3.5.15 
- fix: code style problem caused by prettier (#7109)  b785b043b
- fix: mfsu deps on bigfish version (#7106)  0a3ce9ab5
- fix: mfsu filePath not found when module is set but not found (#7102)  a532587a4
- fix: mfsu none export when only has __esModule export (#7101)  e16476ea2
- fix: fix IRouteComponentProps type exports (#7073)  6c216416c

https://github.com/umijs/umi/compare/v3.5.14...v3.5.15
## v3.5.14 - 2021-07-27T02:47:49Z - https://github.com/umijs/umi/releases/tag/v3.5.14 
- fix(preset-built-in): fix mfsu assets mismatch with various publicPath (#7013) (#7044) (#7067)  be17b404a
- fix: mfsu rebuild when umi upgraded (#7068)  af4f22ca8
- fix: mfsu mime version, upgrade to 1.3.6 (#7065)  c0cfbaca6
- fix: mfsu auto export support cjs (#7064)  d8b97993f
- fix: mfsu clean queue after build complete (#7063)  ebaba69c4
- fix: resolve publicPath properly especially for electron env (#7013)  eca2f681d

https://github.com/umijs/umi/compare/v3.5.13...v3.5.14
## v3.5.13 - 2021-07-16T10:56:58Z - https://github.com/umijs/umi/releases/tag/v3.5.13 
- fix: mfsu unexpected key __mfsu  ffd85e9cf

https://github.com/umijs/umi/compare/v3.5.12...v3.5.13
## v3.5.12 - 2021-07-16T10:40:21Z - https://github.com/umijs/umi/releases/tag/v3.5.12 
- fix: mfsu support qiankun sandbox (#7014)  889657ae5
- docs: fix spelling mistakes (#7012)  b61d4f9a3

https://github.com/umijs/umi/compare/v3.5.11...v3.5.12
## v3.5.11 - 2021-07-15T10:20:46Z - https://github.com/umijs/umi/releases/tag/v3.5.11 
- fix: mfsu don&#39;t work with publicPath (#6995)  d4f0e9b1e

https://github.com/umijs/umi/compare/v3.5.10...v3.5.11
## v3.5.10 - 2021-07-14T09:51:48Z - https://github.com/umijs/umi/releases/tag/v3.5.10 
- fix: mfsu require warn ignore @babel/runtime  ef2f658e5

https://github.com/umijs/umi/compare/v3.5.9...v3.5.10
## v3.5.9 - 2021-07-14T08:28:33Z - https://github.com/umijs/umi/releases/tag/v3.5.9 
- fix: mfsu progress bar 99% (#6990)  4f2b6caa2
- feat: mfsu add export automatically when no export found (#6987)  c16e27807
- feat: mfsu warn require usage (#6984)  ef666f318
- feat: mfsu support assets files (#6981)  51adeef1a
- feat(mfsu): support webpack strict alias (#6972)  847351044
- fix: mfsu support native modules (#6977)  fcd6c4b1c
- fix: config history link typo (#6976)  de2645cef
- type: fix tsc ICreateMiddleware error (#6973)  4b76ef4ee
- chore: update yarn.lock  95857d7fa
- feat: mfsu improve error message when package.json not found (#6970)  6d1f287cc
- feat: mfsu wait request when deps is building (#6969)  04a16e107
- fix: mfsu doc typo (#6960)  b5e23f014
- fix: webpack 5 buffer undefined (#6956)  af4700a92
- fix: typecheck error while importing .json (#6947)  fb4b53b16

https://github.com/umijs/umi/compare/v3.5.8...v3.5.9
## v3.5.8 - 2021-07-09T10:13:40Z - https://github.com/umijs/umi/releases/tag/v3.5.8 
- fix: support json import in mfsu (#6942)  75c656288
- fix: mfsu should handle native module and APP_ROOT properly (#6932)  b4140f44d

https://github.com/umijs/umi/compare/v3.5.7...v3.5.8
## v3.5.7 - 2021-07-08T08:26:14Z - https://github.com/umijs/umi/releases/tag/v3.5.7 
- fix: mfsu chunks null  4768f0346

https://github.com/umijs/umi/compare/v3.5.6...v3.5.7
## v3.5.6 - 2021-07-08T07:56:32Z - https://github.com/umijs/umi/releases/tag/v3.5.6 
- feat: mfsu support config chunks (#6929)  2735bf742
- fix: mfsu disable library (#6928)  b26f57b8d
- fix: mfsu rebuild when externals changed (#6927)  7a2cb53aa
- fix: mfsu auto css modules transform should affect css only (#6925)  dde6e2352

https://github.com/umijs/umi/compare/v3.5.5...v3.5.6
## v3.5.5 - 2021-07-07T09:20:20Z - https://github.com/umijs/umi/releases/tag/v3.5.5 
- fix: mfsu support file parse with jsx and tsx (#6917)  987d70d1d
- fix: mfsu global css priority (#6912)  73925addf
- fix: fix package.json deps version (#6906)  481530b17
- fix(mini-css-extract-plugin): fix ES5语法 (#6908)  9e36ba769
- chore: mfsu show MFSU Enabled message for dev and build  79af351b6
- dep: upgrade es-module-lexer to 0.7.1 (#6911)  33baf0828

https://github.com/umijs/umi/compare/v3.5.4...v3.5.5
## v3.5.4 - 2021-07-06T10:24:47Z - https://github.com/umijs/umi/releases/tag/v3.5.4 
- fix: mfsu await require support export as default (#6907)  8560e91d2
- fix: mfsu fast refresh, and upgrade react-refresh to 0.10 (#6905)  80bd41003
- fix(mfsu): webpack export support (#6894)  67cada7f2
- fix: mfsu css priority problem again (#6903)  f32f96947
- docs(mfsu): update mfsu doc (#6876)  d70393736
- chore: code style for mfsu monaco-editor hack (#6899)  34541d019
- fix(mfsu): optimize monaco editor (#6842)  55f0ba983
- fix: mfsu css priority problem (#6898)  2edb7033a
- feat: enable top-level-await when webpack5 is configured (#6890)  c2e581307

https://github.com/umijs/umi/compare/v3.5.3...v3.5.4
## v3.5.3 - 2021-07-05T08:30:53Z - https://github.com/umijs/umi/releases/tag/v3.5.3 
- fix(mfsu): should build path error (#6872)  647fdf9fd
- fix: punycode.toASCII is not a function (#6871)  3245d681b
- ci: add emoji helper (#6861)  c95193a9e
- fix(mfsu): fix path is empty , mfsu will error (#6864)  c63d1b632

https://github.com/umijs/umi/compare/v3.5.2...v3.5.3
## v3.5.2 - 2021-07-02T10:26:15Z - https://github.com/umijs/umi/releases/tag/v3.5.2 
- Revert &quot;fix: mfsu don&#39;t support monorepo (#6857)&quot;  a67ade205
- docs: fix typo in api.zh-CN.md (#6858)  875eb37d1

https://github.com/umijs/umi/compare/v3.5.1...v3.5.2
## v3.5.1 - 2021-07-02T09:17:59Z - https://github.com/umijs/umi/releases/tag/v3.5.1 
- fix: mfsu don&#39;t support monorepo (#6857)  117c0d0d5
- feat: improve mfsu error handler (#6850)  4f6d8ff56
- feat: mfsu support config mfName (#6849)  358ab1e2a
- fix: mfsu don&#39;t support runtimePublicPath (#6847)  5f4ffdbb8
- fix: mfsu don&#39;t work with mpa mode (#6838)  841e59639
- fix: mfsu don&#39;t work when publicPath is set (#6836)  ca9baa306
- fix: mfsu svgr don&#39;t support windows (#6835)  2f89ace5b

https://github.com/umijs/umi/compare/v3.5.0...v3.5.1
## v3.5.0 - 2021-06-30T04:08:05Z - https://github.com/umijs/umi/releases/tag/v3.5.0 
## 详见：[《umi 3.5，让研发重新变得美好》](https://zhuanlan.zhihu.com/p/385272270)

## v3.5.0-beta.20 - 2021-06-29T02:24:02Z - https://github.com/umijs/umi/releases/tag/v3.5.0-beta.20 
- fix(mfsu): know bugs fix (#6815)  072cfd032
- fix: webpack 5 should target es5 (#6816)  c58497aa9
- fix: mfsu exportAllMembers support empty array (#6813)  93d198f47

https://github.com/umijs/umi/compare/v3.5.0-beta.19...v3.5.0-beta.20
## v3.5.0-beta.19 - 2021-06-28T09:35:02Z - https://github.com/umijs/umi/releases/tag/v3.5.0-beta.19 
- feat: mfsu support export all in project files (#6812)  28c35397d
- fix: mfsu babel plugin don&#39;t match webpack loader syntax (#6811)  468df7a37

https://github.com/umijs/umi/compare/v3.5.0-beta.18...v3.5.0-beta.19
## v3.5.0-beta.18 - 2021-06-28T07:42:12Z - https://github.com/umijs/umi/releases/tag/v3.5.0-beta.18 
- fix: mfsu babel plugin export transform (#6810)  0e4e0e8e1
- fix(mfsu):mfsu improve 28 (#6809)  47bea3fce
- docs(mfsu): mfsu en doc (#6803)  387db0be8
- docs: update mfsu docs (#6767)  d0e7474fb

https://github.com/umijs/umi/compare/v3.5.0-beta.17...v3.5.0-beta.18
## v3.5.0-beta.17 - 2021-06-26T07:56:13Z - https://github.com/umijs/umi/releases/tag/v3.5.0-beta.17 
- fix(mfsu): no parse css file (#6800)  5f82c9757
- fix: mfsu getFilePath with package.json point to directory (#6802)  aadb4ae17

https://github.com/umijs/umi/compare/v3.5.0-beta.16...v3.5.0-beta.17
## v3.5.0-beta.16 - 2021-06-26T05:32:57Z - https://github.com/umijs/umi/releases/tag/v3.5.0-beta.16 
- fix: mfsu lock chunks to umi (#6799)  628b2e77
- fix: mfsu invalid package version found (#6798)  ea1215e5
- chore: remove addDepInfo (#6796)  172e5b8e
- fix: mfsu webpack_modules is not defined when import deps is changed (#6795)  cb86addc

https://github.com/umijs/umi/compare/v3.5.0-beta.15...v3.5.0-beta.16
## v3.5.0-beta.15 - 2021-06-25T14:45:39Z - https://github.com/umijs/umi/releases/tag/v3.5.0-beta.15 
- feat: support bigfish  551aaed3
- fix: import-to-await-require alias  70dc1851
- fix: runtimePublicPathEntry should not include react require (#6794)  5732b767

https://github.com/umijs/umi/compare/v3.5.0-beta.14...v3.5.0-beta.15
## v3.5.0-beta.14 - 2021-06-25T09:32:39Z - https://github.com/umijs/umi/releases/tag/v3.5.0-beta.14 
- fix: mfsu don&#39;t support dep with browser field  6d95e04f

https://github.com/umijs/umi/compare/v3.5.0-beta.13...v3.5.0-beta.14
## v3.5.0-beta.13 - 2021-06-25T09:19:00Z - https://github.com/umijs/umi/releases/tag/v3.5.0-beta.13 
- fix: improve the logic of find file of importFrom (#6791)  e8616049
- fix: throw onCompileDone error and fix mfsu error stack (#6788)  791ac579

https://github.com/umijs/umi/compare/v3.5.0-beta.12...v3.5.0-beta.13
## v3.5.0-beta.12 - 2021-06-25T06:55:40Z - https://github.com/umijs/umi/releases/tag/v3.5.0-beta.12 
- fix: cjs esm parse in mfsu (#6787)  e20c3242
- feat: only show mfsu ad when mfsu is not enabled (#6784)  3c23f5ce

https://github.com/umijs/umi/compare/v3.5.0-beta.11...v3.5.0-beta.12
## v3.5.0-beta.11 - 2021-06-24T15:53:32Z - https://github.com/umijs/umi/releases/tag/v3.5.0-beta.11 
- fix(mfsu): dumi redirect (#6781)  b15bb026
- fix(mfsu): windows support (#6779)  04c56ecb
- feat(mfsu): adapt cjs mode esm (#6765)  412aa13b

https://github.com/umijs/umi/compare/v3.5.0-beta.10...v3.5.0-beta.11
## v3.5.0-beta.10 - 2021-06-24T08:00:00Z - https://github.com/umijs/umi/releases/tag/v3.5.0-beta.10 
- feat: mfsu enable webpack5 and dynamicImport by default (#6777)  ee67a4db
- fix: mfsu don&#39;t work with svg as react component (#6776)  9587a9a9
- chore: add mfsu ad when dev server is slow (#6773)  63a2e8bd
- fix: mfsu don&#39;t work with externals config (#6772)  513fe026
- fix: webpack 5 don&#39;t work when APP_ROOT is used (#6771)  e9e4eb51

https://github.com/umijs/umi/compare/v3.5.0-beta.9...v3.5.0-beta.10
## v3.5.0-beta.9 - 2021-06-23T10:28:09Z - https://github.com/umijs/umi/releases/tag/v3.5.0-beta.9 
- feat: improve mfsu (#6762)  e664d153

https://github.com/umijs/umi/compare/v3.5.0-beta.8...v3.5.0-beta.9
## v3.5.0-beta.8 - 2021-06-23T02:42:37Z - https://github.com/umijs/umi/releases/tag/v3.5.0-beta.8 
- feat: improve mfsu (#6758)  28ecae7d

https://github.com/umijs/umi/compare/v3.5.0-beta.7...v3.5.0-beta.8
## v3.5.0-beta.7 - 2021-06-22T13:43:17Z - https://github.com/umijs/umi/releases/tag/v3.5.0-beta.7 
- feat: improve mfsu (#6747)  2d8c8b70

https://github.com/umijs/umi/compare/v3.5.0-beta.6...v3.5.0-beta.7