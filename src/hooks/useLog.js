import { ref } from "vue";

export default function useLog() {
  const intro = ref("Hello, ");

  const log = (message) => {
    alert(intro.value + message);
  };

  return {
    log: log,
  };
}
