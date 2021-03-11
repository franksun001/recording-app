import React, { FC } from "react";
// import { DesktopHeader } from "./DesktopHeader";
// import { Title } from "components/Title";
// import style from "./DesktopWindow.module.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { desktopRouters } from "../../utils/routers";

const DesktopWindow: FC = () => {

  return (
    <Router>
      <Switch>
        {desktopRouters.map((_) => (
          <Route key={_.path} {..._} />
        ))}
      </Switch>
      {/* <DesktopHeader />
      <div className={style.container}>
        <header className={style.header}>
          <Title color="green">
            Current Locale: <b>{t("common.language")}</b>
            <br />
            {t("components.desktop.header")}
          </Title>
        </header>
        <main className={style.main}>
          <Title color="white">{t("components.desktop.main")}</Title>
        </main>
        <aside className={style.aside}>
          <Title color="white">{t("components.desktop.aside")}</Title>
        </aside>
        <footer className={style.footer}>
          <Title color="white">{t("components.desktop.footer")}</Title>
        </footer>
      </div> */}
    </Router>
  );
};

export default DesktopWindow;
