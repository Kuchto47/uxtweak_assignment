import { ref, watch } from 'vue';

const NICKNAME_KEY = 'nickname';

const nickname = ref(localStorage.getItem(NICKNAME_KEY) || '');

watch(nickname, (newNickname) => {
  localStorage.setItem(NICKNAME_KEY, newNickname);
});

export function useNickname() {
  return {
    nickname,
  };
}
