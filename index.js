/** @param {import('highlight.js').default} hljs */
module.exports = hljs => ({
  case_insensitive: false,
  keywords: 'break continue return yield exit block unlock const var local import do while for else if function builtin',
  contains: [
    hljs.C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.QUOTE_STRING_MODE,
    {
      scope: 'string',
      begin: /'/,
      end: /'/,
      illegal: '\\n',
      contains: [{begin: /\\[\s\S]/, relevance: 0}],
    },
    {
      scope: 'bracket',
      begin: /(?<=(if|for|while)\s*)\(|(\)\s*)?\{|\}/,
    },
    {
      scope: 'logical',
      begin: /&&|\|\|/,
    },
    {
      scope: 'number',
      begin: /(?<!\w)(?:0x[\dA-Fa-f]+|\d+(\.\d+)?|\$[\dA-Fa-f]{8})/,
    },
  ],
});
