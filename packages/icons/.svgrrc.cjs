/**
 * @type {import('@svgr/core').Config}
 */
module.exports = {
  icon: true,
  typescript: true,
  svgProps: {
    viewBox: "0 0 1024 1024",
    fill: "currentColor",
  },
  outDir: "./src/icons",
  // SVGR 8.x 使用新的模板 API
  template: ({ imports, interfaces, componentName, props, jsx, exports }, { tpl }) => {
    // import IconBase from './IconBase'
    // import type { IconBaseProps } from './IconBase'
    const iconBaseImportAst = {
      type: "ImportDeclaration",
      specifiers: [
        {
          type: "ImportDefaultSpecifier",
          local: {
            type: "Identifier",
            name: "IconBase",
          },
        },
      ],
      source: {
        type: "StringLiteral",
        value: "./IconBase",
      },
    }

    const iconBasePropsImportAst = {
      type: "ImportDeclaration",
      specifiers: [
        {
          type: "ImportSpecifier",
          local: {
            type: "Identifier",
            name: "IconBaseProps",
          },
          imported: {
            type: "Identifier",
            name: "IconBaseProps",
          },
        },
      ],
      source: {
        type: "StringLiteral",
        value: "./IconBase",
      },
      importKind: "type",
    }

    // filter react ast
    const importAsts = imports.filter(ast => ast.type === "ImportDeclaration" && ast.source.value === "react" && ast.specifiers[0].type !== "ImportNamespaceSpecifier")
    importAsts.push(iconBasePropsImportAst)
    importAsts.push(iconBaseImportAst)

    return tpl`${importAsts}
${interfaces}

function SvgIcon(${props}) {
  return ${jsx}
}

function ${componentName}(props: Omit<IconBaseProps, "name">) {
  return <IconBase name={${componentName}.name} {...props}><SvgIcon /></IconBase>
}

${exports};
`
  },
}
