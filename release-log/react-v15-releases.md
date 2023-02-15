## v15.7.0 - 2020-10-14T19:57:17Z - https://github.com/facebook/react/releases/tag/v15.7.0 
### React

* Backport support for the [new JSX transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) to 15.x. ([@lunaruan](https://github.com/lunaruan) in [#18299](https://github.com/facebook/react/pull/18299) and [@gaearon](https://github.com/gaearon) in [#20024](https://github.com/facebook/react/pull/20024))

## v15.6.2 - 2017-11-15T13:16:04Z - https://github.com/facebook/react/releases/tag/v15.6.2 
# 15.6.2 (September 25, 2017)

### All Packages

* Switch from BSD + Patents to MIT license

### React DOM

* Fix a bug where modifying `document.documentMode` would trigger IE detection in other browsers, breaking change events. ([@aweary](https://github.com/aweary) in [#10032](https://github.com/facebook/react/pull/10032))
* CSS Columns are treated as unitless numbers. ([@aweary](https://github.com/aweary) in [#10115](https://github.com/facebook/react/pull/10115))
* Fix bug in QtWebKit when wrapping synthetic events in proxies. ([@walrusfruitcake](https://github.com/walrusfruitcake) in [#10115](https://github.com/facebook/react/pull/10011))
* Prevent event handlers from receiving extra argument in development. ([@aweary](https://github.com/aweary) in [#10115](https://github.com/facebook/react/pull/8363))
* Fix cases where `onChange` would not fire with `defaultChecked` on radio inputs. ([@jquense](https://github.com/jquense) in [#10156](https://github.com/facebook/react/pull/10156))
* Add support for `controlList` attribute to DOM property whitelist ([@nhunzaker](https://github.com/nhunzaker) in [#9940](https://github.com/facebook/react/pull/9940))
* Fix a bug where creating an element with a ref in a constructor did not throw an error in development. ([@iansu](https://github.com/iansu) in [#10025](https://github.com/facebook/react/pull/10025))
## v15.6.1 - 2017-06-15T14:21:20Z - https://github.com/facebook/react/releases/tag/v15.6.1 
## 15.6.1 (June 14, 2017)

### React DOM

* Fix a crash on iOS Safari. ([@jquense](https://github.com/jquense) in [#9960](https://github.com/facebook/react/pull/9960))
* Don't add `px` to custom CSS property values. ([@TrySound](https://github.com/TrySound) in [#9966](https://github.com/facebook/react/pull/9966))
## v15.6.0 - 2017-06-13T18:01:17Z - https://github.com/facebook/react/releases/tag/v15.6.0 
## 15.6.0 (June 13, 2017)

### React

* Downgrade deprecation warnings to use `console.warn` instead of `console.error`. ([@flarnie](https://github.com/flarnie) in [#9753](https://github.com/facebook/react/pull/9753))
* Add a deprecation warning for `React.createClass`. Points users to `create-react-class` instead. ([@flarnie](https://github.com/flarnie) in [#9771](https://github.com/facebook/react/pull/9771))
* Add deprecation warnings and separate module for `React.DOM` factory helpers. ([@nhunzaker](https://github.com/nhunzaker) in [#8356](https://github.com/facebook/react/pull/8356))
* Warn for deprecation of `React.createMixin` helper, which was never used. ([@aweary](https://github.com/aweary) in [#8853](https://github.com/facebook/react/pull/8853))

### React DOM

* Add support for CSS variables in `style` attribute. ([@aweary](https://github.com/aweary) in [#9302](https://github.com/facebook/react/pull/9302))
* Add support for CSS Grid style properties. ([@ericsakmar](https://github.com/ericsakmar) in [#9185](https://github.com/facebook/react/pull/9185))
* Fix bug where inputs mutated value on type conversion. ([@nhunzaker](https://github.com/mhunzaker) in [#9806](https://github.com/facebook/react/pull/9806))
* Fix issues with `onChange` not firing properly for some inputs. ([@jquense](https://github.com/jquense) in [#8575](https://github.com/facebook/react/pull/8575))
* Fix bug where controlled number input mistakenly allowed period. ([@nhunzaker](https://github.com/nhunzaker) in [#9584](https://github.com/facebook/react/pull/9584))
* Fix bug where performance entries were being cleared. ([@chrisui](https://github.com/chrisui) in [#9451](https://github.com/facebook/react/pull/9451))

### React Addons

* Fix AMD support for addons depending on `react`. ([@flarnie](https://github.com/flarnie) in [#9919](https://github.com/facebook/react/issues/9919))
* Fix `isMounted()` to return `true` in `componentWillUnmount`. ([@mridgway](https://github.com/mridgway) in [#9638](https://github.com/facebook/react/issues/9638))
* Fix `react-addons-update` to not depend on native `Object.assign`. ([@gaearon](https://github.com/gaearon) in [#9937](https://github.com/facebook/react/pull/9937))
* Remove broken Google Closure Compiler annotation from `create-react-class`. ([@gaearon](https://github.com/gaearon) in [#9933](https://github.com/facebook/react/pull/9933))
* Remove unnecessary dependency from `react-linked-input`. ([@gaearon](https://github.com/gaearon) in [#9766](https://github.com/facebook/react/pull/9766))
* Point `react-addons-(css-)transition-group` to the new package. ([@gaearon](https://github.com/gaearon) in [#9937](https://github.com/facebook/react/pull/9937))
## v15.5.4 - 2017-05-01T16:20:19Z - https://github.com/facebook/react/releases/tag/v15.5.4 
## 15.5.4 (April 11, 2017)

### React Addons
* **Critical Bugfix:** Update the version of `prop-types` to fix critical bug.  ([@gaearon](https://github.com/gaearon) in [545c87f](https://github.com/facebook/react/commit/545c87fdc348f82eb0c3830bef715ed180785390))
* Fix `react-addons-create-fragment` package to include `loose-envify` transform for Browserify users. ([@mridgway](https://github.com/mridgway) in [#9642](https://github.com/facebook/react/pull/9642))

### React Test Renderer
* Fix compatibility with Enzyme by exposing `batchedUpdates` on shallow renderer. ([@gaearon](https://github.com/gaearon) in [#9382](https://github.com/facebook/react/commit/69933e25c37cf5453a9ef132177241203ee8d2fd))
## v15.5.3 - 2017-05-01T16:19:43Z - https://github.com/facebook/react/releases/tag/v15.5.3 
## 15.5.3 (April 7, 2017)

**Note: this release has a critical issue and was deprecated. Please update to 15.5.4 or higher.**

### React Addons
* Fix `react-addons-create-fragment` package to export correct thing. ([@gaearon](https://github.com/gaearon) in [#9385](https://github.com/facebook/react/pull/9383))
* Fix `create-react-class` package to include `loose-envify` transform for Browserify users. ([@mridgway](https://github.com/mridgway) in [#9642](https://github.com/facebook/react/pull/9642))
## v15.5.2 - 2017-05-01T16:19:06Z - https://github.com/facebook/react/releases/tag/v15.5.2 
## 15.5.2 (April 7, 2017)

**Note: this release has a critical issue and was deprecated. Please update to 15.5.4 or higher.**

### React Addons
* Fix the production single-file builds to not include the development code. ([@gaearon](https://github.com/gaearon) in [#9385](https://github.com/facebook/react/pull/9383))
* Apply better minification to production single-file builds. ([@gaearon](https://github.com/gaearon) in [#9385](https://github.com/facebook/react/pull/9383))
* Add missing and remove unnecessary dependencies to packages. ([@gaearon](https://github.com/gaearon) in [#9385](https://github.com/facebook/react/pull/9383))
## v15.5.1 - 2017-05-01T16:16:18Z - https://github.com/facebook/react/releases/tag/v15.5.1 
## 15.5.1 (April 7, 2017)

**Note: this release has a critical issue and was deprecated. Please update to 15.5.4 or higher.**

### React
* Fix erroneous PropTypes access warning. ([@acdlite](https://github.com/acdlite) in ([ec97ebb](https://github.com/facebook/react/commit/ec97ebbe7f15b58ae2f1323df39d06f119873344))
## v15.5.0 - 2017-04-07T21:43:16Z - https://github.com/facebook/react/releases/tag/v15.5.0 
## 15.5.0 (April 7, 2017)

**Note: this release has a critical issue and was deprecated. Please update to 15.5.4 or higher.**

### React

* Added a deprecation warning for `React.createClass`. Points users to create-react-class instead. ([@acdlite](https://github.com/acdlite) in [d9a4fa4](https://github.com/facebook/react/commit/d9a4fa4f51c6da895e1655f32255cf72c0fe620e))
* Added a deprecation warning for `React.PropTypes`. Points users to prop-types instead. ([@acdlite](https://github.com/acdlite) in [043845c](https://github.com/facebook/react/commit/043845ce75ea0812286bbbd9d34994bb7e01eb28))
* Fixed an issue when using `ReactDOM` together with `ReactDOMServer`. ([@wacii](https://github.com/wacii) in [#9005](https://github.com/facebook/react/pull/9005))
* Fixed issue with Closure Compiler. ([@anmonteiro](https://github.com/anmonteiro) in [#8895](https://github.com/facebook/react/pull/8895))
* Another fix for Closure Compiler. ([@Shastel](https://github.com/Shastel) in [#8882](https://github.com/facebook/react/pull/8882))
* Added component stack info to invalid element type warning. ([@n3tr](https://github.com/n3tr) in [#8495](https://github.com/facebook/react/pull/8495))

### React DOM

* Fixed Chrome bug when backspacing in number inputs. ([@nhunzaker](https://github.com/nhunzaker) in [#7359](https://github.com/facebook/react/pull/7359))
* Added `react-dom/test-utils`, which exports the React Test Utils. ([@bvaughn](https://github.com/bvaughn))

### React Test Renderer

* Fixed bug where `componentWillUnmount` was not called for children. ([@gre](https://github.com/gre) in [#8512](https://github.com/facebook/react/pull/8512))
* Added `react-test-renderer/shallow`, which exports the shallow renderer. ([@bvaughn](https://github.com/bvaughn))

### React Addons

* Last release for addons; they will no longer be actively maintained.
* Removed `peerDependencies` so that addons continue to work indefinitely. ([@acdlite](https://github.com/acdlite) and [@bvaughn](https://github.com/bvaughn) in [8a06cd7](https://github.com/facebook/react/commit/8a06cd7a786822fce229197cac8125a551e8abfa) and [67a8db3](https://github.com/facebook/react/commit/67a8db3650d724a51e70be130e9008806402678a))
* Updated to remove references to `React.createClass` and `React.PropTypes` ([@acdlite](https://github.com/acdlite) in [12a96b9](https://github.com/facebook/react/commit/12a96b94823d6b6de6b1ac13bd576864abd50175))
* `react-addons-test-utils` is deprecated. Use `react-dom/test-utils` and `react-test-renderer/shallow` instead. ([@bvaughn](https://github.com/bvaughn))
## v15.4.2 - 2017-01-06T20:32:46Z - https://github.com/facebook/react/releases/tag/v15.4.2 
## 15.4.2 (January 6, 2017)

### React
- Fixed build issues with the Brunch bundler. ([@gaearon](https://github.com/gaearon) in [#8686](https://github.com/facebook/react/pull/8686))
- Improved error messages for invalid element types. ([@spicyj](https://github.com/spicyj) in [#8612](https://github.com/facebook/react/pull/8612))
- Removed a warning about `getInitialState` when `this.state` is set. ([@bvaughn](https://github.com/bvaughn) in [#8594](https://github.com/facebook/react/pull/8594))
- Removed some dead code. ([@diegomura](https://github.com/diegomura) in [#8050](https://github.com/facebook/react/pull/8050), [@dfrownfelter](https://github.com/dfrownfelter) in [#8597](https://github.com/facebook/react/pull/8597))

### React DOM
- Fixed a decimal point issue on uncontrolled number inputs. ([@nhunzaker](https://github.com/nhunzaker) in [#7750](https://github.com/facebook/react/pull/7750))
- Fixed rendering of textarea placeholder in IE11. ([@aweary](https://github.com/aweary) in [#8020](https://github.com/facebook/react/pull/8020))
- Worked around a script engine bug in IE9. ([@eoin](https://github.com/eoin) in [#8018](https://github.com/facebook/react/pull/8018))

### React Addons
- Fixed build issues in RequireJS and SystemJS environments. ([@gaearon](https://github.com/gaearon) in [#8686](https://github.com/facebook/react/pull/8686))
- Added missing package dependencies. ([@kweiberth](https://github.com/kweiberth) in [#8467](https://github.com/facebook/react/pull/8467))

## v15.4.1 - 2016-11-23T02:01:23Z - https://github.com/facebook/react/releases/tag/v15.4.1 
### React
- Restructure variable assignment to work around a Rollup bug ([@gaearon](https://github.com/gaearon) in [#8384](https://github.com/facebook/react/pull/8384))

### React DOM
- Fixed event handling on disabled button elements ([@spicyj](https://github.com/spicyj) in [#8387](https://github.com/facebook/react/pull/8387))
- Fixed compatibility of browser build with AMD environments ([@zpao](https://github.com/zpao) in [#8374](https://github.com/facebook/react/pull/8374))

## v15.4.0 - 2016-11-16T14:37:23Z - https://github.com/facebook/react/releases/tag/v15.4.0 
### React
- React package and browser build no longer "secretly" includes React DOM. ([@sebmarkbage](https://github.com/sebmarkbage) in [#7164](https://github.com/facebook/react/pull/7164) and [#7168](https://github.com/facebook/react/pull/7168))
- Required PropTypes now fail with specific messages for null and undefined. ([@chenglou](https://github.com/chenglou) in [#7291](https://github.com/facebook/react/pull/7291))
- Improved development performance by freezing children instead of copying. ([@keyanzhang](https://github.com/keyanzhang) in [#7455](https://github.com/facebook/react/pull/7455))

### React DOM
- Fixed occasional test failures when React DOM is used together with shallow renderer. ([@goatslacker](https://github.com/goatslacker) in [#8097](https://github.com/facebook/react/pull/8097))
- Added a warning for invalid `aria-` attributes. ([@jessebeach](https://github.com/jessebeach) in [#7744](https://github.com/facebook/react/pull/7744))
- Added a warning for using `autofocus` rather than `autoFocus`. ([@hkal](https://github.com/hkal) in [#7694](https://github.com/facebook/react/pull/7694))
- Removed an unnecessary warning about polyfilling `String.prototype.split`. ([@nhunzaker](https://github.com/nhunzaker) in [#7629](https://github.com/facebook/react/pull/7629))
- Clarified the warning about not calling PropTypes manually. ([@jedwards1211](https://github.com/jedwards1211) in [#7777](https://github.com/facebook/react/pull/7777))
- The unstable `batchedUpdates` API now passes the wrapped function's return value through. ([@bgnorlov](https://github.com/bgnorlov) in [#7444](https://github.com/facebook/react/pull/7444))
- Fixed a bug with updating text in IE 8. ([@mnpenner](https://github.com/mnpenner) in [#7832](https://github.com/facebook/react/pull/7832))

### React Perf
- When ReactPerf is started, you can now view the relative time spent in components as a chart in Chrome Timeline. ([@gaearon](https://github.com/gaearon) in [#7549](https://github.com/facebook/react/pull/7549))

### React Test Utils
- If you call `Simulate.click()` on a `<input disabled onClick={foo} />` then `foo` will get called whereas it didn't before. ([@nhunzaker](https://github.com/nhunzaker) in [#7642](https://github.com/facebook/react/pull/7642))

### React Test Renderer
- Due to packaging changes, it no longer crashes when imported together with React DOM in the same file. ([@sebmarkbage](https://github.com/sebmarkbage) in [#7164](https://github.com/facebook/react/pull/7164) and [#7168](https://github.com/facebook/react/pull/7168))
- `ReactTestRenderer.create()` now accepts `{createNodeMock: element => mock}` as an optional argument so you can mock refs with snapshot testing. ([@Aweary](https://github.com/Aweary) in [#7649](https://github.com/facebook/react/pull/7649), [#8261](https://github.com/facebook/react/pull/8261))

## v15.3.2 - 2016-09-19T17:54:25Z - https://github.com/facebook/react/releases/tag/v15.3.2 
### React
- Remove plain object warning from React.createElement & React.cloneElement. ([@spudly](https://github.com/spudly) in [#7724](https://github.com/facebook/react/pull/7724))

### React DOM
- Add `playsInline` to supported HTML attributes. ([@reaperhulk](https://github.com/reaperhulk) in [#7519](https://github.com/facebook/react/pull/7519))
- Add `as` to supported HTML attributes. ([@kevinslin](https://github.com/kevinslin) in [#7582](https://github.com/facebook/react/pull/7582))
- Improve DOM nesting validation warning about whitespace. ([@spicyj](https://github.com/spicyj) in [#7515](https://github.com/facebook/react/pull/7515))
- Avoid "Member not found" exception in IE10 when calling `preventDefault()` in Synthetic Events. ([@g-palmer](https://github.com/g-palmer) in [#7411](https://github.com/facebook/react/pull/7411))
- Fix memory leak in `onSelect` implementation. ([@AgtLucas](https://github.com/AgtLucas) in [#7533](https://github.com/facebook/react/pull/7533))
- Improve robustness of `document.documentMode` checks to handle Google Tag Manager. ([@SchleyB](https://github.com/SchleyB) in [#7594](https://github.com/facebook/react/pull/7594))
- Add more cases to controlled inputs warning. ([@marcin-mazurek](https://github.com/marcin-mazurek) in [#7544](https://github.com/facebook/react/pull/7544))
- Handle case of popup blockers overriding `document.createEvent`. ([@Andarist](https://github.com/Andarist) in [#7621](https://github.com/facebook/react/pull/7621))
- Fix issue with `dangerouslySetInnerHTML` and SVG in Internet Explorer. ([@zpao](https://github.com/zpao) in [#7618](https://github.com/facebook/react/pull/7618))
- Improve handling of Japanese IME on Internet Explorer. ([@msmania](https://github.com/msmania) in [#7107](https://github.com/facebook/react/pull/7107))

### React Test Renderer
- Support error boundaries. ([@millermedeiros](https://github.com/millermedeiros) in [#7558](https://github.com/facebook/react/pull/7558), [#7569](https://github.com/facebook/react/pull/7569), [#7619](https://github.com/facebook/react/pull/7619))
- Skip null ref warning. ([@Aweary](https://github.com/Aweary) in [#7658](https://github.com/facebook/react/pull/7658))

### React Perf Add-on
- Ensure lifecycle timers are stopped on errors. ([@gaearon](https://github.com/gaearon) in [#7548](https://github.com/facebook/react/pull/7548))

## v15.3.1 - 2016-08-19T18:52:36Z - https://github.com/facebook/react/releases/tag/v15.3.1 
### React
- Improve performance of development builds in various ways. ([@gaearon](https://github.com/gaearon) in [#7461](https://github.com/facebook/react/pull/7461), [#7463](https://github.com/facebook/react/pull/7463), [#7483](https://github.com/facebook/react/pull/7483), [#7488](https://github.com/facebook/react/pull/7488), [#7491](https://github.com/facebook/react/pull/7491), [#7510](https://github.com/facebook/react/pull/7510))
- Cleanup internal hooks to improve performance of development builds. ([@gaearon](https://github.com/gaearon) in [#7464](https://github.com/facebook/react/pull/7464), [#7472](https://github.com/facebook/react/pull/7472), [#7481](https://github.com/facebook/react/pull/7481), [#7496](https://github.com/facebook/react/pull/7496))
- Upgrade fbjs to pick up another performance improvement from [@gaearon](https://github.com/gaearon) for development builds. ([@zpao](https://github.com/zpao) in [#7532](https://github.com/facebook/react/pull/7532))
- Improve startup time of React in Node. ([@zertosh](https://github.com/zertosh) in [#7493](https://github.com/facebook/react/pull/7493))
- Improve error message of `React.Children.only`. ([@spicyj](https://github.com/spicyj) in [#7514](https://github.com/facebook/react/pull/7514))

### React DOM
- Avoid `<input>` validation warning from browsers when changing `type`. ([@nhunzaker](https://github.com/nhunzaker) in [#7333](https://github.com/facebook/react/pull/7333))
- Avoid "Member not found" exception in IE10 when calling `stopPropagation()` in Synthetic Events. ([@nhunzaker](https://github.com/nhunzaker) in [#7343](https://github.com/facebook/react/pull/7343))
- Fix issue resulting in inability to update some `<input>` elements in mobile browsers. ([@keyanzhang](https://github.com/keyanzhang) in [#7397](https://github.com/facebook/react/pull/7397))
- Fix memory leak in server rendering. ([@keyanzhang](https://github.com/keyanzhang) in [#7410](https://github.com/facebook/react/pull/7410))
- Fix issue resulting in `<input type="range">` values not updating when changing `min` or `max`. ([@troydemonbreun](https://github.com/troydemonbreun) in [#7486](https://github.com/facebook/react/pull/7486))
- Add new warning for rare case of attempting to unmount a container owned by a different copy of React. ([@ventuno](https://github.com/ventuno) in [#7456](https://github.com/facebook/react/pull/7456))

### React Test Renderer
- Fix ReactTestInstance::toJSON() with empty top-level components. ([@Morhaus](https://github.com/Morhaus) in [#7523](https://github.com/facebook/react/pull/7523))

### React Native Renderer
- Change `trackedTouchCount` invariant into a console.error for better reliability. ([@yungsters](https://github.com/yungsters) in [#7400](https://github.com/facebook/react/pull/7400))

## v15.3.0 - 2016-07-29T18:46:39Z - https://github.com/facebook/react/releases/tag/v15.3.0 
### React
- Add `React.PureComponent` - a new base class to extend, replacing `react-addons-pure-render-mixin` now that mixins don't work with ES2015 classes. ([@spicyj](https://github.com/spicyj) in [#7195](https://github.com/facebook/react/pull/7195))
- Add new warning when modifying `this.props.children`. ([@jimfb](https://github.com/jimfb) in [#7001](https://github.com/facebook/react/pull/7001))
- Fixed issue with ref resolution order. ([@gaearon](https://github.com/gaearon) in [#7101](https://github.com/facebook/react/pull/7101))
- Warn when mixin is undefined. ([@swaroopsm](https://github.com/swaroopsm) in [#6158](https://github.com/facebook/react/pull/6158))
- Downgrade "unexpected batch number" invariant to a warning. ([@spicyj](https://github.com/spicyj) in [#7133](https://github.com/facebook/react/pull/7133))
- Validate arguments to `oneOf` and `oneOfType` PropTypes sooner. ([@troydemonbreun](https://github.com/troydemonbreun) in [#6316](https://github.com/facebook/react/pull/6316))
- Warn when calling PropTypes directly. ([@Aweary](https://github.com/Aweary) in [#7132](https://github.com/facebook/react/pull/7132), [#7194](https://github.com/facebook/react/pull/7194))
- Improve warning when using Maps as children. ([@keyanzhang](https://github.com/keyanzhang) in [#7260](https://github.com/facebook/react/pull/7260))
- Add additional type information to the `PropTypes.element` warning. ([@alexzherdev](https://github.com/alexzherdev) in [#7319](https://github.com/facebook/react/pull/7319))
- Improve component identification in no-op `setState` warning. ([@keyanzhang](https://github.com/keyanzhang) in [#7326](https://github.com/facebook/react/pull/7326))

### React DOM
- Fix issue with nested server rendering. ([@Aweary](https://github.com/Aweary) in [#7033](https://github.com/facebook/react/pull/7033))
- Add `xmlns`, `xmlnsXlink` to supported SVG attributes. ([@salzhrani](https://github.com/salzhrani) in [#6471](https://github.com/facebook/react/pull/6471))
- Add `referrerPolicy` to supported HTML attributes. ([@Aweary](https://github.com/Aweary) in [#7274](https://github.com/facebook/react/pull/7274))
- Fix issue resulting in `<input type="range">` initial value being rounded. ([@troydemonbreun](https://github.com/troydemonbreun) in [#7251](https://github.com/facebook/react/pull/7251))

### React Test Renderer
- Initial public release of package allowing more focused testing. Install with `npm install react-test-renderer`. ([@spicyj](https://github.com/spicyj) in [#6944](https://github.com/facebook/react/pull/6944), [#7258](https://github.com/facebook/react/pull/7258), [@iamdustan](https://github.com/iamdustan) in [#7362](https://github.com/facebook/react/pull/7362))

### React Perf Add-on
- Fix issue resulting in excessive warnings when encountering an internal measurement error. ([@sassanh](https://github.com/sassanh) in [#7299](https://github.com/facebook/react/pull/7299))

### React TestUtils Add-on
- Implement `type` property on for events created via `TestUtils.Simulate.*`. ([@yaycmyk](https://github.com/yaycmyk) in [#6154](https://github.com/facebook/react/pull/6154))
- Fix crash when running TestUtils with the production build of React. ([@gaearon](https://github.com/gaearon) in [#7246](https://github.com/facebook/react/pull/7246))

## v15.2.1 - 2016-07-08T22:45:33Z - https://github.com/facebook/react/releases/tag/v15.2.1 
### React
- Fix errant warning about missing React element. ([@gaearon](https://github.com/gaearon) in [#7193](https://github.com/facebook/react/pull/7193))
- Better removal of dev-only code, leading to a small reduction in the minified production bundle size. ([@gaearon](https://github.com/gaearon) in [#7188](https://github.com/facebook/react/pull/7188), [#7189](https://github.com/facebook/react/pull/7189))

### React DOM
- Add stack trace to null input value warning. ([@jimfb](https://github.com/jimfb) in [#7040](https://github.com/facebook/react/pull/7040))
- Fix webcomponents example. ([@jalexanderfox](https://github.com/jalexanderfox) in [#7057](https://github.com/facebook/react/pull/7057))
- Fix `unstable_renderSubtreeIntoContainer` so that context properly updates when linked to state. ([@gaearon](https://github.com/gaearon) in [#7125](https://github.com/facebook/react/pull/7125))
- Improve invariant wording for void elements. ([@starkch](https://github.com/starkch) in [#7066](https://github.com/facebook/react/pull/7066))
- Ensure no errors are thrown due to event handlers in server rendering. ([@rricard](https://github.com/rricard) in [#7127](https://github.com/facebook/react/pull/7127))
- Fix regression resulting in `value`-less submit and reset inputs removing the browser-default text. ([@zpao](https://github.com/zpao) in [#7197](https://github.com/facebook/react/pull/7197))
- Fix regression resulting in empty `name` attribute being added to inputs when not provided. ([@okonet](https://github.com/okonet) in [#7199](https://github.com/facebook/react/pull/7199))
- Fix issue with nested server rendering. ([@Aweary](https://github.com/Aweary) in [#7033](https://github.com/facebook/react/pull/7033))

### React Perf Add-on
- Make `ReactPerf.start()` work properly during lifecycle methods. ([@gaearon](https://github.com/gaearon) in [#7208](https://github.com/facebook/react/pull/7208)).

### React CSSTransitionGroup Add-on
- Fix issue resulting in spurious unknown property warnings. ([@batusai513](https://github.com/batusai513) in [#7165](https://github.com/facebook/react/pull/7165))

### React Native Renderer
- Improve error handling in cross-platform touch event handling. ([@yungsters](https://github.com/yungsters) in [#7143](https://github.com/facebook/react/pull/7143))

## v15.2.0 - 2016-07-01T19:03:22Z - https://github.com/facebook/react/releases/tag/v15.2.0 
### React
- Add error codes to production invariants, with links to the view the full error text. ([@keyanzhang](https://github.com/keyanzhang) in [#6948](https://github.com/facebook/react/pull/6948))
- Include component stack information in PropType validation warnings. ([@spicyj](https://github.com/spicyj) in [#6771](https://github.com/facebook/react/pull/6771))
- Include component stack information in key warnings. ([@keyanzhang](https://github.com/keyanzhang) in [#6799](https://github.com/facebook/react/pull/6799))
- Stop validating props at mount time, only validate at element creation. ([@keyanzhang](https://github.com/keyanzhang) in [#6823](https://github.com/facebook/react/pull/6823))
- New invariant providing actionable error in missing instance case. ([@yungsters](https://github.com/yungsters) in [#6990](https://github.com/facebook/react/pull/6990))
- Add `React.PropTypes.symbol` to support ES2015 Symbols as props. ([@puradox](https://github.com/puradox) in [#6377](https://github.com/facebook/react/pull/6377))
- Fix incorrect coercion of ref or key that are undefined in development ([@gaearon](https://github.com/gaearon) in [#6880](https://github.com/facebook/react/pull/6880))
- Fix a false positive when passing other element’s props to cloneElement ([@ericmatthys](https://github.com/ericmatthys) in [#6268](https://github.com/facebook/react/pull/6268))

### React DOM
- Add warning for unknown properties on DOM elements. ([@jimfb](https://github.com/jimfb) in [#6800](https://github.com/facebook/react/pull/6800), [@gm758](https://github.com/gm758) in [#7152](https://github.com/facebook/react/pull/7152))
- Properly remove attributes from custom elements. ([@grassator](https://github.com/grassator) in [#6748](https://github.com/facebook/react/pull/6748))
- Fix invalid unicode escape in attribute name regular expression. ([@nbjahan](https://github.com/nbjahan) in [#6772](https://github.com/facebook/react/pull/6772))
- Add `onLoad` handling to `<link>` element. ([@roderickhsiao](https://github.com/roderickhsiao) in [#6815](https://github.com/facebook/react/pull/6815))
- Add `onError` handling to `<source>` element. ([@wadahiro](https://github.com/wadahiro) in [#6941](https://github.com/facebook/react/pull/6941))
- Handle `value` and `defaultValue` more accurately in the DOM. ([@jimfb](https://github.com/jimfb) in [#6406](https://github.com/facebook/react/pull/6406))
- Fix events issue in environments with mutated `Object.prototype`. ([@Weizenlol](https://github.com/Weizenlol) in [#6886](https://github.com/facebook/react/pull/6886))
- Fix issue where `is="null"` ended up in the DOM in Firefox. ([@darobin](https://github.com/darobin) in [#6896](https://github.com/facebook/react/pull/6896))
- Improved performance of text escaping by using [escape-html](https://github.com/component/escape-html). ([@aickin](https://github.com/aickin) in [#6862](https://github.com/facebook/react/pull/6862))
- Fix issue with `dangerouslySetInnerHTML` and SVG in Internet Explorer. ([@joshhunt](https://github.com/joshhunt) in [#6982](https://github.com/facebook/react/pull/6982))
- Fix issue with `<textarea>` placeholders. ([@jimfb](https://github.com/jimfb) in [#7002](https://github.com/facebook/react/pull/7002))
- Fix controlled vs uncontrolled detection of `<input type="radio"/>`. ([@jimfb](https://github.com/jimfb) in [#7003](https://github.com/facebook/react/pull/7003))
- Improve performance of updating text content. ([@trueadm](https://github.com/trueadm) in [#7005](https://github.com/facebook/react/pull/7005))
- Ensure controlled `<select>` components behave the same on initial render as they do on updates. ([@yiminghe](https://github.com/yiminghe) in [#5362](https://github.com/facebook/react/pull/5362))

### React Perf Add-on
- Add `isRunning()` API. ([@nfcampos](https://github.com/nfcampos) in [#6763](https://github.com/facebook/react/pull/6763))
- Improve accuracy of lifecycle hook timing. ([@gaearon](https://github.com/gaearon) in [#6858](https://github.com/facebook/react/pull/6858))
- Fix internal errors when using ReactPerf with portal components. ([@gaearon](https://github.com/gaearon) in [#6860](https://github.com/facebook/react/pull/6860))
- Fix performance regression. ([@spicyj](https://github.com/spicyj) in [#6770](https://github.com/facebook/react/pull/6770))
- Add warning that ReactPerf is not enabled in production. ([@sashashakun](https://github.com/sashashakun) in [#6884](https://github.com/facebook/react/pull/6884))

### React CSSTransitionGroup Add-on
- Fix timing issue with `null` node. ([@keyanzhang](https://github.com/keyanzhang) in [#6958](https://github.com/facebook/react/pull/6958))

### React Native Renderer
- Dependencies on React Native modules use CommonJS requires instead of providesModule. ([@davidaurelio](https://github.com/davidaurelio) in [#6715](https://github.com/facebook/react/pull/6715))

## v15.1.0 - 2016-05-20T23:18:26Z - https://github.com/facebook/react/releases/tag/v15.1.0 
### React
- Ensure we're using the latest `object-assign`, which has protection against a non-spec-compliant native `Object.assign`. ([@zpao](https://github.com/zpao) in [#6681](https://github.com/facebook/react/pull/6681))
- Add a new warning to communicate that `props` objects passed to `createElement` must be plain objects. ([@richardscarrott](https://github.com/richardscarrott) in [#6134](https://github.com/facebook/react/pull/6134))
- Fix a batching bug resulting in some lifecycle methods incorrectly being called multiple times. ([@spicyj](https://github.com/spicyj) in [#6650](https://github.com/facebook/react/pull/6650))

### React DOM
- Fix regression in custom elements support. ([@jscissr](https://github.com/jscissr) in [#6570](https://github.com/facebook/react/pull/6570))
- Stop incorrectly warning about using `onScroll` event handler with server rendering. ([@Aweary](https://github.com/Aweary) in [#6678](https://github.com/facebook/react/pull/6678))
- Fix grammar in the controlled input warning. ([@jakeboone02](https://github.com/jakeboone02) in [#6657](https://github.com/facebook/react/pull/6657))
- Fix issue preventing `<object>` nodes from being able to read `<param>` nodes in IE. ([@syranide](https://github.com/syranide) in [#6691](https://github.com/facebook/react/pull/6691))
- Fix issue resulting in crash when using experimental error boundaries with server rendering. ([@jimfb](https://github.com/jimfb) in [#6694](https://github.com/facebook/react/pull/6694))
- Add additional information to the controlled input warning. ([@borisyankov](https://github.com/borisyankov) in [#6341](https://github.com/facebook/react/pull/6341))

### React Perf Add-on
- Completely rewritten to collect data more accurately and to be easier to maintain. ([@gaearon](https://github.com/gaearon) in [#6647](https://github.com/facebook/react/pull/6647), [#6046](https://github.com/facebook/react/pull/6046))

### React Native Renderer
- Remove some special cases for platform specific branching. ([@sebmarkbage](https://github.com/sebmarkbage) in [#6660](https://github.com/facebook/react/pull/6660))
- Remove use of `merge` utility. ([@sebmarkbage](https://github.com/sebmarkbage) in [#6634](https://github.com/facebook/react/pull/6634))
- Renamed some modules to better indicate usage ([@javache](https://github.com/javache) in [#6643](https://github.com/facebook/react/pull/6643))

## v15.0.2 - 2016-04-30T00:42:36Z - https://github.com/facebook/react/releases/tag/v15.0.2 
### React
- Removed extraneous files from npm package. ([@gaearon](https://github.com/gaearon) in [#6388](https://github.com/facebook/react/pull/6388))
- Ensure `componentWillUnmount` is only called once. ([@jimfb](https://github.com/jimfb) in [#6613](https://github.com/facebook/react/pull/6613))

### ReactDOM
- Fixed bug resulting in disabled buttons responding to mouse events in IE. ([@nhunzaker](https://github.com/nhunzaker) in [#6215](https://github.com/facebook/react/pull/6215))
- Ensure `<option>`s are correctly selected when inside `<optgroup>`. ([@trevorsmith](https://github.com/trevorsmith) in [#6442](https://github.com/facebook/react/pull/6442))
- Restore support for rendering into a shadow root. ([@Wildhoney](https://github.com/Wildhoney) in [#6462](https://github.com/facebook/react/pull/6462))
- Ensure nested `<body>` elements are caught when warning for invalid markup. ([@keyanzhang](https://github.com/keyanzhang) in [#6469](https://github.com/facebook/react/pull/6469))
- Improve warning when encountering multiple elements with the same key. ([@hkal](https://github.com/hkal) in [#6500](https://github.com/facebook/react/pull/6500))

### React TestUtils Add-on
- Ensure that functional components do not have an owner. ([@gaearon](https://github.com/gaearon) in [#6362](https://github.com/facebook/react/pull/6362))
- Handle invalid arguments to `scryRenderedDOMComponentsWithClass` better. ([@ipeters90](https://github.com/ipeters90) in [#6529](https://github.com/facebook/react/pull/6529))

### React Perf Add-on
- Ignore DOM operations that occur outside the batch operation. ([@gaearon](https://github.com/gaearon) in [#6516](https://github.com/facebook/react/pull/6516))

### React Native Renderer
- These files are now shipped inside the React npm package. They have no impact on React core or ReactDOM.

## v15.0.1 - 2016-04-08T18:33:15Z - https://github.com/facebook/react/releases/tag/v15.0.1 
### React
- Restore `React.__spread` API to unbreak code compiled with some tools making use of this undocumented API. It is now officially deprecated. ([@zpao](https://github.com/zpao) in [#6444](https://github.com/facebook/react/pull/6444))

### ReactDOM
- Fixed issue resulting in loss of cursor position in controlled inputs. ([@spicyj](https://github.com/spicyj) in [#6449](https://github.com/facebook/react/pull/6449))

## v15.0.0 - 2016-04-08T16:05:25Z - https://github.com/facebook/react/releases/tag/v15.0.0 
### Major changes
- **Initial render now uses `document.createElement` instead of generating HTML.** Previously we would generate a large string of HTML and then set `node.innerHTML`. At the time, this was decided to be faster than using `document.createElement` for the majority of cases and browsers that we supported. Browsers have continued to improve and so overwhelmingly this is no longer true. By using `createElement` we can make other parts of React faster. ([@spicyj](https://github.com/spicyj) in [#5205](https://github.com/facebook/react/pull/5205))
- **`data-reactid` is no longer on every node.** As a result of using `document.createElement`, we can prime the node cache as we create DOM nodes, allowing us to skip a potential lookup (which used the `data-reactid` attribute). Root nodes will have a `data-reactroot` attribute and server generated markup will still contain `data-reactid`. ([@spicyj](https://github.com/spicyj) in [#5205](https://github.com/facebook/react/pull/5205))
- **No more extra `<span>`s.** ReactDOM will now render plain text nodes interspersed with comment nodes that are used for demarcation. This gives us the same ability to update individual pieces of text, without creating extra nested nodes. If you were targeting these `<span>`s in your CSS, you will need to adjust accordingly. You can always render them explicitly in your components. ([@mwiencek](https://github.com/mwiencek) in [#5753](https://github.com/facebook/react/pull/5753))
- **Rendering `null` now uses comment nodes.** Previously `null` would render to `<noscript>` elements. We now use comment nodes. This may cause issues if making use of `:nth-child` CSS selectors. While we consider this rendering behavior an implementation detail of React, it's worth noting the potential problem. ()[@spicyj](https://github.com/spicyj) in [#5451](https://github.com/facebook/react/pull/5451))
- **Functional components can now return `null`.** We added support for [defining stateless components as functions](/react/blog/2015/09/10/react-v0.14-rc1.html#stateless-function-components) in React 0.14. However, React 0.14 still allowed you to define a class component without extending `React.Component` or using `React.createClass()`, so [we couldn’t reliably tell if your component is a function or a class](https://github.com/facebook/react/issues/5355), and did not allow returning `null` from it. This issue is solved in React 15, and you can now return `null` from any component, whether it is a class or a function. ([@jimfb](https://github.com/jimfb) in [#5884](https://github.com/facebook/react/pull/5884))
- **Improved SVG support.** All SVG tags are now fully supported. (Uncommon SVG tags are not present on the `React.DOM` element helper, but JSX and `React.createElement` work on all tag names.) All SVG attributes that are implemented by the browsers should be supported too. If you find any attributes that we have missed, please [let us know in this issue](https://github.com/facebook/react/issues/1657). ([@zpao](https://github.com/zpao) in [#6243](https://github.com/facebook/react/pull/6243))

### Breaking changes
- **No more extra `<span>`s.**
- **`React.cloneElement()` now resolves `defaultProps`.** We fixed a bug in `React.cloneElement()` that some components may rely on. If some of the `props` received by `cloneElement()` are `undefined`, it used to return an element with `undefined` values for those props. We’re changing it to be consistent with `createElement()`. Now any `undefined` props passed to `cloneElement()` are resolved to the corresponding component’s `defaultProps`. ([@truongduy134](https://github.com/truongduy134) in [#5997](https://github.com/facebook/react/pull/5997))
- **`ReactPerf.getLastMeasurements()` is opaque.** This change won’t affect applications but may break some third-party tools. We are [revamping `ReactPerf` implementation](https://github.com/facebook/react/pull/6046) and plan to release it during the 15.x cycle. The internal performance measurement format is subject to change so, for the time being, we consider the return value of `ReactPerf.getLastMeasurements()` an opaque data structure that should not be relied upon. ([@gaearon](https://github.com/gaearon) in [#6286](https://github.com/facebook/react/pull/6286))

#### Removed deprecations

These deprecations were introduced nine months ago in v0.14 with a warning and are removed:
- Deprecated APIs are removed from the `React` top-level export: `findDOMNode`, `render`, `renderToString`, `renderToStaticMarkup`, and `unmountComponentAtNode`. As a reminder, they are now available on `ReactDOM` and `ReactDOMServer`. ([@jimfb](https://github.com/jimfb) in [#5832](https://github.com/facebook/react/pull/5832))
- Deprecated addons are removed: `batchedUpdates` and `cloneWithProps`. ([@jimfb](https://github.com/jimfb) in [#5859](https://github.com/facebook/react/pull/5859), [@zpao](https://github.com/zpao) in [#6016](https://github.com/facebook/react/pull/6016))
- Deprecated component instance methods are removed: `setProps`, `replaceProps`, and `getDOMNode`. ([@jimfb](https://github.com/jimfb) in [#5570](https://github.com/facebook/react/pull/5570))
- Deprecated CommonJS `react/addons` entry point is removed. As a reminder, you should use separate `react-addons-*` packages instead. This only applies if you use the CommonJS builds. ([@gaearon](https://github.com/gaearon) in [#6285](https://github.com/facebook/react/pull/6285))
- Passing `children` to void elements like `<input>` was deprecated, and now throws an error. ([@jonhester](https://github.com/jonhester) in [#3372](https://github.com/facebook/react/pull/3372))
- React-specific properties on DOM `refs` (e.g. `this.refs.div.props`) were deprecated, and are removed now. ([@jimfb](https://github.com/jimfb) in [#5495](https://github.com/facebook/react/pull/5495))

### New deprecations, introduced with a warning

Each of these changes will continue to work as before with a new warning until the release of React 16 so you can upgrade your code gradually.
- `LinkedStateMixin` and `valueLink` are now deprecated due to very low popularity. If you need this, you can use a wrapper component that implements the same behavior: [react-linked-input](https://www.npmjs.com/package/react-linked-input). ([@jimfb](https://github.com/jimfb) in [#6127](https://github.com/facebook/react/pull/6127))
- Future versions of React will treat `<input value={null}>` as a request to clear the input. However, React 0.14 has been ignoring `value={null}`. React 15 warns you on a `null` input value and offers you to clarify your intention. To fix the warning, you may explicitly pass an empty string to clear a controlled input, or pass `undefined` to make the input uncontrolled. ([@antoaravinth](https://github.com/antoaravinth) in [#5048](https://github.com/facebook/react/pull/5048))
- `ReactPerf.printDOM()` was renamed to `ReactPerf.printOperations()`, and `ReactPerf.getMeasurementsSummaryMap()` was renamed to `ReactPerf.getWasted()`. ([@gaearon](https://github.com/gaearon) in [#6287](https://github.com/facebook/react/pull/6287))

### New helpful warnings
- If you use a minified copy of the _development_ build, React DOM kindly encourages you to use the faster production build instead. ([@spicyj](https://github.com/spicyj) in [#5083](https://github.com/facebook/react/pull/5083))
- React DOM: When specifying a unit-less CSS value as a string, a future version will not add `px` automatically. This version now warns in this case (ex: writing `style={{'{{'}}width: '300'}}`. Unitless _number_ values like `width: 300` are unchanged. ([@pluma](https://github.com/pluma) in [#5140](https://github.com/facebook/react/pull/5140))
- Synthetic Events will now warn when setting and accessing properties (which will not get cleared appropriately), as well as warn on access after an event has been returned to the pool. ([@kentcdodds](https://github.com/kentcdodds) in [#5940](https://github.com/facebook/react/pull/5940) and [@koba04](https://github.com/koba04) in [#5947](https://github.com/facebook/react/pull/5947))
- Elements will now warn when attempting to read `ref` and `key` from the props. ([@prometheansacrifice](https://github.com/prometheansacrifice) in [#5744](https://github.com/facebook/react/pull/5744))
- React will now warn if you pass a different `props` object to `super()` in the constructor. ([@prometheansacrifice](https://github.com/prometheansacrifice) in [#5346](https://github.com/facebook/react/pull/5346))
- React will now warn if you call `setState()` inside `getChildContext()`. ([@raineroviir](https://github.com/raineroviir) in [#6121](https://github.com/facebook/react/pull/6121))
- React DOM now attempts to warn for mistyped event handlers on DOM elements, such as `onclick` which should be `onClick`. ([@ali](https://github.com/ali) in [#5361](https://github.com/facebook/react/pull/5361))
- React DOM now warns about `NaN` values in `style`. ([@jontewks](https://github.com/jontewks) in [#5811](https://github.com/facebook/react/pull/5811))
- React DOM now warns if you specify both `value` and `defaultValue` for an input. ([@mgmcdermott](https://github.com/mgmcdermott) in [#5823](https://github.com/facebook/react/pull/5823))
- React DOM now warns if an input switches between being controlled and uncontrolled. ([@TheBlasfem](https://github.com/TheBlasfem) in [#5864](https://github.com/facebook/react/pull/5864))
- React DOM now warns if you specify `onFocusIn` or `onFocusOut` handlers as they are unnecessary in React. ([@jontewks](https://github.com/jontewks) in [#6296](https://github.com/facebook/react/pull/6296))
- React now prints a descriptive error message when you pass an invalid callback as the last argument to `ReactDOM.render()`, `this.setState()`, or `this.forceUpdate()`. ([@conorhastings](https://github.com/conorhastings) in [#5193](https://github.com/facebook/react/pull/5193) and [@gaearon](https://github.com/gaearon) in [#6310](https://github.com/facebook/react/pull/6310))
- Add-Ons: `TestUtils.Simulate()` now prints a helpful message if you attempt to use it with shallow rendering. ([@conorhastings](https://github.com/conorhastings) in [#5358](https://github.com/facebook/react/pull/5358))
- PropTypes: `arrayOf()` and `objectOf()` provide better error messages for invalid arguments. ([@chicoxyzzy](https://github.com/chicoxyzzy) in [#5390](https://github.com/facebook/react/pull/5390))

### Notable bug fixes
- Fixed multiple small memory leaks. ([@spicyj](https://github.com/spicyj) in [#4983](https://github.com/facebook/react/pull/4983) and [@victor-homyakov](https://github.com/victor-homyakov) in [#6309](https://github.com/facebook/react/pull/6309))
- Input events are handled more reliably in IE 10 and IE 11; spurious events no longer fire when using a placeholder. ([@jquense](https://github.com/jquense) in [#4051](https://github.com/facebook/react/pull/4051))
- The `componentWillReceiveProps()` lifecycle method is now consistently called when `context` changes. ([@milesj](https://github.com/milesj) in [#5787](https://github.com/facebook/react/pull/5787))
- `React.cloneElement()` doesn’t append slash to an existing `key` when used inside `React.Children.map()`. ([@ianobermiller](https://github.com/ianobermiller) in [#5892](https://github.com/facebook/react/pull/5892))
- React DOM now supports the `cite` and `profile` HTML attributes. ([@AprilArcus](https://github.com/AprilArcus) in [#6094](https://github.com/facebook/react/pull/6094) and [@saiichihashimoto](https://github.com/saiichihashimoto) in [#6032](https://github.com/facebook/react/pull/6032))
- React DOM now supports `cssFloat`, `gridRow` and `gridColumn` CSS properties. ([@stevenvachon](https://github.com/stevenvachon) in [#6133](https://github.com/facebook/react/pull/6133) and  [@mnordick](https://github.com/mnordick) in [#4779](https://github.com/facebook/react/pull/4779))
- React DOM now correctly handles `borderImageOutset`, `borderImageWidth`, `borderImageSlice`, `floodOpacity`, `strokeDasharray`, and `strokeMiterlimit` as unitless CSS properties. ([@rofrischmann](https://github.com/rofrischmann) in [#6210](https://github.com/facebook/react/pull/6210) and [#6270](https://github.com/facebook/react/pull/6270))
- React DOM now supports the `onAnimationStart`, `onAnimationEnd`, `onAnimationIteration`, `onTransitionEnd`, and `onInvalid` events. Support for `onLoad` has been added to `object` elements. ([@tomduncalf](https://github.com/tomduncalf) in [#5187](https://github.com/facebook/react/pull/5187),  [@milesj](https://github.com/milesj) in [#6005](https://github.com/facebook/react/pull/6005), and [@ara4n](https://github.com/ara4n) in [#5781](https://github.com/facebook/react/pull/5781))
- React DOM now defaults to using DOM attributes instead of properties, which fixes a few edge case bugs. Additionally the nullification of values (ex: `href={null}`) now results in the forceful removal, no longer trying to set to the default value used by browsers in the absence of a value. ([@syranide](https://github.com/syranide) in [#1510](https://github.com/facebook/react/pull/1510))
- React DOM does not mistakingly coerce `children` to strings for Web Components. ([@jimfb](https://github.com/jimfb) in [#5093](https://github.com/facebook/react/pull/5093))
- React DOM now correctly normalizes SVG `<use>` events. ([@edmellum](https://github.com/edmellum) in [#5720](https://github.com/facebook/react/pull/5720))
- React DOM does not throw if a `<select>` is unmounted while its `onChange` handler is executing. ([@sambev](https://github.com/sambev) in [#6028](https://github.com/facebook/react/pull/6028))
- React DOM does not throw in Windows 8 apps. ([@Andrew8xx8](https://github.com/Andrew8xx8) in [#6063](https://github.com/facebook/react/pull/6063))
- React DOM does not throw when asynchronously unmounting a child with a `ref`. ([@yiminghe](https://github.com/yiminghe) in [#6095](https://github.com/facebook/react/pull/6095))
- React DOM no longer forces synchronous layout because of scroll position tracking. ([@syranide](https://github.com/syranide) in [#2271](https://github.com/facebook/react/pull/2271))
- `Object.is` is used in a number of places to compare values, which leads to fewer false positives, especially involving `NaN`. In particular, this affects the `shallowCompare` add-on. ([@chicoxyzzy](https://github.com/chicoxyzzy) in [#6132](https://github.com/facebook/react/pull/6132))
- Add-Ons: ReactPerf no longer instruments adding or removing an event listener because they don’t really touch the DOM due to event delegation. ([@antoaravinth](https://github.com/antoaravinth) in [#5209](https://github.com/facebook/react/pull/5209))

### Other improvements
- React now uses `loose-envify` instead of `envify` so it installs less transitive dependencies. ([@qerub](https://github.com/qerub) in [#6303](https://github.com/facebook/react/pull/6303))
- Shallow renderer now exposes `getMountedInstance()`. ([@glenjamin](https://github.com/glenjamin) in [#4918](https://github.com/facebook/react/pull/4918))
- Shallow renderer now returns the rendered output from `render()`. ([@simonewebdesign](https://github.com/simonewebdesign) in [#5411](https://github.com/facebook/react/pull/5411))
- React no longer depends on ES5 _shams_ for `Object.create` and `Object.freeze` in older environments. It still, however, requires ES5 _shims_ in those environments. ([@dgreensp](https://github.com/dgreensp) in [#4959](https://github.com/facebook/react/pull/4959))
- React DOM now allows `data-` attributes with names that start with numbers. ([@nLight](https://github.com/nLight) in [#5216](https://github.com/facebook/react/pull/5216))
- React DOM adds a new `suppressContentEditableWarning` prop for components like [Draft.js](https://facebook.github.io/draft-js/) that intentionally manage `contentEditable` children with React. ([@mxstbr](https://github.com/mxstbr) in [#6112](https://github.com/facebook/react/pull/6112))
- React improves the performance for `createClass()` on complex specs. ([@spicyj](https://github.com/spicyj) in [#5550](https://github.com/facebook/react/pull/5550))
