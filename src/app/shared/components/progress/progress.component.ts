import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent  {
  isLoading$=this.spinnerService.isLoading$;

  constructor(private  spinnerService: SpinnerService){}

}
