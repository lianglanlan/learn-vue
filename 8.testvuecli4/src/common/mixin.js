import { debounce } from './utils'
import BackTop from "components/content/backTop/BackTop";

export const itemImgListener = {
    data() {
        return {
            itemImgListener: null,
        }
    },
    mounted() {
        const refresh = debounce(this.$refs.scroll.refresh, 200);
        this.itemImgListener = () => {
            this.$refs.scroll && refresh();
        };
        this.$bus.$on("itemImageLoad", this.itemImgListener);
    },
}

export const backTopMixin = {
    data() {
        return {
            isShowBackTop: false,
        }
    },
    components: {
        BackTop,
    },
    methods: {
        backClick() {
            this.$refs.scroll.scrollTo(0, 0, 500);
        },
    }
}