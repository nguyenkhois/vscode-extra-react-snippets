const vscode = require("vscode");

const LANGUAGES = ["javascript", "javascriptreact", "typescript", "typescriptreact"];

let commentDisposables = [];

function isNonEmptyString(value) {
    return typeof value === "string" && value.trim().length > 0;
}

function disposeComments() {
    commentDisposables.forEach((disposable) => disposable.dispose());
    commentDisposables = [];
}

function parseBlockComment(value) {
    if (
        Array.isArray(value) &&
        value.length === 2 &&
        value.every(isNonEmptyString)
    ) {
        return [value[0], value[1]];
    }

    if (!isNonEmptyString(value)) {
        return undefined;
    }

    const markers = value.split(",").map((marker) => marker.trim());

    return markers.length === 2 && markers.every(isNonEmptyString)
        ? markers
        : undefined;
}

function applyCommentConfig() {
    disposeComments();

    const config = vscode.workspace.getConfiguration("extraReactSnippets");
    const commentConfig = config.get("comments", {});
    const lineComment = commentConfig.lineComment;
    const blockComment = commentConfig.blockComment;

    const comments = {};

    if (isNonEmptyString(lineComment)) {
        comments.lineComment = lineComment;
    }

    const blockCommentMarkers = parseBlockComment(blockComment);
    if (blockCommentMarkers) {
        comments.blockComment = blockCommentMarkers;
    }

    if (!comments.lineComment && !comments.blockComment) {
        return;
    }

    for (const language of LANGUAGES) {
        commentDisposables.push(
            vscode.languages.setLanguageConfiguration(language, { comments })
        );
    }
}

function activate(context) {
    applyCommentConfig();

    context.subscriptions.push(
        vscode.workspace.onDidChangeConfiguration((event) => {
            if (event.affectsConfiguration("extraReactSnippets.comments")) {
                applyCommentConfig();
            }
        }),
        { dispose: disposeComments }
    );
}

function deactivate() {
    disposeComments();
}

module.exports = { activate, deactivate };
