import "./App.css";
import React from "react";
import { useEffect, useState, useCallback } from "react";
import { Subject, interval } from "rxjs";
import { takeUntil } from "rxjs/operators";
import s from "./secundomer.module.css";

export default function App() {
  const [sec, setSec] = useState(0);
  const [status, setStatus] = useState("stop");

  useEffect(() => {
    const unsubscribe$ = new Subject();
    interval(1000)
      .pipe(takeUntil(unsubscribe$))
      .subscribe(() => {
        if (status === "run") {
          setSec((val) => val + 1000);
        }
      });
    return () => {
      unsubscribe$.next();
      unsubscribe$.complete();
    };
  }, [status]);

  const start = useCallback(() => {
    setStatus("run");
  }, []);

  const stop = useCallback(() => {
    setStatus("stop");
    setSec(0);
  }, []);

  const reset = useCallback(() => {
    setSec(0);
  }, []);

  const wait = useCallback(() => {
    setStatus("wait");
  }, []);

  return (
    <div>
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
