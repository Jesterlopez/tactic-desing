const fxScrollFooter =(refElement) => {

    const Content = document.getElementById("contentGeneral");
    const ContentBlog = document.getElementById("contentBlog");
    const footer = document.getElementById("footer");


    if (Content === null) {
        if (ContentBlog?.getBoundingClientRect().bottom < 850) {
            footer.style.position = "fixed";
            if(refElement.current != null){
                refElement.current.style.transform = `translateY(calc(-${
                    ContentBlog?.getBoundingClientRect().bottom / 50
                }px))`;
            }
        } else {
            footer.style.position = "relative";
        }
    } else {
        if (Content?.getBoundingClientRect().bottom < 850) {
            footer.style.position = "fixed";
            if(refElement.current != null){
                refElement.current.style.transform = `translateY(calc(-${
                    Content?.getBoundingClientRect().bottom / 50
                }px))`;
            }
        }else{
            footer.style.position = "relative";
        }
    }

}

export default fxScrollFooter