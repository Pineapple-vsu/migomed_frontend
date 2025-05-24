import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // toggleSpecialMode,
  setScriptsLoaded,
} from "../features/accessibility/accessibilitySlice";

export const useAccessibility = () => {
  const dispatch = useDispatch();
  const { isSpecialMode, scriptsLoaded } = useSelector(
    (state) => state.accessibility
  );

  useEffect(() => {
    const loadScripts = async () => {
      if (isSpecialMode && !scriptsLoaded) {
        try {
          // Проверяем наличие jQuery
          if (typeof window.jQuery === "undefined") {
            await new Promise((resolve, reject) => {
              const jqueryScript = document.createElement("script");
              jqueryScript.src = "https://lidrekon.ru/slep/js/jquery.js";
              jqueryScript.onload = () => {
                window.jQuery = window.$; // Экспортируем в глобальную область
                resolve();
              };
              jqueryScript.onerror = reject;
              document.body.appendChild(jqueryScript);
            });
          }

          // Загружаем основной скрипт после jQuery
          if (typeof window.uhpv === "undefined") {
            await new Promise((resolve) => {
              const uhpvScript = document.createElement("script");
              uhpvScript.src =
                "https://lidrekon.ru/slep/js/uhpv-hover-full.min.js";
              uhpvScript.onload = () => {
                // Инициализируем после загрузки
                setTimeout(() => {
                  window.uhpv.init({
                    /* конфиг */
                  });
                  resolve();
                }, 500);
              };
              document.body.appendChild(uhpvScript);
            });
          }

          dispatch(setScriptsLoaded(true));
        } catch (error) {
          console.error("Ошибка загрузки:", error);
          dispatch(setScriptsLoaded(false));
        }
      }
    };

    const initAccessibility = async () => {
      try {
        if (isSpecialMode && !scriptsLoaded) {
          // Загрузка jQuery только если не загружен
          if (!window.jQuery) {
            await loadScripts("https://lidrekon.ru/slep/js/jquery.js");
          }

          // Загрузка основного скрипта
          if (!window.uhpv) {
            await loadScripts(
              "https://lidrekon.ru/slep/js/uhpv-hover-full.min.js"
            );
          }

          // Инициализация после загрузки
          window.uhpv?.init({
            /* конфигурация при необходимости */
          });

          dispatch(setScriptsLoaded(true));
        }
      } catch (error) {
        console.error("Accessibility init error:", error);
        dispatch(setScriptsLoaded(false));
      }
    };

    const cleanup = () => {
      if (!isSpecialMode && scriptsLoaded) {
        window.uhpv?.destroy();
        document
          .querySelectorAll('script[src*="lidrekon.ru"]')
          .forEach((script) => {
            document.body.removeChild(script);
          });
        dispatch(setScriptsLoaded(false));
      }
    };

    initAccessibility();
    return cleanup;
  }, [isSpecialMode, scriptsLoaded, dispatch]);

  return { isSpecialMode, scriptsLoaded };
};
