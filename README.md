# Extra React code snippets

This extension is lightweight and you don't need remember all prefixs because Visual Studio Code IntelliSense is very powerful.

## Features

You start to type **`rr`** then you show all React code snippets in code completion and continue with something other like `git, im, ren, cla, con, map, etc.`

![Demo](./images/demo.gif)

### React
|Prefix (`rr`)|Description|
|---|---|
|**Import**||
|`rrImRender`|Import render() from ReactDOM|
|`rrImReactDOM`|Import ReactDOM from ReactDOM|
|`rrImReactDOMRender`|Import ReactDOM and render()|
|**Render**||
|`rrRenderDom`|Create ReactDOM.render()|
|`rrRender`|Create only render()|
|**Class**||
|`rrClassComponent`|Create class component|
|`rrClassComponentFull`|Create full class component|
|**Component**||
|`rrConstructor`|Create constructor()|
|`rrcomponentDidMount`|Create componentDidMount()|
|`rrcomponentDidUpdate`|Create componentDidUpdate()|
|`rrcomponentWillUnmount`|Create componentWillUnmount()|
|`rrshouldComponentUpdate`|Create shouldComponentUpdate()|
|`rrgetSnapshotBeforeUpdate`|Create getSnapshotBeforeUpdate()|
|`rrcomponentDidCatch`|Create componentDidCatch()|
|`rrMethod`|Create method with ES7 syntax|
|**React-Redux**||
|`rrmapDispatchToProps`|Create mapDispatchToProps()|
|`rrmapStateToProps`|Create mapStateToProps()|

### Other
|Prefix|Description|
|---|---|
|`gitig`|Create .gitignore file content|
|`mep`|Declare multiple module.exports|
|`handleClick`|Create handleClick() method with ES7 syntax|
|`e.preventDefault`|Completion for e.preventDefault()|

### Support to [react-pretence-router](https://www.npmjs.com/package/react-pretence-router)
|Prefix (`rpr`)|Description|
|---|---|
|**Import**||
|`rprImportRouter`|Import `{Route}` component and router reducers|
|`rprImportLink`|Import `{Link}` component|
|**Component**||
|`rprRouteComponent`|Create `<Route/>` component|
|`rprLinkComponent`|Create `<Link/>` component|

**Enjoy coding and free your mind!** (^_^)
