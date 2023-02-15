## v17.0.2 - 2021-03-22T22:00:26Z - https://github.com/facebook/react/releases/tag/v17.0.2 
### React DOM

* Remove an unused dependency to address the [`SharedArrayBuffer` cross-origin isolation warning](https://developer.chrome.com/blog/enabling-shared-array-buffer/). ([@koba04](https://github.com/koba04) and [@bvaughn](https://github.com/bvaughn) in [#20831](https://github.com/facebook/react/pull/20831), [#20832](https://github.com/facebook/react/pull/20832), and [#20840](https://github.com/facebook/react/pull/20840))

## Artifacts

- react: https://unpkg.com/react@17.0.2/umd/
- react-art: https://unpkg.com/react-art@17.0.2/umd/
- react-dom: https://unpkg.com/react-dom@17.0.2/umd/
- react-is: https://unpkg.com/react-is@17.0.2/umd/
- react-test-renderer: https://unpkg.com/react-test-renderer@17.0.2/umd/
- scheduler: https://unpkg.com/scheduler@0.20.2/umd/
## v17.0.1 - 2021-03-22T21:59:46Z - https://github.com/facebook/react/releases/tag/v17.0.1 
### React DOM

* Fix a crash in IE11. ([@gaearon](https://github.com/gaearon) in [#20071](https://github.com/facebook/react/pull/20071))

## v17.0.0 - 2020-10-20T20:45:11Z - https://github.com/facebook/react/releases/tag/v17.0.0 
Today, we are releasing React 17!

**[Learn more about React 17 and how to update to it on the official React blog.](https://reactjs.org/blog/2020/10/20/react-v17.html)**

### React

* Add `react/jsx-runtime` and `react/jsx-dev-runtime` for the [new JSX transform](https://babeljs.io/blog/2020/03/16/7.9.0#a-new-jsx-transform-11154-https-githubcom-babel-babel-pull-11154). ([@lunaruan](https://github.com/lunaruan) in [#18299](https://github.com/facebook/react/pull/18299))
* Build component stacks from native error frames. ([@sebmarkbage](https://github.com/sebmarkbage) in [#18561](https://github.com/facebook/react/pull/18561))
* Allow to specify `displayName` on context for improved stacks. ([@eps1lon](https://github.com/eps1lon) in [#18224](https://github.com/facebook/react/pull/18224))
* Prevent `'use strict'` from leaking in the UMD bundles. ([@koba04](https://github.com/koba04) in [#19614](https://github.com/facebook/react/pull/19614))
* Stop using `fb.me` for redirects. ([@cylim](https://github.com/cylim) in [#19598](https://github.com/facebook/react/pull/19598))

### React DOM

* Delegate events to roots instead of `document`. ([@trueadm](https://github.com/trueadm) in [#18195](https://github.com/facebook/react/pull/18195) and [others](https://github.com/facebook/react/pulls?q=is%3Apr+author%3Atrueadm+modern+event+is%3Amerged))
* Clean up all effects before running any next effects. ([@bvaughn](https://github.com/bvaughn) in [#17947](https://github.com/facebook/react/pull/17947))
* Run `useEffect` cleanup functions asynchronously. ([@bvaughn](https://github.com/bvaughn) in [#17925](https://github.com/facebook/react/pull/17925))
* Use browser `focusin` and `focusout` for `onFocus` and `onBlur`. ([@trueadm](https://github.com/trueadm) in [#19186](https://github.com/facebook/react/pull/19186))
* Make all `Capture` events use the browser capture phase. ([@trueadm](https://github.com/trueadm) in [#19221](https://github.com/facebook/react/pull/19221))
* Don't emulate bubbling of the `onScroll` event. ([@gaearon](https://github.com/gaearon) in [#19464](https://github.com/facebook/react/pull/19464))
* Throw if `forwardRef` or `memo` component returns `undefined`. ([@gaearon](https://github.com/gaearon) in [#19550](https://github.com/facebook/react/pull/19550))
* Remove event pooling. ([@trueadm](https://github.com/trueadm) in [#18969](https://github.com/facebook/react/pull/18969))
* Stop exposing internals that won’t be needed by React Native Web. ([@necolas](https://github.com/necolas) in [#18483](https://github.com/facebook/react/pull/18483))
* Attach all known event listeners when the root mounts. ([@gaearon](https://github.com/gaearon) in [#19659](https://github.com/facebook/react/pull/19659))
* Disable `console` in the second render pass of DEV mode double render. ([@sebmarkbage](https://github.com/sebmarkbage) in [#18547](https://github.com/facebook/react/pull/18547))
* Deprecate the undocumented and misleading `ReactTestUtils.SimulateNative` API. ([@gaearon](https://github.com/gaearon) in [#13407](https://github.com/facebook/react/pull/13407))
* Rename private field names used in the internals. ([@gaearon](https://github.com/gaearon) in [#18377](https://github.com/facebook/react/pull/18377))
* Don't call User Timing API in development. ([@gaearon](https://github.com/gaearon) in [#18417](https://github.com/facebook/react/pull/18417))
* Disable console during the repeated render in Strict Mode. ([@sebmarkbage](https://github.com/sebmarkbage) in [#18547](https://github.com/facebook/react/pull/18547))
* In Strict Mode, double-render components without Hooks too. ([@eps1lon](https://github.com/eps1lon) in [#18430](https://github.com/facebook/react/pull/18430))
* Allow calling `ReactDOM.flushSync` during lifecycle methods (but warn). ([@sebmarkbage](https://github.com/sebmarkbage) in [#18759](https://github.com/facebook/react/pull/18759))
* Add the `code` property to the keyboard event objects. ([@bl00mber](https://github.com/bl00mber) in [#18287](https://github.com/facebook/react/pull/18287))
* Add the `disableRemotePlayback` property for `video` elements. ([@tombrowndev](https://github.com/tombrowndev) in [#18619](https://github.com/facebook/react/pull/18619))
* Add the `enterKeyHint` property for `input` elements. ([@eps1lon](https://github.com/eps1lon) in [#18634](https://github.com/facebook/react/pull/18634))
* Warn when no `value` is provided to `<Context.Provider>`. ([@charlie1404](https://github.com/charlie1404) in [#19054](https://github.com/facebook/react/pull/19054))
* Warn when `memo` or `forwardRef` components return `undefined`. ([@bvaughn](https://github.com/bvaughn) in [#19550](https://github.com/facebook/react/pull/19550))
* Improve the error message for invalid updates. ([@JoviDeCroock](https://github.com/JoviDeCroock) in [#18316](https://github.com/facebook/react/pull/18316))
* Exclude forwardRef and memo from stack frames. ([@sebmarkbage](https://github.com/sebmarkbage) in [#18559](https://github.com/facebook/react/pull/18559))
* Improve the error message when switching between controlled and uncontrolled inputs. ([@vcarl](https://github.com/vcarl) in [#17070](https://github.com/facebook/react/pull/17070))
* Keep `onTouchStart`, `onTouchMove`, and `onWheel` passive. ([@gaearon](https://github.com/gaearon) in [#19654](https://github.com/facebook/react/pull/19654))
* Fix `setState` hanging in development inside a closed iframe. ([@gaearon](https://github.com/gaearon) in [#19220](https://github.com/facebook/react/pull/19220))
* Fix rendering bailout for lazy components with `defaultProps`. ([@jddxf](https://github.com/jddxf) in [#18539](https://github.com/facebook/react/pull/18539))
* Fix a false positive warning when `dangerouslySetInnerHTML` is `undefined`. ([@eps1lon](https://github.com/eps1lon) in [#18676](https://github.com/facebook/react/pull/18676))
* Fix Test Utils with non-standard `require` implementation. ([@just-boris](https://github.com/just-boris) in [#18632](https://github.com/facebook/react/pull/18632))
* Fix `onBeforeInput` reporting an incorrect `event.type`. ([@eps1lon](https://github.com/eps1lon) in [#19561](https://github.com/facebook/react/pull/19561))
* Fix `event.relatedTarget` reported as `undefined` in Firefox. ([@claytercek](https://github.com/claytercek) in [#19607](https://github.com/facebook/react/pull/19607))
* Fix "unspecified error" in IE11. ([@hemakshis](https://github.com/hemakshis) in [#19664](https://github.com/facebook/react/pull/19664))
* Fix rendering into a shadow root. ([@Jack-Works](https://github.com/Jack-Works) in [#15894](https://github.com/facebook/react/pull/15894))
* Fix `movementX/Y` polyfill with capture events. ([@gaearon](https://github.com/gaearon) in [#19672](https://github.com/facebook/react/pull/19672))
* Use delegation for `onSubmit` and `onReset` events. ([@gaearon](https://github.com/gaearon) in [#19333](https://github.com/facebook/react/pull/19333))
* Improve memory usage. ([@trueadm](https://github.com/trueadm) in [#18970](https://github.com/facebook/react/pull/18970))

### React DOM Server

* Make `useCallback` behavior consistent with `useMemo` for the server renderer. ([@alexmckenley](https://github.com/alexmckenley) in [#18783](https://github.com/facebook/react/pull/18783))
* Fix state leaking when a function component throws. ([@pmaccart](https://github.com/pmaccart) in [#19212](https://github.com/facebook/react/pull/19212))

### React Test Renderer

* Improve `findByType` error message. ([@henryqdineen](https://github.com/henryqdineen) in [#17439](https://github.com/facebook/react/pull/17439))

### Concurrent Mode (Experimental)

* Revamp the priority batching heuristics. ([@acdlite](https://github.com/acdlite) in [#18796](https://github.com/facebook/react/pull/18796))
* Add the `unstable_` prefix before the experimental APIs. ([@acdlite](https://github.com/acdlite) in [#18825](https://github.com/facebook/react/pull/18825))
* Remove `unstable_discreteUpdates` and `unstable_flushDiscreteUpdates`. ([@trueadm](https://github.com/trueadm) in [#18825](https://github.com/facebook/react/pull/18825))
* Remove the `timeoutMs` argument. ([@acdlite](https://github.com/acdlite) in [#19703](https://github.com/facebook/react/pull/19703))
* Disable `<div hidden />` prerendering in favor of a different future API. ([@acdlite](https://github.com/acdlite) in [#18917](https://github.com/facebook/react/pull/18917))
* Add `unstable_expectedLoadTime` to Suspense for CPU-bound trees. ([@acdlite](https://github.com/acdlite) in [#19936](https://github.com/facebook/react/pull/19936))
* Add an experimental `unstable_useOpaqueIdentifier` Hook. ([@lunaruan](https://github.com/lunaruan) in [#17322](https://github.com/facebook/react/pull/17322))
* Add an experimental `unstable_startTransition` API. ([@rickhanlonii](https://github.com/rickhanlonii) in [#19696](https://github.com/facebook/react/pull/19696))
* Using `act` in the test renderer no longer flushes Suspense fallbacks. ([@acdlite](https://github.com/acdlite) in [#18596](https://github.com/facebook/react/pull/18596))
* Use global render timeout for CPU Suspense. ([@sebmarkbage](https://github.com/sebmarkbage) in [#19643](https://github.com/facebook/react/pull/19643))
* Clear the existing root content before mounting. ([@bvaughn](https://github.com/bvaughn) in [#18730](https://github.com/facebook/react/pull/18730))
* Fix a bug with error boundaries. ([@acdlite](https://github.com/acdlite) in [#18265](https://github.com/facebook/react/pull/18265))
* Fix a bug causing dropped updates in a suspended tree. ([@acdlite](https://github.com/acdlite) in [#18384](https://github.com/facebook/react/pull/18384) and [#18457](https://github.com/facebook/react/pull/18457))
* Fix a bug causing dropped render phase updates. ([@acdlite](https://github.com/acdlite) in [#18537](https://github.com/facebook/react/pull/18537))
* Fix a bug in SuspenseList. ([@sebmarkbage](https://github.com/sebmarkbage) in [#18412](https://github.com/facebook/react/pull/18412))
* Fix a bug causing Suspense fallback to show too early. ([@acdlite](https://github.com/acdlite) in [#18411](https://github.com/facebook/react/pull/18411))
* Fix a bug with class components inside SuspenseList. ([@sebmarkbage](https://github.com/sebmarkbage) in [#18448](https://github.com/facebook/react/pull/18448))
* Fix a bug with inputs that may cause updates to be dropped. ([@jddxf](https://github.com/jddxf) in [#18515](https://github.com/facebook/react/pull/18515) and [@acdlite](https://github.com/acdlite) in [#18535](https://github.com/facebook/react/pull/18535))
* Fix a bug causing Suspense fallback to get stuck.  ([@acdlite](https://github.com/acdlite) in [#18663](https://github.com/facebook/react/pull/18663))
* Don't cut off the tail of a SuspenseList if hydrating. ([@sebmarkbage](https://github.com/sebmarkbage) in [#18854](https://github.com/facebook/react/pull/18854))
* Fix a bug in `useMutableSource` that may happen when `getSnapshot` changes. ([@bvaughn](https://github.com/bvaughn) in [#18297](https://github.com/facebook/react/pull/18297))
* Fix a tearing bug in `useMutableSource`. ([@bvaughn](https://github.com/bvaughn) in [#18912](https://github.com/facebook/react/pull/18912))
* Warn if calling setState outside of render but before commit. ([@sebmarkbage](https://github.com/sebmarkbage) in [#18838](https://github.com/facebook/react/pull/18838))

## Artifacts

- react: https://unpkg.com/react@17.0.1/umd/
- react-art: https://unpkg.com/react-art@17.0.1/umd/
- react-dom: https://unpkg.com/react-dom@17.0.1/umd/
- react-is: https://unpkg.com/react-is@17.0.1/umd/
- react-test-renderer: https://unpkg.com/react-test-renderer@17.0.1/umd/
- scheduler: https://unpkg.com/scheduler@0.20.1/umd/