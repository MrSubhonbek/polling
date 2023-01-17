"use client";
import { Provider } from "react-redux";
import styles from "./page.module.css";
import { store } from "@/store/store";
import { Test } from "./test";

export default function Home() {
  return (
    <main className={styles.main}>
      <Provider store={store}>
        <Test />
      </Provider>
    </main>
  );
}
