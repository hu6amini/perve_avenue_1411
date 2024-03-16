//Reply Counter
document.addEventListener("DOMContentLoaded",(function(){!function processPostElements(){const e=document.querySelectorAll(".post"),t=function getPageNumber(){const e=new URLSearchParams(window.location.search);return parseInt(e.get("st")||0)+1}();e.forEach(((e,n)=>{!function createReplyCounter(e,t,n){const o=document.createElement("b");o.className="reply_counter",o.textContent="#"+t;const r=e.querySelector(".mini_buttons.rt.Sub");r&&("after"===n?r.appendChild(o):r.insertBefore(o,r.firstChild))}(e,t+n,"after")}))}()}));
//Favicons
function updateFaviconsForLinks(e) {
    e.forEach((element => {
        if (!(element.closest(".spoiler .code_top a") || element.closest(".fancyborder a") || element.closest(".quote_top a") || element.querySelector("img"))) {
            let img = document.createElement("img");
            if (element.href.includes("youtu.be")) {
                img.src = "https://www.google.com/s2/favicons?domain=youtube.com";
            } else {
                img.src = "https://www.google.com/s2/favicons?domain=" + element.href;
            }
            img.alt = "fav";
            if (element.matches(".quote a, .tmsg a")) {
                img.width = 14;
                img.height = 14;
            } else {
                img.width = 16;
                img.height = 16;
            }
            element.prepend(img);
        }
    }));
}

const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
        updateFaviconsForLinks(mutation.target.querySelectorAll(".color a, span.tmsg a"));
    });
});

const body = document.querySelector("body");

const observerConfig = {
    childList: true,
    subtree: true
};

const targetElements = document.querySelectorAll(".color a, span.tmsg a");

updateFaviconsForLinks(targetElements);

targetElements.forEach((element) => {
    observer.observe(element, observerConfig);
});

//Quote
document.addEventListener("DOMContentLoaded",(()=>{const e=170;function expandQuotes(t){const updateHeight=()=>{const o=t.querySelector(".quotebtn button");if(!o&&t.scrollHeight>e){t.style.maxHeight=e+"px";const o=document.createElement("div");o.className="quotebtn";const n=document.createElement("button");n.innerHTML="Show More...",o.appendChild(n),t.appendChild(o),n.addEventListener("click",(()=>{t.style.transition="max-height 0.382s ease-in-out",t.style.maxHeight=t.scrollHeight+"px",o.style.display="none",setTimeout((()=>{t.style.maxHeight="none"}),382)}))}else o&&t.scrollHeight<=e&&o.parentNode.remove()};updateHeight();const o=new ResizeObserver(updateHeight);o.observe(t);const n=t.querySelector(".spoiler .code_top a");n&&n.addEventListener("click",(()=>{t.style.maxHeight="none",o.disconnect()}))}function modifyQuoteTop(e){const t=e.textContent,o=e.querySelector("a");if(t.includes("@")){const n=t.replace(/QUOTE\s*\(([^@]+)@[^)]+\)\s*/,"$1 said:");e.innerHTML=n,e.style.color="var(--mdcol)",o&&(e.appendChild(o),o.style.color="var(--mdcol)")}else{const t=e.querySelector(".quote_top b");t&&(t.style.opacity=1)}}(function initializeExpandQuotes(){document.querySelectorAll(".quote").forEach(expandQuotes),new MutationObserver((e=>{for(const t of e)t.addedNodes.length>0&&t.addedNodes.forEach((e=>{e.nodeType===Node.ELEMENT_NODE&&(e.classList.contains("quote")?expandQuotes(e):e.querySelectorAll(".quote").forEach(expandQuotes))}))})).observe(document.body,{childList:!0,subtree:!0})})(),document.querySelectorAll(".quote_top").forEach(modifyQuoteTop),function observeMutations(){new MutationObserver((e=>{for(const t of e)"childList"===t.type&&t.addedNodes.forEach((e=>{e.nodeType===Node.ELEMENT_NODE&&e.querySelectorAll(".quote_top").forEach(modifyQuoteTop)}))})).observe(document.body,{childList:!0,subtree:!0})}()}));
//Textarea Autogrow
function waitForElementToAppear(e,t){const a=document.querySelector(e);a?t(a):setTimeout((()=>waitForElementToAppear(e,t)),100)}waitForElementToAppear("textarea#Post",(e=>{!function resizeTextarea(){function updateTextareaHeight(){t.style.height="0",t.style.height=t.scrollHeight+"px",t.style.maxHeight="655px"}const t=e;t&&(updateTextareaHeight(),t.addEventListener("input",updateTextareaHeight),window.addEventListener("load",updateTextareaHeight),t.addEventListener("paste",(()=>setTimeout(updateTextareaHeight,0))))}()}));
//Goto
document.addEventListener("DOMContentLoaded",(function(){let e;function scrollToSmooth(e){window.scrollTo({top:e,behavior:"smooth",duration:600})}function showGotoElement(e){e.classList.add("active"),e.style.zIndex="9999"}function hideGotoElement(e){e.classList.remove("active")}!function initSmoothScrolling(){document.querySelector(".p_up").addEventListener("click",(()=>{scrollToSmooth(0)})),document.querySelector(".p_down").addEventListener("click",(()=>{scrollToSmooth(document.body.scrollHeight)}));const o=document.querySelector(".goto");window.addEventListener("scroll",(()=>{clearTimeout(e),showGotoElement(o),e=setTimeout((()=>{hideGotoElement(o)}),3e3)})),o.addEventListener("mouseenter",(()=>{clearTimeout(e),showGotoElement(o)})),o.addEventListener("mouseleave",(()=>{e=setTimeout((()=>{hideGotoElement(o)}),3e3)}))}()}));
//Preview
document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".send").forEach((function(e){var n=e.querySelectorAll("ul li.Item");if(n.length>=2){var t=document.getElementById("loading");t&&n[1].appendChild(t)}}))}));
