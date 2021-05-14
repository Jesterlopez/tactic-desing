// Obtener las partes del theme Header y footer
// index.js del theme

// JSForWP
// beforeSSR: async ({ state, actions }) => {
//   await Promise.all(
//     state.theme.templates.map((slug) =>
//       actions.source.fetch(`/wp_template_part/${slug}`)
//     )
//   );
// };

// crear los Block Patterns de gutenberg
// funtions.php
// <?php

// register_block_pattern(
//     'pattern-slug',
//     array(
//         'title' => __('Pattern name'),
//         'content' => '...Gutenberg HTML...',
//     )
// );

// ?>

//Html2react processors

// const jsforwp = {
//   name: "jsforwp",
//   priority: 10,
//   test: ({ node }) =>
//     node.type === "element" &&
//     node.props?.className?.split(" ").includes("jsforwp"),
//   processor: ({ node }) => {
//     //Change styles
//     node.props.css = css`
//       background: blue;
//     `;

//     //Add a new children
//     node.children.unshift(Logo);

//     //Substitute it for a React Component
//     node.component = NewJSforWP;

//     return node;
//   },
// };

// casos de usos
// Lazy Load
// Web browser layout
// Terminal
// Newsletter
