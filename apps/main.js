

const app = new Vue({
    el: "#custom-link",
    data:{
        ngroklink:""
    },
    template: `
    <div>
        <input v-model="ngroklink" class="style-1" type="text" id="custom-link" autocapitalize="none" />
        <div class="link">
            <a :href="'boxer-feature://BoxerEnsEnabledForPush?signature=e1df6749968518e89521c7a5aa2253d1&url=http%3A%2F%2F' + ngroklink + '.ngrok.io%2FMailNotificationService%2Fapi%2Fens'">
                Enable entered ngrok ENS
            </a>
        </div>
    </div>
    `
})