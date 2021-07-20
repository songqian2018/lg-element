import LgLink from "../src/link.vue";

export default {
    title: 'LgLink',
    component: LgLink
}

export const Link = _ => ({
    components: { LgLink },
    templates: `
        <div>
            <lg-link :disabled="true" href="http://www.baidu.com">baidu</lg-link>
        </div>
    `
})