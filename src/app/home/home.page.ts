import { Component, OnInit } from "@angular/core";
import { ConcertService, GenreInterface } from "../services/concert.service";
import { Concert } from "../models/concert";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  public concertList: Concert[];

  private concertChanged: Observable<Concert[]>;

  public genreId = null;

  public genreList: GenreInterface[] = [];

  constructor(private concertService: ConcertService) {}

  ngOnInit(): void {
    this.concertChanged = this.concertService.concertChanged;
    this.concertChanged.subscribe((data) => (this.concertList = data));
    this.concertService.findAll();

    this.concertService
      .findAllGenres()
      .subscribe((data: any[]) => (this.genreList = data));
  }

  onGenreChange() {
    if (this.genreId) {
      this.concertService.findByGenre(this.genreId);
    } else {
      this.concertService.findAll();
    }
  }
}
