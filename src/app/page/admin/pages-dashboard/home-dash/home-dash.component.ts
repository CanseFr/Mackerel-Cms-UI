import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../../../service/HomeService/home.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home-dash',
  templateUrl: './home-dash.component.html',
  styleUrls: ['./home-dash.component.scss']
})
export class HomeDashComponent implements OnInit{

  homeContent = this.homeService.homeContantList

  constructor(private homeService: HomeService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.homeService.getHomeContent()
  }

  formulaire: FormGroup = this.formBuilder.group({
    block1_message: ["", [] ],
    block1_auteur: ["", [] ],
    block1_titre: ["", [] ],

    block2_Art1_titre: ["", [] ],
    block2_Art1_message: ["", [] ],
    block2_Art1_btn: ["", [] ],
    block2_Art1_img: ["", [] ],

    block2_Art2_titre: ["", [] ],
    block2_Art2_message: ["", [] ],
    block2_Art2_btn: ["", [] ],
    block2_Art2_img: ["", [] ],

    block3_title: ["", [] ],
    block3_btn: ["", [] ],
    block3_img: ["", [] ],
  })

  onSubmit(){
    if(this.formulaire.valid){
      console.log(this.formulaire.value)
    }
  }

}
