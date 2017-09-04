import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GnomesService } from '../gnomes.service';
import { GnomeInterface } from '../../interfaces';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  gnome: GnomeInterface;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private gnomesService: GnomesService,
  ) { }

  ngOnInit() {

    this.gnome = this.gnomesService.profile;
    // validate if route id is the same as data stored
    this.route.params.subscribe((params: Params) =>  {
      if(params.id !== this.gnome.id.toString())
        this.router.navigate(['gnomes/']);
    });
  }

}
