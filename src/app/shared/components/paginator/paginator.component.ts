import { Component, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { BasePagination } from 'src/app/core/services/pagination.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input() pagination: BasePagination | null = null;

  handlePageEvent(pageEvent: PageEvent) {
    if (pageEvent.pageSize !== this.pagination?.pageSize) {
      this.pagination?.setPageSize(pageEvent.pageSize);
      return;
    }

    this.pagination?.setPageIndex(pageEvent.pageIndex);
  }
}
