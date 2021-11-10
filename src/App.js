import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import { Subject, Observable } from "rxjs";
import { buffer, map, debounceTime, filter } from "rxjs/operators";
import s from "./secundomer.module.css";

export default function App() {
  const [sec, setSec] = useState(0);
  const [status, setStatus] = useState("stop");

  const start = () => {
    setStatus("run");
  };

  const stop = () => {
    setStatus("stop");
    setSec(0);
  };

  const reset = () => {
    setSec(0);
  };

  const wait = () => {
    waitDoubleClick$.next();
  };

  const waitDoubleClick$ = new Subject();

  waitDoubleClick$
    .pipe(
      buffer(waitDoubleClick$.pipe(debounceTime(300))),
      map((item) => item.length),
      filter((item) => item === 2)
    )
    .subscribe(() => {
      setStatus("wait");
    });
  useEffect(() => {
    if (status === "run") {
      const timer$ = new Observable((observer) => {
        let count = 0;
        const intervalId = setInterval(() => {
          observer.next((count += 1));
          console.log(count);
        }, 1000);

        return () => {
          clearInterval(intervalId);
        };
      });
      const observer = {
        next: () => {
          setSec((val) => val + 1000);
        },
        error: () => {
          console.log("error");
        },
        complete: () => {
          console.log("observer complete");
        },
      };
      const subscription = timer$.subscribe(observer);
      return () => {
        subscription.unsubscribe();
      };
    }
    if (status === "reset") {
      setStatus("run");
    }
  }, [status]);

  return (
    <div className={s.watch}>
      <span> {new Date(sec).toISOString().slice(11, 19)}</span>
      <button className={s.button} onClick={start}>
        Start
      </button>
      <button className={s.button} onClick={stop}>
        Stop
      </button>
      <button className={s.button} onClick={reset}>
        Reset
      </button>
      <button className={s.button} onClick={wait}>
        Wait
      </button>
    </div>
  );
}
