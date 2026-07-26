import { nextTick, ref, watch, type Ref } from 'vue';

export const useScrollContainer = (trigger: Ref<unknown>) => {
  const scrollContainer = ref<HTMLElement | null>(null);

  const scrollToBottom = async () => {
    await nextTick();
    if (scrollContainer.value) {
      scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight;
    }
  };

  watch(
    trigger,
    () => {
      void scrollToBottom();
    },
    { immediate: true },
  );

  return {
    scrollContainer,
    scrollToBottom,
  };
};
