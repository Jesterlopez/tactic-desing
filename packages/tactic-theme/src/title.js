import { Head, connect, decode } from "frontity";

const Title = ({ state }) => {
  // trae la data de la pagina donde esta
  const data = state.source.get(state.router.link);
  // Titulo de fault
  let title = state.frontity.title;

  if (data.isTaxonomy) {
    // Formato para presentar el titulo de la pagina taxonomy - Tactic Center
    const { taxonomy, name } = state.source[data.taxonomy][data.id];
    // formato de letra Capitalize en la taxonomy
    const taxonomyCapitalized =
      taxonomy.charAt(0).toUpperCase() + taxonomy.slice(1);
    // renderiza el title
    title = `${taxonomyCapitalized}: ${decode(name)} - ${state.frontity.title}`;
  } else if (data.isAuthor) {
    // si esta en un post toma el nombre del autor y lo incluye.
    // toma el nombre del autor de la data
    const { name } = state.source.author[data.id];
    // renderiza el title

    title = `Author: ${decode(name)} - ${state.frontity.title}`;
  } else if (data.isPostType) {
    // Agrega el titulo del post
    // 1. toma el titulo del post.
    const postTitle = state.source[data.type][data.id].title.rendered;
    // 2.remueve la etiqueta html si es que hay
    const cleanTitle = decode(postTitle);
    // renderiza el title

    title = `${cleanTitle} - ${state.frontity.title}`;
  } else if (data.isHome) {
    // Agrega el titulo del post
    // 1. toma el titulo del post.
    title = `${state.frontity.title}`;
  } else if (data.isPostTypeArchive) {
    // Agrega el titulo del post
    // 1. toma el titulo del post.
    const postTypeTitle = data.type;
    // console.log(data.type);
    // 2.remueve la etiqueta html si es que hay
    const cleanTitleType = decode(postTypeTitle);
    // renderiza el title

    title = `${cleanTitleType} - ${state.frontity.title}`;
  } else if (data.is404) {
    // si la pagina no se encuentra agregar 404 en el titulo
    title = `404 Not Found - ${state.frontity.title}`;
  }

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default connect(Title);
