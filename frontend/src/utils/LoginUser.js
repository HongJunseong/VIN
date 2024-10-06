import { getCookie } from "./getCookie";

const LOGIN_URL = process.env.REACT_APP_BACKEND_URL + "/auth/signin";

export const loginUser = async (id, password) => {
  console.log(LOGIN_URL);
  const requestData = {
    userId: id,
    password: password,
    currentCookie: getCookie(),
  };

  try {
    const response = await fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    return response; // 로그인 결과를 반환
  } catch (error) {
    console.error("로그인 중 에러 발생:", error);
    throw error; // 에러를 다시 던져서 호출하는 쪽에서 처리할 수 있게 함
  }
};
