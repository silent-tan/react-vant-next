// 模拟异步请求
export async function getData(throwError?) {
  return new Promise<number[]>((resolve, reject) => {
    setTimeout(() => {
      if (throwError) {
        reject(new Error("error"));
      }
      resolve(Array.from({ length: 10 }, (_, i) => i));
    }, 2000);
  });
}
