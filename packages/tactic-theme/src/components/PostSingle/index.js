import React from "react";
import { connect } from "frontity";
import { IconToggleClose } from "../Icons";
import Link from "../Link";
import ImgParallax from "../ImgParallax";
import { Parallax } from "react-parallax";
import AnchorLink from "../AnchorLink";
import NavLink from "../NavLink";

import {
  ContainerHeader,
  Category,
  TitleBlog,
  IntroBlog,
  HeaderContent,
  Container,
  ContainerContent,
  ImgFullWidth,
  ImgFullWidthParallax,
  Title,
  Content,
  ContainerRight,
  ContainerMedia,
  ContainerLeft,
  Image,
  Video,
  ImageTwo,
  ImgFullWidthContent,
  ContainerFooter,
  Button,
  Brand,
} from "./styles";
import { ScrollDown2 } from "../ScrollDown";

const PostSingle = ({ state, element }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const idCat = post.categories;
  const category = state.source.category[idCat].name;
  const secciones = post.acf.columnas;

  if (element === "blog") {
    return (
      <>
        <Brand id="brandBlog">
          <NavLink href="/" className="fadeOutUp height100 linkHome">
            Tactic Center
            {/* <BrandImg
                src="https://tactic-center.com/wp-content/uploads/2018/04/Logo-TC.png"
                alt="logo tactic center"
              /> */}
          </NavLink>
        </Brand>
        <Link href="/blog">
          <IconToggleClose />
        </Link>
        <ScrollDown2 className="noAnimation" />
        <ContainerHeader
          background={post.acf.background}
          color={post.acf.text_color}
        >
          <Category className="text__italic">Category</Category>
          {/* {console.log(secciones)} */}
          <TitleBlog>Herramientas útiles para diseñadores</TitleBlog>
          <IntroBlog>Pequeña titulo del blog</IntroBlog>
          <Container>
            <HeaderContent>
              <p className="text__italic">Goal.</p>
              <p>
                Los últimos años el contenido ha tomado fuerza en las redes
                sociales, ya que, si las marcas no tienen presencia en estas
                plataformas con una estrategia de contenido, difícilmente pueden
                tener un lugar en este mundo tan competitivo donde hay bastantes
                ofertas y poca demanda.
              </p>
            </HeaderContent>
            <HeaderContent>
              <p className="text__italic">Goal.</p>
              <p>
                Pero, ¿qué se puede hacer para que el contenido de mi marca sea
                innovador y diferente del resto? Aunque no exista un lineamiento
                exacto de cómo hacerlo, es necesario que empieces planteándote
                que el marketing de contenidos no se limita a publicar textos en
                un sitio, sino que detrás de lo que publicas hay una
                planificación estratégica que busca generar engagement a través
                de contenido variado y de calidad.
              </p>
            </HeaderContent>
            <HeaderContent>
              <p className="text__italic">Goal.</p>
              <p>
                The Zenith Arena in Lille is one of the main concert and event
                halls in the Hauts-de-France. After nearly ten years of
                collaboration, we had carte blanche to create the new site.
              </p>
            </HeaderContent>
          </Container>
        </ContainerHeader>
        <ImgFullWidthParallax id="parallaxBlog">
          <Parallax
            bgImage="https://tactic-center.com/wp-content/uploads/2020/10/imagen-principal-1080x675.jpg"
            strength={100}
            style={{ height: 540 }}
            className="parallax__blog"
          ></Parallax>
        </ImgFullWidthParallax>
        <ContainerContent>
          <ContainerLeft className="text__center">
            <Title>Espacios para exponer tu trabajo</Title>
          </ContainerLeft>
          <ContainerRight>
            <Content>
              Behance. Esta plataforma creada por Adobe, es la indicada si
              quieres mostrar tus trabajos a otros, ya sea por proyecto
              independiente o temática. Acá podés mostrar y apreciar diseños de
              branding, editorial, entre otros. Entonces, si buscas una
              experiencia moderna y social como diseñador independiente, está
              podría ser tu plataforma ideal.
            </Content>
          </ContainerRight>
          <ImgFullWidthContent>
            <ContainerMedia className="fadeObserve slideOutLeftMid"></ContainerMedia>
            <Image src="https://tactic-center.com/wp-content/uploads/2020/10/behance-1024x579.png" />
          </ImgFullWidthContent>
          <ContainerLeft className="container__img order__2">
            <ContainerMedia className="fadeObserve slideOutRightMid"></ContainerMedia>
            <ImageTwo src="https://tactic-center.com/wp-content/uploads/2020/10/behance-1024x579.png"></ImageTwo>
          </ContainerLeft>

          <ContainerRight className="text__center">
            <Title className="margin__bottom">Issuu</Title>
            <Content>
              Este servicio en línea te permite publicar y compartir documentos
              como portafolios, libros y revistas con un formato de
              visualización atractivo y dinámico con la posibilidad de que otros
              usuarios los localicen, compartan u opinen sobre ellos. Siendo una
              manera sencilla para crear un portafolio dinámico y que vas a
              poder compartir con posibles clientes o empleadores.
            </Content>
          </ContainerRight>

          <ContainerLeft className="order__2">
            <Title className="margin__bottom">Si buscas trabajo en línea</Title>
            <Content>
              Tal como lo describe el sitio web de Guru “Simplemente únase
              gratis, publique su trabajo y comience a recibir cotizaciones.
              Utilice la herramienta ´Find Freelancers´ para obtener
              cotizaciones de calidad.” Nos refleja que es una plataforma
              sencilla (en ciertos aspectos), que no lleva a cabo concursos,
              sino que se basa en la puntuación de los clientes previos.
            </Content>
          </ContainerLeft>

          <ContainerRight className="text__center container__img">
            <ContainerMedia className="fadeObserve slideOutRightMid"></ContainerMedia>
            <ImageTwo src="https://tactic-center.com/wp-content/uploads/2020/10/behance-1024x579.png"></ImageTwo>
          </ContainerRight>
          <ContainerLeft>
            <Title className="title__two">Si quieres actualizarte</Title>
          </ContainerLeft>
          <ContainerRight>
            <Content>
              ¿Cuáles son las tendencias de diseño? ¿Qué redes sociales están en
              auge en estos momentos? En fin, si sentís que te gusta leer y
              aprender nuevas cosas, estas son algunas plataformas que serán de
              mucha ayuda:
            </Content>
          </ContainerRight>
        </ContainerContent>
        <ImgFullWidth>
          <ContainerMedia className="fadeObserve slideOutLeftMid"></ContainerMedia>
          <Image src="https://tactic-center.com/wp-content/uploads/2020/10/brand-new-1024x574.jpg" />
        </ImgFullWidth>
        <ContainerContent>
          <ContainerLeft>
            <Content>
              Es una especie de blog que registra y brinda opiniones sobre el
              trabajo de identidad corporativa y de marca. Aunque si bien en
              esta plataforma vas a encontrar la opinión única del editor (Armin
              Vit), la página hace una revisión bastante completa sobre los
              rediseños de marcas o productos; desde la construcción de la
              identidad visual hasta la aplicación de la misma. El único
              inconveniente es que para poder leer las reseñas tenés que dominar
              el idioma inglés, pues a veces hay ciertas explicaciones
              complejas.
            </Content>
          </ContainerLeft>
          <ContainerRight className="container__img">
            <ContainerMedia className="fadeObserve slideOutRightMid"></ContainerMedia>
            <ImageTwo src="https://tactic-center.com/wp-content/uploads/2020/10/brand-new-1024x574.jpg"></ImageTwo>
          </ContainerRight>

          <ContainerLeft className="text__center">
            <Title>Si deseas ampliar tus conocimientos </Title>
          </ContainerLeft>
          <ContainerRight>
            <Content>
              Si durante esta pandemia has tenido algo de tiempo extra. Hay
              algunas plataformas ofreciendo cursos gratuitos, tal como lo hace
              Crehana que agrupa un montón de cursos de distintas áreas, desde
              diseño gráfico hasta ilustración pasando por web, animación,
              fotografía y además regularmente publica nuevos. Acá tenés acceso
              a un montón material de calidad. El único detalle es que tenés que
              finalizar cada curso en 24 horas. Pero ¡calma!, si tenés la
              aplicación desde tu celular, podrás descargar los módulos y
              materiales de cada curso en tu dispositivo. Por lo que podrías
              acceder a ello posteriormente.
            </Content>
          </ContainerRight>
          <ImgFullWidthContent>
            <ContainerMedia className="fadeObserve slideOutRightMid"></ContainerMedia>
            <Image src="https://tactic-center.com/wp-content/uploads/2020/10/brand-new-1024x574.jpg" />
          </ImgFullWidthContent>
          <ContainerLeft className="container__img">
            <ContainerMedia className="fadeObserve slideOutRightMid"></ContainerMedia>
            <ImageTwo src="https://tactic-center.com/wp-content/uploads/2020/10/brand-new-1024x574.jpg"></ImageTwo>
          </ContainerLeft>
          <ContainerRight>
            <Content>
              Si buscas recursos gratuitos La lista es inmensa, pero de manera
              resumida acá tenés algunos sitios con recursos gratuitos, donde lo
              único que necesitaras (en algunos) será registrarte.
            </Content>
          </ContainerRight>
        </ContainerContent>
        <ImgFullWidth className="padding__top">
          <ContainerMedia className="fadeObserve slideOutLeftMid"></ContainerMedia>
          <Image src="https://tactic-center.com/wp-content/uploads/2020/10/brand-new-1024x574.jpg" />
        </ImgFullWidth>
        <ContainerContent>
          <ContainerLeft className="text__center">
            <Content>
              Vectoriales: <br />
              Freepik y Flaticon Ambos de la misma empresa, son los favoritos de
              los diseñadores/as por la cantidad de recursos de fotografía y
              vectoriales de buena calidad, pero recuerda que los gratuitos
              necesitan atribución. La versión premium no la necesitás pero
              tenés una cantidad limitada de descargas.
            </Content>
          </ContainerLeft>
          <ContainerRight className="container__img">
            <ContainerMedia className="fadeObserve slideOutLeftMid"></ContainerMedia>
            <ImageTwo src="https://tactic-center.com/wp-content/uploads/2020/10/brand-new-1024x574.jpg"></ImageTwo>
          </ContainerRight>
          <ContainerLeft className="text__center">
            <Title>Tipografias:</Title>
          </ContainerLeft>
          <ContainerRight>
            <Content>
              Fontsquirrel <br /> Aunque tiene pocas categorías, las
              explicaciones de cada fuente con su autor nombrado te ayuda a
              conocer la procedencia, son de descarga gratuita. <br />
              Fonts Google <br />
              Aunque no podrás encontrar tipografías con estilos caligráficos,
              es muy recomendable para productos de diseño en general, web y
              maquetación.
            </Content>
          </ContainerRight>
          <ImgFullWidthContent>
            <ContainerMedia className="fadeObserve slideOutLeftMid"></ContainerMedia>
            <Image src="https://tactic-center.com/wp-content/uploads/2020/10/brand-new-1024x574.jpg" />
          </ImgFullWidthContent>
          <ContainerLeft>
            <Title>Tipografias:</Title>
            <Content>
              Unsplash Si lo que buscas son fotografías artísticas y no las de
              “stock”, te encantará esta página. Las fotos publicadas aquí se
              pueden usar de forma gratuita, ya sea con fines comerciales y no
              comerciales. No es necesario pedir permiso, ni otorgar crédito al
              fotógrafo o a la plataforma como tal.
            </Content>
          </ContainerLeft>

          <ContainerRight className="text__center container__img padding__bottom__none">
            <ContainerMedia className="fadeObserve slideOutRightMid"></ContainerMedia>
            <ImageTwo src="https://tactic-center.com/wp-content/uploads/2020/10/behance-1024x579.png"></ImageTwo>
          </ContainerRight>
        </ContainerContent>

        <ContainerFooter>
          <Button backgroundButton={post.acf.background}>
            <AnchorLink
              className="text__italic link__blockContent color__custom"
              href="/blog"
            >
              Volver al sitio
            </AnchorLink>
          </Button>
        </ContainerFooter>
      </>
    );
  } else {
    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>;

    return <p>Soy un post</p>;
  }
};

export default connect(PostSingle);