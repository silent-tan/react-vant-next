import { noop } from "../lodash-like/noop";
import { isPromise } from "../validate/is";

export type Interceptor = (...args: any[]) => Promise<boolean> | boolean;

export function callInterceptor<T extends (...args: any[]) => any>(options: {
  interceptor?: T;
  args: Parameters<T>;
  done: () => void;
  canceled?: () => void;
}) {
  const { interceptor, args, done, canceled } = options;

  if (interceptor) {
    // eslint-disable-next-line prefer-spread
    const returnVal = interceptor.apply(null, args || []);

    if (isPromise(returnVal)) {
      returnVal
        .then((value) => {
          if (value) {
            done();
          }
          else if (canceled) {
            canceled();
          }
        })
        .catch(noop);
    }
    else if (returnVal) {
      done();
    }
    else if (canceled) {
      canceled();
    }
  }
  else {
    done();
  }
}
