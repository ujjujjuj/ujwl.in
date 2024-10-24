const NptelPage = () => {
  return (
    <div className="w-screen h-dvh flex flex-col items-center justify-center px-4">
      <a
        className="bg-[var(--fg)] text-white font-bold px-4 py-2 text-xl rounded-sm mb-8"
        href='javascript:!function(){const e=()=>{t(!1),document.querySelectorAll(".gcb-mcq-choice > input").forEach((e=>{e.checked=!1,e.disabled=!1}))},t=e=>{const t=document.querySelectorAll(".qt-feedback:not(.qt-hidden)");if(e){const e=Array.from(document.querySelectorAll(".qt-choices")).map(((e,t)=>{const n=e.querySelector("input[type=\"radio\"]:checked");return n&&n.parentElement.textContent.trim()===window.HS_ANSWERS[t]}));t.forEach(((t,n)=>{const r=document.createElement("span");e[n]?(r.textContent="Correct answer",r.style.color="green"):(r.textContent=`Incorrect, the correct answer is: ${window.HS_ANSWERS[n]}`,r.style.color="red"),t.insertAdjacentElement("beforeend",r)}));const n=e.filter((e=>e)).length;alert(`You scored ${n} out of ${e.length}`)}else t.forEach((e=>e.innerHTML=""))};(()=>{if(window.HS_ACTIVE)return;window.HS_ACTIVE=!0;const n=document.createElement("button");n.textContent="Reset",n.addEventListener("click",e);const r=document.createElement("button");r.textContent="Check answers",r.style.marginLeft="8px",r.addEventListener("click",(()=>{t(!1),t(!0)}));document.querySelector(".qt-question-group").insertAdjacentElement("afterend",n),n.insertAdjacentElement("afterend",r),window.HS_ANSWERS=Array.from(document.querySelectorAll("div.faculty-answer")).map((e=>e.textContent.trim())),e()})()}();'
      >
        NPTEL Hide/Show
      </a>
      <div className="max-w-screen-sm">
        <span className="text-xl font-bold underline">Install</span>
        <p className="text-white mb-6 ms-2">
          Click and hold the button above and drag it to your bookmarks bar (You
          might have to enable your bookmarks bar if it's hidden)
        </p>
        <span className="text-xl font-bold underline">Usage</span>
        <ol className="text-white list-decimal ms-5">
          <li>Open an NPTEL assignment</li>
          <li>Click "NPTEL Hide/Show" in your bookmarks bar to hide answers</li>
          <li>
            This will add 2 buttons to the bottom of the page: "Reset" and
            "Check answers"
          </li>
        </ol>
      </div>
    </div>
  )
}

export default NptelPage
