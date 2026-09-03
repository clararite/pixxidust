// initLayout() is called once the DOM (the HTML content of your website) has been loaded.
document.addEventListener("DOMContentLoaded", function () {
  // The layout will be loaded on all pages that do NOT have the "no-layout" class in the <body> element.
  if (!document.body.classList.contains("no-layout")) {
    // Inserting your header and footer:
    document.body.insertAdjacentHTML("afterbegin", headerEl);
    document.body.insertAdjacentHTML("beforeend", footerEl);

    // Inserting sidebars:
    const wrapperElement = document.querySelector("main"); // you might have to change this selector to something like .my-wrapper
    if (wrapperElement) {
      wrapperElement.insertAdjacentHTML("afterbegin", sidebarEl1);
       wrapperElement.insertAdjacentHTML("beforeend", sidebarEl2);
    }

    initActiveLinks();
  }

  // add your own javascript code here...
});

/* ********************************* */

/**
 *  F U N C T I O N S
 */

function initActiveLinks() {
  // This function adds the class "active" to any link that links to the current page.
  // This is helpful for styling the active menu item.

  const pathname = window.location.pathname;
  [...document.querySelectorAll("a")].forEach((el) => {
    const elHref = el
      .getAttribute("href")
      .replace(".html", "")
      .replace("/public", "");

    if (pathname == "/") {
      // homepage
      if (elHref == "/" || elHref == "/index.html") el.classList.add("active");
    } else {
      // other pages
      if (window.location.href.includes(elHref)) el.classList.add("active");
    }
  });
}

function getNestingString() {
  // This function prepares the "nesting" variable for your header and footer (see below).
  // Only change this function if you know what you're doing.
  const currentUrl = window.location.href
    .replace("http://", "")
    .replace("https://", "")
    .replace("/public/", "/");
  const numberOfSlahes = currentUrl.split("/").length - 1;
  if (numberOfSlahes == 1) return ".";
  if (numberOfSlahes == 2) return "..";
  return ".." + "/..".repeat(numberOfSlahes - 2);
}

/* ********************************* */

/**
 *  H T M L
 */

const nesting = getNestingString();

/**
  Use ${nesting} to output a . or .. or ../.. etc according to the current page's folder depth.
  Example:
    <img src="${nesting}/images/example.jpg" />
  will output
  	 <img src="./images/example.jpg" /> on a page that isn't in any folder.
    <img src="../images/example.jpg" /> on a page that is in a folder.
    <img src="../../images/example.jpg" /> on a page that is in a sub-folder.
    etc.
 */

// Insert your header HTML inside these ``. You can use HTML as usual.
const headerEl =
    <header>
      <h1> :･ﾟ✧* pixxidust's world :･ﾟ✧ </h1>
    </header>;

// Insert your footer HTML inside these ``. You can use HTML as usual.
// Remove all the content inside the `` if you don't have a footer.
const footerEl =
    <footer>
      <p>drink water !</p>
      <script type="text/javascript" src="https://counter.websiteout.com/js/30/0/0/0"></script>
    </footer>;

// Insert your sidebar HTML inside these ``. You can use HTML as usual.
// Remove all the content inside the `` if you don't have a sidebar.
const sidebarEl1 =
    <aside>
      <div class="aside">

      
        <div class="sect2">
          <h5><b>places on this site!</b></h5>
          <ul class="links">
            <a href="index.html">
              <li>home</li>
            </a>
            <a href="about-me.html">
              <li>about me</li>
            </a>
            <a href="Untitled-3.html">
              <li>art</li>
            </a>
            <a href="Untitled-4.html">
              <li>fiber arts</li>
            </a>
            <a href="Untitled-5.html">
              <li>interests</li>
            </a>
            <a href="Untitled-6.html">
              <li>credits</li>
            </a>
          </ul>
          <h5><b>places off site!</b></h5>
          <ul class="links">
            <a href="https://piixxiidust.tumblr.com/">
              <li>tumblr</li>
            </a>
            <a href="https://artfight.net/~pixxidust">
              <li>artfight</li>
            </a>
            <a href="https://instagram.com/piixxiidust">
              <li>instagram </li>
            </a>

          </ul>
        </div>
      </div>
    </aside>;

// Insert your sidebar HTML inside these ``. You can use HTML as usual.
// Remove all the content inside the `` if you don't have a sidebar.
