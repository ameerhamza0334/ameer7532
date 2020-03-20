import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css',
  '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
]
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
  
  }
 AppName = 'Rephraser.';

  onnavclick(event){
    
    let navelementid =  event.currentTarget.id;
    let elementnav : HTMLElement = document.querySelector("#" + navelementid);
    var Classes = elementnav.parentElement.classList;
    var parentID = elementnav.parentElement.id;
    Classes.add("active");
    let ParentElementVar :HTMLElement = document.querySelector("#listlinks");
    for(let j = 0; j < (ParentElementVar.children.length);j++){
      if(parentID != ParentElementVar.children[j].id){
        if(this.isactive(ParentElementVar.children[j])) {
          ParentElementVar.children[j].classList.remove("active");
        }

      }

    }
  }
  
isactive(val){

  var Classvar = val.classList;
  for(let i = 0 ; i< (Classvar.length); i++){
    if(Classvar[i] == "active"){
      return true;
    }

  }
}






}
