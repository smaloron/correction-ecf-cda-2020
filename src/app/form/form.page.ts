import { Component, OnInit } from "@angular/core";
import { Concert } from "../models/concert";
import { Router, ActivatedRoute } from "@angular/router";
import {
  ConcertService,
  GenreInterface,
  SalleInterface,
} from "../services/concert.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.page.html",
  styleUrls: ["./form.page.scss"],
})
export class FormPage implements OnInit {
  public concert: Concert;

  public genreList: GenreInterface[] = [];

  public salleList: SalleInterface[] = [];

  constructor(
    private router: Router,
    private concertSrv: ConcertService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.concert = new Concert();

    //Récupération de la liste des genres
    this.concertSrv
      .findAllGenres()
      .subscribe((data: GenreInterface[]) => (this.genreList = data));

    //récupération de la liste des salles
    this.concertSrv
      .findAllSalles()
      .subscribe((data: SalleInterface[]) => (this.salleList = data));

    //Récupération de l'id passé en paramètre
    const id = this.activatedRoute.snapshot.paramMap.get("id");

    //Si id n'est pas null alors on interroge le service
    //pour récupérer les infos du concert
    if (id) {
      this.concertSrv.findOneById(id).subscribe((data) => {
        this.concert.fromJson(data[0]);
      });
    }
  }

  validate() {
    //Conversion de la saisie (string) en objet Date
    this.concert.setDateConcert(new Date(this.concert.getDateConcert()));
    //Ajout du concert
    this.concertSrv.saveConcert(this.concert);
    //Retour à l'accueil
    this.router.navigate(["/home"]);
  }
}
