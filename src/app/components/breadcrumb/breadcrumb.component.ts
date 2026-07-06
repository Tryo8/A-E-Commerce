import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { filter } from 'rxjs';
@Component({
  selector: 'app-breadcrumb',
  imports: [BreadcrumbModule, RouterLinkActive],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  constructor(private router: Router, private route: ActivatedRoute){}

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

    ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateBreadcrumbs();
      });
      this.home = { icon: 'pi pi-home', routerLink: '/' };

    this.updateBreadcrumbs(); // initial load
  }

  private updateBreadcrumbs() {
    const urlSegments = this.router.url.split('/').filter(segment => segment);
    this.items = urlSegments.map((segment, index) => ({
      label: this.formatSegment(segment),
      routerLink: '/' + urlSegments.slice(0, index + 1).join('/'),
    }));
  }

  private formatSegment(segment: string): string {
    // Capitalize first letter or customize label formatting
    return segment.charAt(0).toUpperCase() + segment.slice(1);
  }

}
