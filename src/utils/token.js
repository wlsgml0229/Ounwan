const TOKEN_KEY = "user_token";

export const token = {
  access: () => {
    return localStorage.getItem(TOKEN_KEY);
  },
  set: (token) => {
    localStorage.setItem(TOKEN_KEY, token);
  },
  remove: () => {
    localStorage.removeItem(TOKEN_KEY);
  },
};

// TODO: Login 체크 추가예정
export function isLogin() {}
