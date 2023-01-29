import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'app-triangles',
  templateUrl: './triangles.component.html',
  styleUrls: ['./triangles.component.css']
})
export class TrianglesComponent {
  @ViewChild('triangleUp') triangle_up: ElementRef | any;
  @ViewChild('triangleDown') triangle_down: ElementRef | any;
  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    this.hideTriangles(event.target.innerWidth);
    }

    ngAfterViewInit(event: { target: { innerWidth: number; }; }) {
      this.hideTriangles(event.target.innerWidth);
    }

    hideTriangles(width: number) {
      if(width < 1200) {
        this.triangle_up.nativeElement.style.display = 'none';
        this.triangle_down.nativeElement.style.display = 'none';
      } else {
        this.triangle_up.nativeElement.style.display = 'block';
        this.triangle_down.nativeElement.style.display = 'block';
      }
    }
}
