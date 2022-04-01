// Импортируем изображение, чтобы оно отображалось на страничке
import vector from "../images/vector.svg";
import React from "react";

/**
 *  Функция: Создание компонента Header, который отвечает за прорисовку логотипа на сайте
 */
function Header(props) {
    return (
        <header className="header">
            <img src={vector} alt="Логотип сервиса" className="header__logo" />

            <nav className="nav-menu">{props.children}</nav>
        </header>
    );
}
// Экспорт компонента, чтобы потом можно было с ним работать
export default Header;
