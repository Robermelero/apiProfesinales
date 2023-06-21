import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StarsService } from 'src/app/shared/stars.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private toastr: ToastrService, public starsService: StarsService) { }
}
