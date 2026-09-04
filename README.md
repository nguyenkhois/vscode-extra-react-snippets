# Extra React code snippets

[![Download on Visual Studio Marketplace](https://img.shields.io/visual-studio-marketplace/v/KhoiLe.extra-react-snippets.svg)](https://marketplace.visualstudio.com/items?itemName=KhoiLe.extra-react-snippets)

This extension is lightweight and you don't need remember all prefixes because Visual Studio Code IntelliSense is very smart and powerful.

## Custom comment style

You can choose the comment markers used by VS Code's **Toggle Line Comment** and **Toggle Block Comment** commands in JavaScript, JSX, TypeScript, and TSX files.

To configure them in the Settings UI, open **Settings**, search for `Extra React Snippets`, and use the **Comments** Item/Value table. VS Code provides **Add Item**, shows **Edit** and **Delete** actions when you hover over a row, and includes an **Edit in settings.json** link.

For `blockComment`, enter the opening and closing markers separated by a comma, for example `/*!, */`.

The same options can be added directly to `settings.json`:

```jsonc
{
	"extraReactSnippets.comments": {
		"lineComment": "//!",
		"blockComment": "/*!, */"
	}
}
```

Leave the object empty or remove the setting to use the standard comment style supplied by VS Code. Line and block comment styles can be configured independently.

## Features

You start type **`rr`** to use code template blocks or `imp, csl, handle, event, etc.` for using short statements. Type whatever you remember then you can see many snippets in code completion.

### React
|Prefix (`rr`)|Description|
|---|---|
|`rrImpHooks`|Import basic React Hooks|
|`rrFunction`|Create a function with ES7 syntax|
|`rrComponent`|Create a simple component with React Hooks|
|`rrStatelessFunctionalComponent`|Create stateless functional component|
|`rrReturnElement`|Return an HTML element|


### JavaScript
|Prefix|Description|
|---|---|
|`imp`|Import from another module|
|`impd`|Import default from another module|
|`expd`|Export default statement|
|`eventpr`|Completion for event.preventDefault()|
|`eventst`|Completion for event.stopPropagation()|
|`handleAction`|Create handleAction() method with ES7 syntax|
|`jsPromise`|Generates a full Promise function|
|`jsReturnPromise`|Generates a return for a Promise function|
|`jsFetchGET`|Fetch by using GET method|
|`jsFetch`|Fetch by using options|

### Console
|Prefix|Description|
|---|---|
|`csl`|console.log()|
|`cst`|console.table()|
|`csw`|console.warn()|
|`cse`|console.error()|

### Other
|Prefix|Description|
|---|---|
|`mep`|Declare module.exports statement|

**Enjoy coding and free your mind!** (^_^)
