export class AppConstants {
    public static get internalURL(): string { return 'assets/data/data-main.json'; }
    public static get teamURL(): string { return 'https://angularexamplemg.firebaseio.com/team.json'; }
    public static get itemURL(): string { return 'https://angularexamplemg.firebaseio.com/products_idx.json'; }
    public static get productURL(): string { return 'https://angularexamplemg.firebaseio.com/products/'; }
    public static get getImgPath(): string { return 'assets/products/'; }
    public static productPath(id: string): string { return `https://angularexamplemg.firebaseio.com/products/${id}.json`; }
}
