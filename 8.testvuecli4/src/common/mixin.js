import { debounce } from './utils'

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