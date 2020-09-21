import loading from '../components/loading.js';
export default class Store {
    constructor() {
        this._loading = false;
        this.$loadingEl = null;
    }
    get loading() {
        return this._loading;
    }
    set loading(afterLoading) {
        var _a;
        this._loading = afterLoading;
        if (afterLoading) {
            this.$loadingEl = loading();
            document.body.appendChild(this.$loadingEl);
        }
        else {
            if (!this.$loadingEl)
                return;
            (_a = this.$loadingEl.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(this.$loadingEl);
        }
    }
    setLoading(afterLoading) {
        this.loading = afterLoading;
    }
}
//# sourceMappingURL=store.js.map