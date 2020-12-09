export const chatsAsideTmplRender = () => {
    return `
        <header>
            <div class="chats__to-profile">
                <a href="./profile.html">
                    Профиль

                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.002 512.002" style="enable-background:new 0 0 512.002 512.002"><g><g><path fill="#999999" d="M388.425 241.951 151.609 5.79c-7.759-7.733-20.321-7.72-28.067.04-7.74 7.759-7.72 20.328.04 28.067l222.72 222.105L123.574 478.106c-7.759 7.74-7.779 20.301-.04 28.061 3.883 3.89 8.97 5.835 14.057 5.835 5.074.0 10.141-1.932 14.017-5.795l236.817-236.155c3.737-3.718 5.834-8.778 5.834-14.05S392.156 245.676 388.425 241.951z" stroke="#f0f0f0" /></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>
                </a>
            </div>

            <form class="chats__search">
                <input type="text" name="chatName" id="chatName">

                <button class="btn btn_no-style" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.005 512.005" style="enable-background:new 0 0 512.005 512.005"><g><g><path fill="#000000" d="M505.749 475.587l-145.6-145.6c28.203-34.837 45.184-79.104 45.184-127.317.0-111.744-90.923-202.667-202.667-202.667S0 90.925.0 202.669s90.923 202.667 202.667 202.667c48.213.0 92.48-16.981 127.317-45.184l145.6 145.6c4.16 4.16 9.621 6.251 15.083 6.251s10.923-2.091 15.083-6.251C514.091 497.411 514.091 483.928 505.749 475.587zM202.667 362.669c-88.235.0-160-71.765-160-160s71.765-160 160-160 160 71.765 160 160S290.901 362.669 202.667 362.669z"/></g></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>
                </button>
            </form>
        </header>

        <section class="chats__body" data-component="children"></section>
    `;
};
