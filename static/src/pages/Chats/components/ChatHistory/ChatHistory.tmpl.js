export const chatHistoryTmplRender = ({ messages }) => {
    const chatEpty = `
        <div class="chat-history__placeholder">
            Выберите чат чтобы отправить сообщение
        </div>
    `;
    const chatHeader = `
        <header>
            <div class="chat-history__chat-name">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.8 460.8" style="enable-background:new 0 0 460.8 460.8"><g><g><path d="M230.432.0c-65.829.0-119.641 53.812-119.641 119.641s53.812 119.641 119.641 119.641 119.641-53.812 119.641-119.641S296.261.0 230.432.0z"/></g></g><g><g><path d="M435.755 334.89c-3.135-7.837-7.314-15.151-12.016-21.943-24.033-35.527-61.126-59.037-102.922-64.784-5.224-.522-10.971.522-15.151 3.657-21.943 16.196-48.065 24.555-75.233 24.555s-53.29-8.359-75.233-24.555c-4.18-3.135-9.927-4.702-15.151-3.657-41.796 5.747-79.412 29.257-102.922 64.784-4.702 6.792-8.882 14.629-12.016 21.943-1.567 3.135-1.045 6.792.522 9.927 4.18 7.314 9.404 14.629 14.106 20.898 7.314 9.927 15.151 18.808 24.033 27.167 7.314 7.314 15.673 14.106 24.033 20.898 41.273 30.825 90.906 47.02 142.106 47.02s100.833-16.196 142.106-47.02c8.359-6.269 16.718-13.584 24.033-20.898 8.359-8.359 16.718-17.241 24.033-27.167 5.224-6.792 9.927-13.584 14.106-20.898C436.8 341.682 437.322 338.024 435.755 334.89z"/></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>

                <span>Вадим</span>
            </div>

            <ul class="chat-history__user-toolbar">
                <li data-component="ToggleAddUserPopup"></li>
                <li data-component="ToggleRemoveUserPopup"></li>
            </ul>
        </header>
    `;
    const chatFooter = `
        <footer>
            <nav class="chat-attachment">
                <button class="btn btn_no-style chat-actions__toggle-menu">
                    <svg enable-background="new 0 0 16 16" height="16px" viewBox="0 0 16 16" width="16px" xmlns="http://www.w3.org/2000/svg"><path d="m226 512c-49.626.0-90-40.374-90-90V120c0-66.168 53.832-120 120-120s120 53.832 120 120v302h-30V120c0-49.626-40.374-90-90-90s-90 40.374-90 90v302c0 33.084 26.916 60 60 60s60-26.916 60-60V180c0-16.542-13.458-30-30-30s-30 13.458-30 30v242h-30V180c0-33.084 26.916-60 60-60s60 26.916 60 60v242c0 49.626-40.374 90-90 90z"/></svg>
                </button>

                <div class="menu">
                    <ul>
                        <li>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 430.23 430.23" style="enable-background:new 0 0 430.23 430.23"><g><g><g><path fill="#3369F3" d="M217.875 159.668c-24.237.0-43.886 19.648-43.886 43.886.0 24.237 19.648 43.886 43.886 43.886 24.237.0 43.886-19.648 43.886-43.886C261.761 179.316 242.113 159.668 217.875 159.668zM217.875 226.541c-12.696.0-22.988-10.292-22.988-22.988.0-12.696 10.292-22.988 22.988-22.988h0c12.696.0 22.988 10.292 22.988 22.988C240.863 216.249 230.571 226.541 217.875 226.541z"/><path fill="#3369F3" d="M392.896 59.357 107.639 26.966c-11.071-1.574-22.288 1.658-30.824 8.882-8.535 6.618-14.006 16.428-15.151 27.167l-5.224 42.841H40.243c-22.988.0-40.229 20.375-40.229 43.363V362.9c-.579 21.921 16.722 40.162 38.644 40.741.528.014 1.057.017 1.585.01h286.824c22.988.0 43.886-17.763 43.886-40.751v-8.359c7.127-1.377 13.888-4.224 19.853-8.359 8.465-7.127 13.885-17.22 15.151-28.212l24.033-212.114C432.44 82.815 415.905 62.088 392.896 59.357zM350.055 362.9c0 11.494-11.494 19.853-22.988 19.853H40.243c-10.383.305-19.047-7.865-19.352-18.248-.016-.535-.009-1.07.021-1.605v-38.661l80.98-59.559c9.728-7.469 23.43-6.805 32.392 1.567l56.947 50.155c8.648 7.261 19.534 11.32 30.825 11.494 8.828.108 17.511-2.243 25.078-6.792l102.922-59.559V362.9zM350.055 236.99l-113.894 66.351c-9.78 5.794-22.159 4.745-30.825-2.612l-57.469-50.678c-16.471-14.153-40.545-15.021-57.992-2.09l-68.963 50.155V149.219c0-11.494 7.837-22.465 19.331-22.465h286.824c12.28.509 22.197 10.201 22.988 22.465V236.99zM409.112 103.035c-.007.069-.013.139-.021.208l-24.555 212.114c.042 5.5-2.466 10.709-6.792 14.106-2.09 2.09-6.792 3.135-6.792 4.18V149.219c-.825-23.801-20.077-42.824-43.886-43.363H77.337l4.702-40.751c1.02-5.277 3.779-10.059 7.837-13.584 4.582-3.168 10.122-4.645 15.674-4.18l284.735 32.914C401.773 81.346 410.203 91.545 409.112 103.035z"/></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>
                                Фото или Видео
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <svg  enable-background="new 0 0 510 510" height="16px" viewBox="0 0 510 510" width="16px" xmlns="http://www.w3.org/2000/svg"><g><path  fill="#3369F3" d="m405 60V0H60v465h60v45h231.213l98.787-98.787v-351.213zM90 435V30h285v30H120v375zm60-345h270v3e2h-90v90H150zm248.787 330-38.787 38.787V420z"/><path fill="#3369F3" d="m180 120h210v30H180z"/><path fill="#3369F3" d="m180 180h210v30H180z"/><path fill="#3369F3" d="m180 240h210v30H180z"/><path fill="#3369F3" d="m180 3e2h210v30H180z"/><path fill="#3369F3" d="m180 360h105v30H180z"/></g></svg>
                                Файл
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div class="input-control">
                <input type="text" name="message" id="message">
                <label for="message">Сообщение</label>
            </div>

            <button class="btn btn_no-style btn-send">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 367.92 367.92" style="enable-background:new 0 0 367.92 367.92"><g><g><g><path d="M367.851 6.944c-.056-.424-.12-.832-.248-1.248-.136-.456-.32-.872-.528-1.296-.112-.232-.152-.48-.288-.704-.088-.144-.232-.24-.336-.376-.264-.368-.576-.688-.904-1.016-.328-.328-.656-.632-1.032-.896-.136-.096-.224-.232-.36-.312-.224-.136-.472-.168-.704-.28-.44-.216-.872-.4-1.336-.536-.392-.104-.776-.16-1.176-.208-.472-.056-.928-.088-1.4-.064-.44.024-.864.112-1.296.216-.272.064-.552.04-.824.136l-352 120c-3.184 1.072-5.352 4.04-5.416 7.408-.064 3.368 1.984 6.416 5.136 7.624l164.456 63.192 71.064 164.512c1.272 2.936 4.168 4.824 7.344 4.824.136.0.264.0.4-.008 3.336-.168 6.208-2.384 7.224-5.56l112-352c.08-.248.056-.504.104-.76.096-.448.168-.88.184-1.336C367.931 7.808 367.907 7.384 367.851 6.944zM31.475 128.368 330.011 26.592 173.619 182.984 31.475 128.368zM246.859 337.112l-61.76-142.976L342.403 36.824 246.859 337.112z"/><path d="M125.659 242.264c-3.128-3.128-8.184-3.128-11.312.0l-112 112c-3.128 3.128-3.128 8.184.0 11.312 1.56 1.56 3.608 2.344 5.656 2.344s4.096-.784 5.656-2.344l112-112C128.787 250.448 128.787 245.392 125.659 242.264z"/><path d="M146.347 298.264l-56 56c-3.128 3.128-3.128 8.184.0 11.312 1.56 1.56 3.608 2.344 5.656 2.344 2.048.0 4.096-.784 5.656-2.344l56-56c3.128-3.128 3.128-8.184.0-11.312C154.531 295.136 149.475 295.136 146.347 298.264z"/><path d="M8.003 279.92c2.048.0 4.096-.784 5.656-2.344l56-56c3.128-3.128 3.128-8.184.0-11.312-3.128-3.128-8.184-3.128-11.312.0l-56 56c-3.128 3.128-3.128 8.184.0 11.312C3.907 279.136 5.955 279.92 8.003 279.92z"/></g></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>
            </button>
        </footer>
    `;
    const chatBody = `
        <section class="chat-history__body" data-component="Popups">
            <div class="chat-history__group" data-component="messages">
                <div class="chat-history__time">19 июня</div>
            </div>
        </section>
    `;
    return messages
        ? chatHeader + chatBody + chatFooter
        : chatEpty;
};
//# sourceMappingURL=ChatHistory.tmpl.js.map