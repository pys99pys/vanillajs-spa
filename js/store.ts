import { StoreType } from '../interface/store.js';
import loading from '../components/loading.js';

export default class Store implements StoreType {
  private _loading = false;
  private $loadingEl: HTMLElement | null = null;

  get loading() {
    return this._loading;
  }

  set loading(afterLoading: boolean) {
    this._loading = afterLoading;

    if (afterLoading) {
      this.$loadingEl = loading();
      document.body.appendChild(this.$loadingEl);
    } else {
      if (!this.$loadingEl) return;
      this.$loadingEl.parentElement?.removeChild(this.$loadingEl);
    }
  }

  setLoading(afterLoading: boolean) {
    this.loading = afterLoading;
  }
}
