import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function callbeck(e) {
        if (e.code === key) {
          action();
        }
      }
      document.addEventListener("keydown", callbeck);
      return function () {
        document.removeEventListener("keydown", callbeck);
      };
    },
    [key, action]
  );
}
