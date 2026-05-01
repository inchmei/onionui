import plugin from "tailwindcss/plugin";
import { accordionComponents } from "./components/accordion";
import { alertComponents } from "./components/alert";
import { artboardComponents } from "./components/artboard";
import { avatarComponents } from "./components/avatar";
import { badgeComponents } from "./components/badge";
import { breadcrumbsComponents } from "./components/breadcrumbs";
import { buttonComponents } from "./components/button";
import { calendarComponents } from "./components/calendar";
import { cardComponents } from "./components/card";
import { carouselComponents } from "./components/carousel";
import { chatComponents } from "./components/chat";
import { checkboxComponents } from "./components/checkbox";
import { collapseComponents } from "./components/collapse";
import { countdownComponents } from "./components/countdown";
import { diffComponents } from "./components/diff";
import { dividerComponents } from "./components/divider";
import { dockComponents } from "./components/dock";
import { drawerComponents } from "./components/drawer";
import { dropdownComponents } from "./components/dropdown";
import { fieldsetComponents } from "./components/fieldset";
import { fileInputComponents } from "./components/fileInput";
import { filterComponents } from "./components/filter";
import { footerComponents } from "./components/footer";
import { heroComponents } from "./components/hero";
import { indicatorComponents } from "./components/indicator";
import { inputComponents } from "./components/input";
import { joinComponents } from "./components/join";
import { kbdComponents } from "./components/kbd";
import { labelComponents } from "./components/label";
import { linkComponents } from "./components/link";
import { listComponents } from "./components/list";
import { loadingComponents } from "./components/loading";
import { maskComponents } from "./components/mask";
import { menuComponents } from "./components/menu";
import { modalComponents } from "./components/modal";
import { mockupComponents } from "./components/mockup";
import { navbarComponents } from "./components/navbar";
import { paginationComponents } from "./components/pagination";
import { progressComponents } from "./components/progress";
import { radialProgressComponents } from "./components/radialProgress";
import { radioComponents } from "./components/radio";
import { rangeComponents } from "./components/range";
import { ratingComponents } from "./components/rating";
import { selectComponents } from "./components/select";
import { sidebarComponents } from "./components/sidebar";
import { skeletonComponents } from "./components/skeleton";
import { stackComponents } from "./components/stack";
import { statsComponents } from "./components/stats";
import { statusComponents } from "./components/status";
import { stepsComponents } from "./components/steps";
import { swapComponents } from "./components/swap";
import { tableComponents } from "./components/table";
import { tabsComponents } from "./components/tabs";
import { textareaComponents } from "./components/textarea";
import { timelineComponents } from "./components/timeline";
import { toastComponents } from "./components/toast";
import { toggleComponents } from "./components/toggle";
import { validatorComponents } from "./components/validator";
import { themes } from "./themes";

export type OnionUIThemeName = keyof typeof themes;
export type OnionUIPluginOptions = {
  defaultTheme?: OnionUIThemeName;
};

const onionui = plugin.withOptions<OnionUIPluginOptions | undefined>(
  (options) =>
    ({ addBase, addComponents }) => {
      const defaultTheme = options?.defaultTheme ?? "light";

      addBase({
        ":root": themes[defaultTheme],
        ...Object.fromEntries(
          Object.entries(themes).map(([name, theme]) => [`[data-theme="${name}"]`, theme])
        ),
        ...Object.fromEntries(
          Object.entries(themes).map(([name, theme]) => [
            `:root:has(.theme-controller[value="${name}"]:checked)`,
            theme
          ])
        ),
        body: {
          backgroundColor: "rgb(var(--onion-bg) / 1)",
          color: "rgb(var(--onion-fg) / 1)",
          fontFamily: "var(--onion-font-family)"
        }
      });

      addComponents({
        ...accordionComponents,
        ...alertComponents,
        ...artboardComponents,
        ...avatarComponents,
        ...badgeComponents,
        ...breadcrumbsComponents,
        ...buttonComponents,
        ...calendarComponents,
        ...cardComponents,
        ...carouselComponents,
        ...chatComponents,
        ...checkboxComponents,
        ...collapseComponents,
        ...countdownComponents,
        ...diffComponents,
        ...dividerComponents,
        ...dockComponents,
        ...drawerComponents,
        ...dropdownComponents,
        ...fieldsetComponents,
        ...fileInputComponents,
        ...filterComponents,
        ...footerComponents,
        ...heroComponents,
        ...indicatorComponents,
        ...inputComponents,
        ...joinComponents,
        ...kbdComponents,
        ...labelComponents,
        ...linkComponents,
        ...listComponents,
        ...loadingComponents,
        ...maskComponents,
        ...menuComponents,
        ...modalComponents,
        ...mockupComponents,
        ...navbarComponents,
        ...paginationComponents,
        ...progressComponents,
        ...radialProgressComponents,
        ...radioComponents,
        ...rangeComponents,
        ...ratingComponents,
        ...selectComponents,
        ...sidebarComponents,
        ...skeletonComponents,
        ...stackComponents,
        ...statsComponents,
        ...statusComponents,
        ...stepsComponents,
        ...swapComponents,
        ...tableComponents,
        ...tabsComponents,
        ...textareaComponents,
        ...timelineComponents,
        ...toastComponents,
        ...toggleComponents,
        ...validatorComponents
      });
    },
  () => ({
    theme: {
      extend: {}
    }
  })
);

export { themes };
export default onionui;
