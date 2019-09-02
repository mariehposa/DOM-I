const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Update the navigation
let topNav = document.querySelectorAll("a");
topNav[0].textContent = siteContent.nav["nav-item-1"]
topNav[1].textContent = siteContent.nav["nav-item-2"]
topNav[2].textContent = siteContent.nav["nav-item-3"]
topNav[3].textContent = siteContent.nav["nav-item-4"]
topNav[4].textContent = siteContent.nav["nav-item-5"]
topNav[5].textContent = siteContent.nav["nav-item-6"]

//Update the ctaHeader
let ctaText = document.getElementsByClassName("cta-text")[0].children;
ctaText[0].textContent = siteContent.cta["h1"]
ctaText[1].textContent = siteContent.cta["button"]
let ctaLogo = document.getElementById("cta-img");
ctaLogo.setAttribute('src', siteContent.cta["img-src"])

let textContentClass = document.getElementsByClassName("text-content");
let features = textContentClass[0].children;
features[0].textContent = siteContent["main-content"]["features-h4"]
features[1].textContent = siteContent["main-content"]["features-content"]

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let about = textContentClass[1].children;
about[0].textContent = siteContent["main-content"]["about-h4"]
about[1].textContent = siteContent["main-content"]["about-content"]

let services = textContentClass[2].children;
services[0].textContent = siteContent["main-content"]["services-h4"]
services[1].textContent = siteContent["main-content"]["services-content"]

let product = textContentClass[3].children;
product[0].textContent = siteContent["main-content"]["product-h4"]
product[1].textContent = siteContent["main-content"]["product-content"]

let vision = textContentClass[4].children;
vision[0].textContent = siteContent["main-content"]["vision-h4"]
vision[1].textContent = siteContent["main-content"]["vision-content"]

