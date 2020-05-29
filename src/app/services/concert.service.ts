import { Injectable } from "@angular/core";
import { Concert } from "../models/concert";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

const CONCERT_URL = "http://localhost:3000/concerts/";

const URL = "http://localhost:3000/concerts?_expand=salle&_expand=genre";

const GENRE_URL = "http://localhost:3000/genres";

const SALLE_URL = "http://localhost:3000/salles";

export interface GenreInterface {
  id: number;
  nom: string;
}

export interface SalleInterface {
  id: number;
  nom: string;
  ville: string;
}

@Injectable({
  providedIn: "root",
})
export class ConcertService {
  private concertList: Concert[];

  public concertChanged: Subject<Concert[]>;

  constructor(private http: HttpClient) {
    this.concertChanged = new Subject<Concert[]>();
  }

  private getOneFromJSON(json) {
    const concert = new Concert();
    concert.fromJson(json);
    return concert;
  }

  private hydrateConcertList(data) {
    this.concertList = data.map((json: any) => this.getOneFromJSON(json));
  }

  public findAllGenres() {
    return this.http.get(GENRE_URL);
  }

  public findAllSalles() {
    return this.http.get(SALLE_URL);
  }

  public findAll() {
    this.http.get(URL).subscribe((data: any[]) => {
      this.hydrateConcertList(data);
      this.concertChanged.next(this.concertList);
    });
  }

  findOneById(id) {
    return this.http.get(URL + "&id=" + id);
  }

  public saveConcert(concert: Concert) {
    if (concert.getId()) {
      this.updateConcert(concert);
    } else {
      this.addConcert(concert);
    }
  }

  public updateConcert(concert: Concert) {
    this.http.put(CONCERT_URL + concert.getId(), concert.toJson()).subscribe(
      () => this.findAll(),
      (err) => console.log(err)
    );
  }

  public addConcert(concert: Concert) {
    this.http.post(CONCERT_URL, concert.toJson()).subscribe(
      () => this.findAll(),
      (err) => console.log(err)
    );
  }

  public findByGenre(genreId) {
    this.http.get(URL + "&genreId=" + genreId).subscribe((data) => {
      this.hydrateConcertList(data);
      this.concertChanged.next(this.concertList);
    });
  }

  public getSallesSummary() {
    let salles = [];
    this.concertList.forEach((item) => {
      let entry = {
        salle: item.getSalle(),
        note: item.getNote(),
        nb: 1,
      };
      const index = salles.findIndex((item) => item.salle == entry.salle);
      if (index >= 0) {
        salles[index].nb++;
        salles[index].note += entry.note;
      } else {
        salles.push(entry);
      }
    });

    return salles;
  }
}
