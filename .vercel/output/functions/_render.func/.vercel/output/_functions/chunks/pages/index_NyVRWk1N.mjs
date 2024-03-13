/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, k as renderComponent, m as maybeRenderHead } from '../astro_EHHrQPuD.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import jaLocale from '@fullcalendar/core/locales/ja';
import interactionPlugin from '@fullcalendar/interaction';
import { createClient } from '@supabase/supabase-js';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/koiketakuma/Documents/GitHub/astro-line-reservation/src/layouts/Layout.astro", void 0);

const supabaseUrl = "https://cadqrtsxuzccomtkiwpj.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhZHFydHN4dXpjY29tdGtpd3BqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk5ODMyNjQsImV4cCI6MjAyNTU1OTI2NH0.4-2AbYM2LWZLstowgUj6SIrefBGfLsDFyIqkVuFifDY";
const supabase = createClient(supabaseUrl, supabaseKey);

await supabase.from("react-schedule").select();
const ReactCalendar = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const { data: data2 } = await supabase.from("react-schedule").select();
    const items = data2.map((item) => ({
      title: item.title,
      start: item.start,
      end: item.end
    }));
    setEvents(items);
    console.log(items);
  }
  return /* @__PURE__ */ jsx("div", { className: "bg-white w-2/3 mx-auto", children: /* @__PURE__ */ jsx(
    FullCalendar,
    {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      initialView: "timeGridWeek",
      locales: [jaLocale],
      locale: "ja",
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek"
      },
      themeSystem: "bootstrap5",
      selectable: true,
      events
    }
  ) });
};

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    await supabase.from("react-schedule").insert({
      title: formData.get("title"),
      start: formData.get("startDate"),
      end: formData.get("endDate")
    });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container justify-center flex gap-1 mx-auto mt-10" data-astro-cid-j7pv25f6> <div class="w-1/5 bg-gray-200 p-2" data-astro-cid-j7pv25f6> <h2 class="text-center font-bold " data-astro-cid-j7pv25f6>予定入力</h2> <form action="/" method="post" class="flex flex-col items-center gap-3" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <label for="title" data-astro-cid-j7pv25f6>件名
<input type="text" id="title" name="title" class="w-full py-1" data-astro-cid-j7pv25f6> </label> </div> <div data-astro-cid-j7pv25f6> <label for="startDate" data-astro-cid-j7pv25f6>開始日時
<input type="datetime-local" class="w-full p-1" id="startDate" name="startDate" data-astro-cid-j7pv25f6> </label> </div> <div data-astro-cid-j7pv25f6> <label for="endDate" data-astro-cid-j7pv25f6>終了日時
<input type="datetime-local" class="w-full p-1" id="endDate" name="endDate" data-astro-cid-j7pv25f6> </label> </div> <button class="p-1 bg-yellow-800 w-4/5 mt-5" data-astro-cid-j7pv25f6>入力</button> </form> </div> ${renderComponent($$result2, "ReactCalendar", ReactCalendar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/koiketakuma/Documents/GitHub/astro-line-reservation/src/components/Calendar", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </div> ` })} `;
}, "/Users/koiketakuma/Documents/GitHub/astro-line-reservation/src/pages/index.astro", void 0);

const $$file = "/Users/koiketakuma/Documents/GitHub/astro-line-reservation/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
