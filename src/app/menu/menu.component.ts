import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  implements AfterViewInit{
  navigationOpts = [
    'home',
    'projects',
    'info',
    'contact'
  ];

  @ViewChild('nav0') nav0: ElementRef | any;
  @ViewChild('nav1') nav1: ElementRef | any;
  @ViewChild('nav2') nav2: ElementRef | any;
  @ViewChild('nav3') nav3: ElementRef | any;
  ngAfterViewInit() {
    this.changeContent(0);
    this.nav0.nativeElement.addEventListener('click', () => this.changeContent(0), false);
    this.nav1.nativeElement.addEventListener('click', () => this.changeContent(1), false);
    this.nav2.nativeElement.addEventListener('click', () => this.changeContent(2), false);
    this.nav3.nativeElement.addEventListener('click', () => this.changeContent(3), false);
  }

  @ViewChild('cbr') cbr: ElementRef | any;

  public textWidth = '16vw';
  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    if(event.target.innerWidth < 1200) {
      this.textWidth = '75vw';
    } else {
      this.textWidth = '16vw';
    }
  }

  contentBottomRight: string[] = [
    "<p>" +
    "Born in 2006, I am a\n" +
    "self-taught programmer\n" +
    "from Hanover, Germany,\n" +
    "currently in school with\n" +
    "a strong focus on math and science,\n" +
    "and a passion for programming.\n" +
    "I have experience in creating\n" +
    "small and medium sized projects using\n" +
    "HTML, Rust, Dart, and C++\n" +
    "and familiar with popular\n" +
    "associated frameworks and libraries. " +
    "</p>",

    "<h2>" +
    "biga" +
    "</h2>" +
    "<a class='cntLink' href='https://github.com/simonpla/biga'>github.com/simonpla/biga</a>" +
    "<h2>" +
    "web quiz" +
    "</h2>" +
    "<a class='cntLink' href='https://github.com/simonpla/hulsenfruchtequiz'>github.com/simonpla/hulsenfruchtequiz</a>",

    "<h2>" +
    "github" +
    "</h2>" +
    "<a class='cntLink' href='https://github.com/simonpla'>github.com/simonpla</a>" +
    "<h2>" +
    "twitter" +
    "</h2>" +
    "<a class='cntLink' href='https://twitter.com/kamelisum'>twitter.com/kamelisum</a>",

    "<a href=\"mailto:simon.plachta@gmx@@net\"\n" +
    "   onmouseover=\"this.href=this.href.replace('@@','.')\">\n" +
    "   simon.plachta@gmx.net" +
    "</a>"
  ];

  changeContent (id: number) {
    this.cbr.nativeElement.innerHTML = this.contentBottomRight[id];
  }
}
