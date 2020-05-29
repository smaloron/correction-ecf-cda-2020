import { Component, OnInit } from "@angular/core";
import { ConcertService, SalleInterface } from "../services/concert.service";

interface salleInterface {
  salle: string;
  note: number;
  nb: number;
}

@Component({
  selector: "app-stat-salle",
  templateUrl: "./stat-salle.page.html",
  styleUrls: ["./stat-salle.page.scss"],
})
export class StatSallePage implements OnInit {
  public sallesList: SalleInterface[] = [];

  constructor(private concertService: ConcertService) {}

  ngOnInit() {
    this.sallesList = this.concertService.getSallesSummary();
  }
}
