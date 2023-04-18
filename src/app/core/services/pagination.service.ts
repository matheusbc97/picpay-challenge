import { Inject, Injectable } from '@angular/core';

export interface BasePagination {
  pageIndex: number;
  pageSize: number;
  length: number;
  reset(): void;
  setPageSize(pageSize: number): void;
  setPageIndex(pageIndex: number): void;
}

@Injectable({
  providedIn: 'root',
})
export class PaginationService<T> implements BasePagination {
  private _data: T[] = [];
  public pageIndex = 0;
  public pageSize = 20;
  public length = 0;
  public data: T[] = [];

  constructor(@Inject(Array) data?: T[]) {
    if (data) {
      this._data = data;
      this.setData(data);
    }
  }

  setData(data: T[]) {
    this._data = data;
    this.pageSize = 20;
    this.length = this._data.length;
    this.reset();
  }

  reset() {
    this.pageIndex = 0;
    this.data = this._data.slice(0, this.pageSize);
  }

  setPageSize(pageSize: number) {
    this.pageSize = pageSize;
    this.reset();
  }

  setPageIndex(pageIndex: number) {
    this.pageIndex = pageIndex;
    this.data = this._data.slice(
      this.pageIndex * this.pageSize,
      this.pageIndex * this.pageSize + this.pageSize
    );
  }
}
