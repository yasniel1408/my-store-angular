export abstract class CrudBaseStoreService<S> {
  protected isLoading: boolean = false;

  constructor(protected baseService: S) {}

  getLoading() {
    return this.isLoading;
  }
}
